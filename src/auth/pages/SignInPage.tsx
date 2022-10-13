import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useForm } from '../../hooks';
import { FormEvent } from 'react';

const formState = {
  user: '',
  password: ''
}

export const SignInPage = () => {
  const {
    user, password, onInputChange
  } = useForm( formState );
  
  const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log( user, password );
  };

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
