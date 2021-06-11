import { useRef } from 'react';
import Form from '../../atoms/form';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import FormState from '../../../../stores/formStore';

const SearchForm = () => {
  const inputRef = useRef(null);
  const updateSearch = () => {
    FormState.update(state => {
      state.search = inputRef.current.value;
    });
  };

  return (
    <Form>
      <div>
        <Input type="text" placeholder="John Hartman" ref={inputRef} />
      </div>
      <div>
        <Button onClick={updateSearch}>Search</Button>
      </div>
    </Form>
  );
};

export default SearchForm;
