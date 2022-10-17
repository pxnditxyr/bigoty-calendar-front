import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';
import { useAuthStore, useForm } from '../../hooks';
import { FormEvent, useEffect } from 'react';
import Swal from 'sweetalert2';

const formState = {
  user: '',
  password: '',
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
      if ( typeof errorMessage === 'string' )
        Swal.fire( 'Error in sign in', errorMessage, 'error' );
      else
        Swal.fire( 'Error in sign in', errorMessage.join( ',\n' ), 'error' );
    }
  }, [ errorMessage ] );

  return (
    <AuthLayout title="Sign In">
      <div
        className="p-6 flex flex-col justify-center items-center bg-white w-auto rounded-xl shadow-lg gap-4"
        >
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={ onSubmit }>
          <FormField 
            name="user"
            type="text"
            value={ user }
            onChange={ onInputChange }
            placeholder="Email or Username"
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <FormField
            name="password"
            type="password"
            value={ password }
            onChange={ onInputChange }
            placeholder="Password"
            className="border-2 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-md px-2 py-1 w-full"
          />
          <button
            className="bg-slate-900 text-white font-bold py-1 rounded-md focus:outline-none hover:bg-slate-700 w-full"
          > Sign In </button>
        </form>
        <button
          className="bg-red-500 text-white py-1 rounded-md focus:outline-none hover:bg-red-400 w-full"
        > Sign In with Google </button>
        <Link
          className="text-sky-700 hover:underline px-3 py-1 rounded-md focus:outline-none w-full"
          to="../signup"> Already have an account? Sign Up </Link>
      </div>
    </AuthLayout>
  );
};
