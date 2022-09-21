import { ChangeEvent, useState } from 'react';

interface IFormState {
  [ key: string ]: string;
};

// interface IFormValidations {
//   [ key: string ]: [ () => void, string ];
// };
//
export const useForm = <T extends IFormState> ( initialState : T, formValidations? : IFormValidations ) => {

  const [ formState, setFormState ] = useState<T>( initialState );

  const onInputChange = ( { target } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  };

  return {
    formState,
    onInputChange,
    ...formState
  };
};
