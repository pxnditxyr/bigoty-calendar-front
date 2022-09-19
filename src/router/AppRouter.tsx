import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PublicRoutes } from '../public';
import { AuthRoutes } from '../auth';
import { CalendarRoutes } from '../calendar';
import { AccountRoutes } from '../account';

import { NotFoundPage } from '../ui';

export const AppRouter = () => {

  let authStatus = 'authenticated';

  return (
    <BrowserRouter>
      <Routes>
        {
          ( authStatus === 'not-authenticated' )
            ? (
              <>
                <Route path="/*" element={ <PublicRoutes /> } />
                <Route path="auth/*" element={ <AuthRoutes /> } />
                <Route path="calendar/*" element={ <Navigate to="../auth" /> } />
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
