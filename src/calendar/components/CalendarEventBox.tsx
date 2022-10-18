import { EventProps } from 'react-big-calendar';
import { IBigCalendarEvent } from '../interfaces';

interface ICalendarEventBoxProps {
  event: IBigCalendarEvent;
  localizer: EventProps[ 'localizer' ];
  slotStart: Date;
  slotEnd: Date;
}




export const CalendarEventBox = ( { event, localizer, slotStart, slotEnd } : ICalendarEventBoxProps ) => {

  const { title, note, user } = event;

  return (
    <article className="flex flex-col p-2">
      <h1 className="text-sm font-light truncate"> { title } </h1>
      <p className="text-sm font-light truncate"> { user?.name } </p>
      <p className="text-sm font-light truncate"> { note } </p>
    </article>

  );
};
