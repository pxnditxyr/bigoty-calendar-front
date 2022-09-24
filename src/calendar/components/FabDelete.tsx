import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

  const { startDeletingEvent, activeEvent } = useCalendarStore();

  const onClick = () => {
    if ( activeEvent === null ) return;

    startDeletingEvent( activeEvent );
  }

  return (
    <button
      onClick={ onClick }
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: 'white',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1H3V5zm1 2v9a2 2 0 002 2h8a2 2 0 002-2V7H4zm2 0h8v9H6V7zm2 2a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V9z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

