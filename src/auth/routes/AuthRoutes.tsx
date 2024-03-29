import { Navigate, Route, Routes } from 'react-router-dom';

import { SignInPage, SignUpPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="signin" element={ <SignInPage /> } />
        <Route path="signup" element={ <SignUpPage /> } />
        <Route path="*"  element={ <Navigate to="signin" /> } />
      </Routes>
      
    </div>
  );
};
