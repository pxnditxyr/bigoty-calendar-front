import { Navigate, Route, Routes } from 'react-router-dom';

import { CalendarPage } from '../pages';

export const CalendarRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <CalendarPage /> } />
        <Route path="*" element={ <Navigate to="../calendar" /> } />
      </Routes>
    </div>
  );
};
