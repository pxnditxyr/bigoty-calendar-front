import { bigotyCalendarApi } from '../api';
import { formatErrors } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';
import { clearErrorMessage, onChecking, onSignIn, onSignOut } from '../store/auth';
import { onSignOutCalendar } from '../store/calendar';

export const useAuthStore = () => {

  const { status, user, errorMessage } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  const startSignIn = async ( { user, password } : { user: string, password: string } ) => {

    dispatch( onChecking() )

    try {
      const { data } = await bigotyCalendarApi.post( '/auth/signin', { user, password } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        uid: data.uid,
        lastName: data.lastName,
        name: data.name,
        username: data.username,
        email: data.email
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.msg || 'Unknown Error' ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  }

  const startSignUp = async ( { lastName, name, birthday, username, email, password } : { lastName: string, name: string, birthday: string, username: string, email: string, password: string } ) => {
    dispatch( onChecking() );
    try {
      const { data } = await bigotyCalendarApi.post( '/auth/signup', { lastName, name, birthday, username, email, password } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        uid: data.uid,
        lastName: data.lastName,
        name: data.name,
        username: data.username,
        email: data.email
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
      
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem( 'token' );
    if ( !token ) {
      dispatch( onSignOut( undefined ) );
      return;
    }
    try {
      const { data } = await bigotyCalendarApi.get( '/auth/renew-token' );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
      dispatch( onSignIn({
        uid: data.uid,
        lastName: data.lastName,
        name: data.name,
        username: data.username,
        email: data.email
      }) );

    } catch ( error : any ) {
      localStorage.removeItem( 'token' );
      localStorage.removeItem( 'token-init-date' );
      dispatch( onSignOut( formatErrors( error.response.data ) ) );
    }
  }

  const startSignOut = () => {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'token-init-date' );
    dispatch( onSignOutCalendar() );
    dispatch( onSignOut( undefined ) );
  }

  return {
    checkAuthToken,
    errorMessage,
    startSignIn,
    startSignOut,
    startSignUp,
    status,
    user,
  }
  
};