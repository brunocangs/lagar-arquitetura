import {useState} from 'react';

const useForm = (state) => {
  const [field, setField] = useState(state);
  const setFormState = ({target:{value}}) => setField(value);
  return [field, setFormState];
};

export default useForm;