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
        _id: 'current_user',
        name: 'current user',
      }
    });

    openDateModal();
  };

  return (
    <button
      onClick={ onClick }
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    </button>
  );
};
