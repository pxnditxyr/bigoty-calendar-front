import { Link } from 'react-router-dom';
import { FormEvent } from 'react';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useForm } from '../../hooks';

const formData = {
  lastName: '',
  name:     '',
  birthday: '',
  username: '',
  email:    '',
  password: '',
  confirmPassword: ''
}

export const SignUpPage = () => {

  const {
    lastName, name, birthday, username, email,
    password, confirmPassword, onInputChange,
  } = useForm( formData );


  const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
  }

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
