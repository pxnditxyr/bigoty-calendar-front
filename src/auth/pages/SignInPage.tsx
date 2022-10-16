import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useAuthStore, useForm } from '../../hooks';
import { FormEvent, useEffect } from 'react';
import Swal from 'sweetalert2';

const formState = {
  user: 'yuki12',
  password: '123456',
}

export const SignInPage = () => {

  const { startSignIn, errorMessage } = useAuthStore();

  const {
    user, password, onInputChange
  } = useForm( formState );
  
  const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    startSignIn({ user, password });
  };

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      if ( typeof errorMessage === 'string' ) {
        Swal.fire( 'Error in sign in', errorMessage, 'error' );
      } else {
        Swal.fire( 'Error in sign in', errorMessage.join( ',\n' ), 'error' );
      }
    }
  }, [ errorMessage ] );

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={ onSubmit }>
        <FormField 
          name="user"
          type="text"
          value={ user }
          onChange={ onInputChange }
          placeholder="Email or Username"
        />
        <FormField
          name="password"
          type="password"
          value={ password }
          onChange={ onInputChange }
          placeholder="Password"
        />
        <button> Sign In </button>
      </form>
      <button> Sign In with Google </button>
      <Link to="../signup"> Already have an account? Sign Up </Link>
    </AuthLayout>
  );
};
