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
      <div
        className="p-6 flex flex-col justify-center items-center bg-white w-auto rounded-xl shadow-lg gap-4"
      >
        <form onSubmit={ onSubmit }
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={ lastName }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="name"
            type="text"
            placeholder="Name"
            value={ name }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="birthday"
            type="date"
            placeholder="Birthday"
            value={ birthday }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="username"
            type="text"
            placeholder="Username"
            value={ username }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="email"
            type="email"
            placeholder="Email or Username"
            value={ email }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={ confirmPassword }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <button
            className="bg-slate-900 text-white font-bold py-1 rounded-md focus:outline-none hover:bg-slate-700 w-full"
          > Sign Up </button>
        </form>
        <Link
          className="text-sky-700 hover:underline px-3 py-1 rounded-md focus:outline-none w-full"
          to="../signin"
        > Already have an account? Sign In </Link>
      </div>
    </AuthLayout>
  );
};
