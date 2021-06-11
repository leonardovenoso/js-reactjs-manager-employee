import { useEffect, useState } from 'react';
import Title from '../../atoms/title';
import Container from '../../atoms/container';
import SearchForm from '../../molecules/searchForm';
import FormStore from '../../../../stores/formStore';

const FormPage = () => {
  const [setShowResults, showResults] = useState(false);
  const search = FormStore.useState(state => state.search);

  useEffect(() => {
    console.log(setShowResults);
  }, [search]);

  return (
    <Container margin="6em auto auto auto">
      <Title size="3em">Employee Explorer</Title>
      <Container margin="4em auto auto auto">
        <SearchForm />
      </Container>
      <Container margin="2em auto auto auto">
        {showResults && <Title size="1.2em">Subordinates of {search}</Title>}
      </Container>
    </Container>
  );
};

export default FormPage;
