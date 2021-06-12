import { useEffect, useState } from 'react';
import Title from '../../atoms/title';
import Container from '../../atoms/container';
import SearchForm from '../../molecules/searchForm';
import FormStore from '../../../../stores/formStore';
import fetchEmployeeTree from '../../../../services/api';

const FormPage = () => {
  const [showResults, setShowResults] = useState(false);
  const [subordinates, setSubordinates] = useState([]);
  const [search, setSearch] = useState('');
  FormStore.useState(state => setSearch(state.search));

  useEffect(() => {
    const fetchData = async search => {
      if (search == '') {
        setShowResults(false);
        return;
      }
      const resp = await fetchEmployeeTree(new Set(), search, new Set());
      setSubordinates(Array.from(resp || []));
      setShowResults(true);
    };

    fetchData(search);
  }, [search]);

  return (
    <Container margin="6em auto auto auto">
      <Title size="3em">Employee Explorer</Title>
      <Container margin="4em auto auto auto">
        <SearchForm />
      </Container>
      <Container margin="2em auto auto auto" align="center">
        {showResults && <Title size="1.2em">Subordinates of {search}</Title>}
        {subordinates.length > 0 &&
          subordinates.map((subordinate, i) => <p key={i}>{subordinate}</p>)}
        {showResults && subordinates.length === 0 && (
          <p>No subordinates found</p>
        )}
      </Container>
    </Container>
  );
};

export default FormPage;
