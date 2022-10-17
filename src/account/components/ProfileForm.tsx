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
    await startUpdatingProfile( { uid: user.uid, lastName, name, birthday, username, email } );
    onChangeMode();
  }

  return (
    <form onSubmit={ onSubmit }>
      <FormField
        label="Last Name"
        name="lastName"
        type="text"
        value={ lastName }
        onChange={ onInputChange }
      />
      <FormField
        label="Name"
        name="name"
        type="text"
        value={ name }
        onChange={ onInputChange }
      />
      <FormField
        label="Birthday"
        name="birthday"
        type="date"
        value={ convertDate( birthday ) }
        onChange={ onInputChange }
      />
      <FormField
        label="Username"
        name="username"
        type="text"
        value={ username }
        onChange={ onInputChange }
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={ email }
        onChange={ onInputChange }
      />
      <button> Edit Profile </button>
    </form>
  );
};
