import { useCalendarStore } from '../../hooks';
import { FabAddNew, FabDelete, Navbar } from '../components';

interface CalendarLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const CalendarLayout = ( { children } : CalendarLayoutProps ) => {
  const { hasEventSelected } = useCalendarStore();
  return (
    <div>
      <Navbar />
      { children }
      <FabAddNew />
      { hasEventSelected && <FabDelete /> }
    </div>
  );
};
