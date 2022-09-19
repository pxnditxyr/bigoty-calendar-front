import { Navigate, Route, Routes } from 'react-router-dom';
import { AppearancePage, ProfilePage, SettingsPage } from '../pages';


export const AccountRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path="profile" element={ <ProfilePage /> } />
        <Route path="settings" element={ <SettingsPage /> } />
        <Route path="appearance" element={ <AppearancePage /> } />

        <Route path="*" element={ <Navigate to="profile" /> } />
      </Routes>
      
    </div>
  );
};
