import { FormEvent } from 'react';
import { IFormState, useAuthStore, useForm } from '../../hooks';
import { FormField } from '../../ui';


interface ProfileFormProps {
  onChangeMode: () => void;
};

export const ProfileForm = ( { onChangeMode } : ProfileFormProps ) => {

  const { user, startUpdatingProfile } = useAuthStore();
  const {
    lastName,
    name,
    birthday,
    username,
    email,
    onInputChange
  } = useForm( user as unknown as IFormState );

  const convertDate = ( date : string ) => {
    return date.split( 'T' )[ 0 ];
  }
  const onSubmit = async ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const res = await startUpdatingProfile( { uid: user.uid, lastName, name, birthday, username, email } );
    if ( res )
      onChangeMode();
  }

  return (
    <form 
      className="flex flex-col p-4 gap-4 sm:px-8 sm:py-4 rounded-lg shadow-lg sm:gap-6 w-full sm:w-1/2"
      onSubmit={ onSubmit }>
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Last Name"
        name="lastName"
        type="text"
        value={ lastName }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Name"
        name="name"
        type="text"
        value={ name }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Birthday"
        name="birthday"
        type="date"
        value={ convertDate( birthday ) }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Username"
        name="username"
        type="text"
        value={ username }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Email"
        name="email"
        type="email"
        value={ email }
        onChange={ onInputChange }
      />
      <button
        className="w-full p-3 text-white font-semibold rounded-md bg-green-400 hover:bg-green-500 hover:shadow-lg text-xl"
      > Save </button>
    </form>
  );
};
