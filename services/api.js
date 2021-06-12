import * as data from './data';

const Data = (employeeName) => {
  const Employees = {
    "ff": data.John_Hartman,
    "John Hartman": data.John_Hartman,
    "Samad Pitt": data.Samad_Pitt,
    "Leanna Hogg": data.Leanna_Hogg,
    "Vincent Todd": data.Vincent_Todd,
    "Amaya Knight": data.Amaya_Knight,
    "Faye Oneill": data.Faye_Oneill,
    "Lynn Haigh": data.Lynn_Haigh,
    "Aila Hodgson": data.Aila_Hodgson,
    "Nylah Riddle": data.Nylah_Riddle
  }

  return {
    json: () => Employees[employeeName]
  };
}

const fetchEmployeeData = (employeeName) => {
  return new Promise((resolve) => {
    return resolve(Data(employeeName));
  });
}

const fetchEmployeeTree = async (subordinatesSet, employeeName, accumulator) => {
  const hasSubordinates = obj => (obj && obj[1] && obj[1]['direct-subordinates'] && obj[1]['direct-subordinates'].length > 0);
  const isEmployee = obj => (obj && obj[0] === 'employee');

  const start = async (subordinatesSet, employeeName, accumulator) => {
    const res = await fetchEmployeeData(employeeName);
    const resJson = res.json();

    if (isEmployee(resJson)) return null;
    if (hasSubordinates(resJson)) {
      const directSubordinates = resJson[1]['direct-subordinates'];
      subordinatesSet = new Set(directSubordinates);
      const indirectSubordinates = await Promise.all(directSubordinates.map(subordinateName => start(subordinatesSet, subordinateName, accumulator)));
      indirectSubordinates.filter(subs => subs !== null).forEach(subs => {
        subordinatesSet = new Set([...subordinatesSet, ...subs]);
      });
    }

    accumulator = [...accumulator, ...subordinatesSet];
    return subordinatesSet;
  }

  const res = start(subordinatesSet, employeeName, accumulator);
  return res;
}

export default fetchEmployeeTree;