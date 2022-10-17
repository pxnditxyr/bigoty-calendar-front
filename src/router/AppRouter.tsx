import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PublicRoutes } from '../public';
import { AuthRoutes } from '../auth';
import { CalendarRoutes } from '../calendar';
import { AccountRoutes } from '../account';

import { NotFoundPage } from '../ui';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect( () => {
    checkAuthToken();
  }, [] )


  if ( status === 'checking' ) {
    return <div> Loading... </div>;
  }


  return (
    <BrowserRouter>
      <Routes>
        {
          ( status === 'not-authenticated' )
            ? (
              <>
                <Route path="/*" element={ <PublicRoutes /> } />
                <Route path="auth/*" element={ <AuthRoutes /> } />
                <Route path="calendar/*" element={ <Navigate to="../auth" /> } />
                <Route path="account/*" element={ <Navigate to="../auth" /> } />
              </>
            )
            : (
              <>
                <Route path="calendar/*" element={ <CalendarRoutes /> } />
                <Route path="account/*" element={ <AccountRoutes /> } />
                <Route path="*" element={ <Navigate to="calendar" /> } />
              </>
            )
        }
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
