import { useState } from 'react';
import { Calendar, View } from 'react-big-calendar';
import { addHours } from 'date-fns';

import { CalendarLayout } from '../layout';
import { CalendarEventBox } from '../components';
import { FormField, Modal } from '../../ui';

import { useForm } from '../../hooks';
import { localizer, getLocalDatetime } from '../helpers';

import { IBigCalendarEvent } from '../interfaces';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import Swal from 'sweetalert2';


const events : Array<IBigCalendarEvent> = [{
  title: 'All Day Event very long title',
  notes: 'Some notes about this event',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#ff0',
  user: {
    _id: "1234",
    name: 'Example',
  }
}];

export const CalendarPage = () => {

  const [ lastView ] = useState( localStorage.getItem( 'lastView' ) || 'month' );
  const [ modalIsOpen, setModalIsOpen ] = useState( true );

  const { startDate, endDate, title, note, onInputChange } = useForm({
    startDate: getLocalDatetime(),
    endDate: getLocalDatetime( 2 ),
    title: '',
    note: '',
  });

  const eventStyleGetter = ( event : IBigCalendarEvent, start : Date, end : Date, isSelected : boolean ) => {
    const style = {
        backgroundColor: '#937DC2',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
    };
    return {
      style
    };
  };

  const onDoubleClickEvent = ( event : IBigCalendarEvent ) => {

  };

  const onSelectEvent = ( event : IBigCalendarEvent ) => {

  };
  const onViewChange = ( view : string ) => {
    localStorage.setItem( 'lastView', view );
  };

  const onModalClose = () => {
    setModalIsOpen( false );
  };

  const onSubmit = ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const startDateForSubmit = new Date( startDate );
    const endDateForSubmit = new Date( endDate );
    const difference = endDateForSubmit.getTime() - startDateForSubmit.getTime();
    if ( difference < 0 || isNaN( difference ) ) {
      Swal.fire( 'Error', 'The end date must be greater than the start date', 'error' );
      return;
    }
    
    //TODO: close modal, remove screen errors, submit form
  }

  return (
    <CalendarLayout>
      <h1> Calendar Page </h1>
      <Calendar
        localizer={ localizer }
        events={ events }
        defaultView={ lastView as View }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ onDoubleClickEvent }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
      />
      <Modal 
        onClose={ onModalClose }
        isOpen={ modalIsOpen }
        >
        <div>
          <form
            onSubmit={ onSubmit }
          >
            <FormField
              label="Start Date"
              name="startDate"
              type="datetime-local"
              value={ startDate }
              onChange={ onInputChange }
            />

            <FormField
              label="End Date"
              name="endDate"
              type="datetime-local"
              value={ endDate }
              min={ getLocalDatetime() }
              onChange={ onInputChange }
            />

            <FormField
              label="Title"
              id="title"
              name="title"
              type="text"
              placeholder="Title"
            />
            <FormField
              label="Notes"
              id="notes"
              name="notes"
              type="text"
              placeholder="Notes"
            />
            <button> Save </button>
          </form>
        </div>
      </Modal>
    </CalendarLayout>
  );
};
