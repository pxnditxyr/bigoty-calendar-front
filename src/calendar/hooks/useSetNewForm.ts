import { useEffect } from 'react';
import { IFormState, useCalendarStore } from '../../hooks';

export const useSetNewForm = <T extends IFormState> ( onSetNewForm : ( newForm : T ) => void ) => {
  const { activeEvent } = useCalendarStore();
  useEffect( () => {
    if ( activeEvent !== null ) {
      const { start:startActiveEvent, end:endActiveEvent, title:titleActiveEvent, note:noteActiveEvent, bgColor: bgColorActiveEvent } = activeEvent;
      const activeEventForm = {
        start: startActiveEvent,
        end: endActiveEvent,
        title: titleActiveEvent,
        note: noteActiveEvent,
        bgColor: bgColorActiveEvent,
      }
      onSetNewForm( activeEventForm as unknown as T );
    }
  }, [ activeEvent ] )
};
