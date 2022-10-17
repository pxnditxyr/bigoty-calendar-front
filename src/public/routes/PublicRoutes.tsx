import { Route, Routes } from 'react-router-dom';

import { AboutPage, FeaturesPage, HomePage, MePage } from '../pages';
import { NotFoundPage } from '../../ui';

export const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="features" element={ <FeaturesPage /> } />
        <Route path="me" element={ <MePage /> } />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
};
