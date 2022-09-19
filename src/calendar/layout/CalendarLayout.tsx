import { Navbar } from '../components';

interface CalendarLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const CalendarLayout = ( { children } : CalendarLayoutProps ) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  );
};
