import { useState } from 'react';
import { ProfileDisplay, ProfileForm  } from '../components';
import { AccountLayout } from '../layout';

export const ProfilePage = () => {
  
  const [ isEditing, setIsEditing ] = useState<boolean>( false );

  const onChangeMode = () => {
    setIsEditing( !isEditing );
  }

  return (
    <AccountLayout title={ 'Profile' }>
      <div
        className="w-full flex p-5 sm:items-center sm:justify-center"
      >
        {
          isEditing
            ? <ProfileForm onChangeMode={ onChangeMode } />
            : <ProfileDisplay />
        }
      </div>
      <div className="w-full px-4 sm:px-0 sm:flex sm:justify-center">
        <button 
          className="w-full p-3 text-white bg-orange-400 font-semibold rounded-md sm:w-1/2 md:w-1/3 sm:mx-auto"
          onClick={ onChangeMode }>
          { isEditing ? 'Cancel' : 'Edit' }
        </button>
      </div>
    </AccountLayout>
  );
};
