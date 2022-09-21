import { EventProps } from 'react-big-calendar';
import { IBigCalendarEvent } from '../interfaces';

interface ICalendarEventBoxProps {
  event: IBigCalendarEvent;
  localizer: EventProps[ 'localizer' ];
  slotStart: Date;
  slotEnd: Date;
}




export const CalendarEventBox = ( { event, localizer, slotStart, slotEnd } : ICalendarEventBoxProps ) => {
  const { title, user } = event;

  return (
    <>
      <p> { title } </p>
      <span> { user.name } </span>
    </>
  );
};
