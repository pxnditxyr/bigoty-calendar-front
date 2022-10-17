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
      {
        isEditing
          ? <ProfileForm onChangeMode={ onChangeMode } />
          : <ProfileDisplay />
      }
      <button onClick={ onChangeMode }>
        { isEditing ? 'Cancel' : 'Edit' }
      </button>
    </AccountLayout>
  );
};
