import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

  const { startDeletingEvent, activeEvent } = useCalendarStore();

  const onClick = () => {
    if ( activeEvent === null ) return;
    if ( activeEvent._id === null ) return;

    startDeletingEvent( activeEvent );
  }

  return (
    <button
      onClick={ onClick }
      className="fixed bottom-4 right-4 rounded-full bg-red-500 text-white flex items-center justify-center p-2 text-2xl z-10 sm:bottom-6 sm:right-6 sm:text-3xl sm:w-14 sm:h-14"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6m-4 0v14"></path>
      </svg>
    </button>
  );
};

