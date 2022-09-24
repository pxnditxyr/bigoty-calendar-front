import { ChangeEvent, useState } from 'react';

export interface IFormState {
  [ key: string ]: string;
};

interface IFormValidations {
  [ key: string ]: [ () => void, string ];
};

export const useForm = <T extends IFormState> ( initialState : T, formValidations? : IFormValidations ) => {

  const [ formState, setFormState ] = useState<T>( initialState );

  const onInputChange = ( { target } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  };

  const onSetNewForm = ( newForm : T ) => {
    setFormState({
      ...newForm
    })
  };

  return {
    formState,
    onInputChange,
    onSetNewForm,
    ...formState
  };
};
