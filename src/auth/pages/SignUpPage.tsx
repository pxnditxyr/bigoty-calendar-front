import { Link } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

const formData = {
  lastName: 'ricaldi',
  name:     'jose enrique',
  birthday: '',
  username: 'yuki0',
  email:    'yuki0@gmail.com',
  password: '123456',
  confirmPassword: '123456',
}

export const SignUpPage = () => {

  const {
    lastName, name, birthday, username, email,
    password, confirmPassword, onInputChange,
  } = useForm( formData );

  const { startSignUp, errorMessage } = useAuthStore();

  const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if ( password !== confirmPassword ) {
      Swal.fire( 'Error in sign up', 'Passwords must be the same', 'error' );
      return;
    }
    startSignUp({ lastName, name, birthday, username, email, password });
  }

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      if ( typeof errorMessage === 'string' ) {
        Swal.fire( 'Error in sign up', errorMessage, 'error' );
      } else {
        Swal.fire( 'Error in sign up', errorMessage.join( ',\n' ), 'error' );
      }
    }
  }, [ errorMessage ] );


  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={ onSubmit }>
        <FormField
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={ lastName }
          onChange={ onInputChange }
        />
        <FormField
          name="name"
          type="text"
          placeholder="Name"
          value={ name }
          onChange={ onInputChange }
        />
        <FormField
          name="birthday"
          type="date"
          placeholder="Birthday"
          value={ birthday }
          onChange={ onInputChange }
        />
        <FormField
          name="username"
          type="text"
          placeholder="Username"
          value={ username }
          onChange={ onInputChange }
        />
        <FormField
          name="email"
          type="email"
          placeholder="Email or Username"
          value={ email }
          onChange={ onInputChange }
        />
        <FormField
          name="password"
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ onInputChange }
        />
        <FormField
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={ confirmPassword }
          onChange={ onInputChange }
        />
        <button> Sign Up </button>
      </form>
      <Link to="../signin"> Already have an account? Sign In </Link>
    </AuthLayout>
  );
};
