import { ChangeEvent, FormEvent } from 'react';

import { FormField } from '../../ui';
import { getFormattedTime } from '../helpers';

interface CalendarFormProps {
  onSubmit: ( event : FormEvent<HTMLFormElement> ) => void;
  onInputChange: ( { target } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;

  start: string;
  end: string;
  title: string;
  note: string;
  bgColor: string;
}

export const CalendarForm = ( { start, end, title, note, onSubmit, onInputChange, bgColor } : CalendarFormProps ) => {

  return (
    <form 
      onSubmit={ onSubmit }
      className="flex flex-col gap-2 p-2"
    >
      <FormField
        label="Start Date"
        name="start"
        type="datetime-local"
        value={ getFormattedTime( start ) }
        onChange={ onInputChange }
        className="w-full rounded-md bg-white p-2 focus:outline-none rounded-lg border-2 focus:border-blue-500"
        containerClassname="flex flex-col gap-2"
        
      />

      <FormField
        label="End Date"
        name="end"
        type="datetime-local"
        value={ getFormattedTime( end ) }
        onChange={ onInputChange }
        className="w-full rounded-md bg-white p-2 focus:outline-none rounded-lg border-2 focus:border-blue-500"
        containerClassname="flex flex-col gap-2"
      />

      <FormField
        label="Title"
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={ title }
        onChange={ onInputChange }
        className="w-full rounded-md bg-white p-2 focus:outline-none rounded-lg border-2 focus:border-blue-500"
        containerClassname="flex flex-col gap-2"
      />
      <FormField
        label="Notes"
        id="note"
        name="note"
        type="text"
        placeholder="Notes"
        value={ note }
        onChange={ onInputChange }
        className="w-full rounded-md bg-white p-2 focus:outline-none rounded-lg border-2 focus:border-blue-500"
        containerClassname="flex flex-col gap-2"
      />
      <FormField
        label="Color"
        id="bgColor"
        name="bgColor"
        type="color"
        value={ bgColor }
        onChange={ onInputChange }
        className="w-full rounded-md bg-white focus:outline-none rounded-lg border-2 focus:border-blue-500"
        containerClassname="flex flex-col gap-2"
      />
      <button> Save </button>
    </form>
  );
};
