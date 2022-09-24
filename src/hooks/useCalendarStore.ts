import { IBigCalendarEvent } from '../calendar/interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdatedEvent } from '../store/calendar';

export const useCalendarStore = () => {
  const { events, activeEvent } = useAppSelector( state => state.calendar );
  const dispatch = useAppDispatch();

  const onActiveEvent = ( event : IBigCalendarEvent ) => {
    dispatch( onSetActiveEvent( event ) );
  };

  const startSavingEvent = async ( event : IBigCalendarEvent ) => {
    // TODO: Save event in DB
    
    // is ok
    if ( event._id ) {
      dispatch( onUpdatedEvent({ ...event }) );
    } else {
      dispatch( onAddNewEvent({
        ...event,
        _id: new Date().getTime().toString(),
      }) )
    }
  };

  const startDeletingEvent = async ( event : IBigCalendarEvent ) => {
    dispatch( onDeleteEvent( event ) );
  };

  return {
    events,
    activeEvent,
    onActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    hasEventSelected: !!activeEvent,
  }

};
