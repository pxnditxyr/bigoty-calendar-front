import { Link } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

const formData = {
  lastName: '',
  name:     '',
  birthday: '2000-12-12',
  username: '',
  email:    '',
  password: '',
  confirmPassword: '',
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
        className="p-6 flex flex-col justify-center items-center bg-white w-auto rounded-xl shadow-lg gap-4 sm:w-96 sm:h-auto"
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
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="name"
            type="text"
            placeholder="Name"
            value={ name }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="birthday"
            type="date"
            placeholder="Birthday"
            value={ birthday }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="username"
            type="text"
            placeholder="Username"
            value={ username }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="email"
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <FormField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={ confirmPassword }
            onChange={ onInputChange }
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full sm:px-4 sm:py-3 sm:text-lg"
          />
          <button
            className="bg-slate-900 text-white font-bold py-1 rounded-md focus:outline-none hover:bg-slate-700 w-full sm:py-3 sm:text-xl"
          > Sign Up </button>
        </form>
        <Link
          className="text-sky-700 hover:underline px-3 py-1 rounded-md focus:outline-none w-full sm:py-3 sm:text-xl"
          to="../signin"
        > Already have an account? Sign In </Link>
      </div>
    </AuthLayout>
  );
};
