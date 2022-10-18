import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { onActiveEvent } = useCalendarStore();

  const onClick = () => {
    onActiveEvent({
      title: 'New Event',
      note: '',
      start: new Date(),
      end: addHours( new Date(), 2 ),
      bgColor: '#0f3d3e',
      user: {
        _id: '',
        name: '',
      }
    });
    openDateModal();
  };

  return (
    <button
      onClick={ onClick }
      className="fixed bottom-4 left-4 rounded-full bg-green-600 text-white flex items-center justify-center p-2 text-2xl z-10 sm:bottom-6 sm:right-6 sm:text-3xl sm:w-14 sm:h-14"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
    </button>
  );
};
