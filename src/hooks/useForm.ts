import { ChangeEvent, useEffect, useState } from 'react';

export interface IFormState {
  [ key: string ]: string;
};

interface IFormValidations {
  [ key: string ]: [ ( value : string ) => boolean, string ];
};

interface IFormCheckValues {
  [ key: string ]: string | null;
}

export const useForm = <T extends IFormState> ( initialState : T, formValidations? : IFormValidations ) => {

  const [ formState, setFormState ] = useState<T>( initialState );
  const [ formValidation, setFormValidation ] = useState<IFormCheckValues>( {} as IFormCheckValues );

  useEffect( () => {
    setFormState( initialState );
  }, [ initialState ]);

  useEffect( () => {
    createValidators();
  }, [ formState ]);


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

  const createValidators = () => {
    const formCheckValues : IFormCheckValues = {};
    if ( !formValidations ) return;
    for ( const formField of Object.keys( formValidations ) ) {
      const [ fn, errorMessage ] = formValidations[ formField ];
      formCheckValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;
    }
    setFormValidation( formCheckValues );
  };

  return {
    formState,
    onInputChange,
    onSetNewForm,
    ...formState,
    ...formValidation
  };
};
