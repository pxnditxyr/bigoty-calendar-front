import { useCalendarStore } from '../../hooks';
import { FabAddNew, FabDelete, Navbar } from '../components';

interface CalendarLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const CalendarLayout = ( { children } : CalendarLayoutProps ) => {
  const { hasEventSelected, activeEvent } = useCalendarStore();

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <Navbar />
      <div className="w-full p-4">
        <h1
          className="text-2xl font-semibold text-center text-slate-900"
        > Calendar Page </h1>
      </div>
      <div
        className="w-full flex flex-col overflow-x-auto p-4 h-full"
      >
        { children }
      </div>
      <FabAddNew />
      { hasEventSelected && activeEvent?._id && <FabDelete /> }
    </div>
  );
};
