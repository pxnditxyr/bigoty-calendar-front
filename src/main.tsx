import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BigotyCalendar } from './BigotyCalendar';


createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <StrictMode>
    <BigotyCalendar />
  </StrictMode>
);
