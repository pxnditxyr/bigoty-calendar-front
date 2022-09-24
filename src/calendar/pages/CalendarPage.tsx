import { useState } from 'react';
import { Calendar, View } from 'react-big-calendar';
import Swal from 'sweetalert2';

import { CalendarLayout } from '../layout';
import { CalendarEventBox, CalendarForm } from '../components';
import { Modal } from '../../ui';

import { IFormState, useCalendarStore, useForm, useUiStore } from '../../hooks';
import { useSetNewForm } from '../hooks';
import { defaultForm, localizer } from '../helpers';

import { IBigCalendarEvent } from '../interfaces';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export const CalendarPage = () => {

  const { events, activeEvent, onActiveEvent, startSavingEvent } = useCalendarStore();
  const { isDateModalOpen, openDateModal, closeDateModal } = useUiStore();
  const [ lastView ] = useState( localStorage.getItem( 'lastView' ) || 'month' );
  const {
    start, end, title, note, bgColor,
    onInputChange, onSetNewForm,
  } = useForm( defaultForm as unknown as IFormState );

  useSetNewForm( onSetNewForm );

  const eventStyleGetter = ( event : IBigCalendarEvent, start : Date, end : Date, isSelected : boolean ) => {
    const style = {
      backgroundColor: event.bgColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
    };
    if ( isSelected )
      style.opacity = 1;
    return {
      style
    };
  };

  const onDoubleClickEvent = ( event : IBigCalendarEvent ) => {
    openDateModal();
  };

  const onSelectEvent = ( event : IBigCalendarEvent ) => {
    onActiveEvent( event );
  };
  const onViewChange = ( view : string ) => {
    localStorage.setItem( 'lastView', view );
  };

  const onSubmit = async ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    const difference = new Date( end ).getTime() - new Date( start ).getTime();
    if ( difference < 0 || isNaN( difference ) ) {
      Swal.fire( 'Error', 'The end date must be greater than the start date', 'error' );
      return;
    }
    if ( title.length === 0 ) return;
    if ( activeEvent === null ) return;

    await startSavingEvent({
      _id: activeEvent._id,
      title,
      note,
      start: new Date( start ),
      end: new Date( end ),
      bgColor,
      user: activeEvent.user,
    });
    closeDateModal();
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
        onClose={ closeDateModal }
        isOpen={ isDateModalOpen }
        >
        <div>
          <CalendarForm
            onSubmit={ onSubmit }
            onInputChange={ onInputChange }
            title={ title }
            note={ note }
            start={ start }
            end={ end }
            bgColor={ bgColor }
            />
        </div>
      </Modal>
    </CalendarLayout>
  );
};
