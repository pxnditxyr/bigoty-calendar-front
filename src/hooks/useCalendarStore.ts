import Swal from 'sweetalert2';
import { bigotyCalendarApi } from '../api';
import { IBigCalendarEvent } from '../calendar/interfaces';
import { formatErrors } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdatedEvent, onLoadingEvents } from '../store/calendar';

export const useCalendarStore = () => {
  const { events, activeEvent } = useAppSelector( state => state.calendar );
  const { user } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  const onActiveEvent = ( event : IBigCalendarEvent ) => {
    dispatch( onSetActiveEvent( event ) );
  };

  const startSavingEvent = async ( event : IBigCalendarEvent ) => {

    try {
      if ( event._id ) {
        await bigotyCalendarApi.put( `/events/update/${ event._id }`, event );
        dispatch( onUpdatedEvent({ ...event }) );
        return;
      }
      const { data } = await bigotyCalendarApi.post( '/events/new-event', event )
      dispatch( onAddNewEvent({
        ...data.event,
        start: new Date( data.event.start ),
        end: new Date( data.event.end ),
        user: {
          _id: user.uid,
          name: user.name,
        }
      }) )
    } catch ( error : any ) {
      console.log( error );
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
    }
    
  };

  const startDeletingEvent = async ( event : IBigCalendarEvent ) => {
    try {
      await bigotyCalendarApi.delete( `/events/delete/${ event._id }` );
      dispatch( onDeleteEvent( event ) );
    } catch ( error : any ) {
      console.log( error );
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
    }
  };

  const startLoadingEvents = async () => {
    try {

      const { data } = await bigotyCalendarApi.get( '/events' );
      const events = data.events.map( ( event : IBigCalendarEvent ) => {
        return {
          ...event,
          start: new Date( event.start ),
          end: new Date( event.end ),
        }
      });
      dispatch( onLoadingEvents( events ) );
    } catch ( error : any ) {
      console.log( 'Error loading events', error );
    }
  }

  return {
    events,
    activeEvent,
    onActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
    hasEventSelected: !!activeEvent,
  }
};
