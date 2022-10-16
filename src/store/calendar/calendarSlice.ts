import { createSlice } from '@reduxjs/toolkit';
import { getLocalDatetime } from '../../calendar/helpers';
import { IBigCalendarEvent } from '../../calendar/interfaces';

interface IInitialState {
  activeEvent: IBigCalendarEvent | null;
  events: Array<IBigCalendarEvent>;
  isLoadingEvents: boolean;
}

const tempEvents : Array<IBigCalendarEvent> = [
  {
    _id: '21390',
    title: 'This is another event',
    note: 'This is my new Event',
    start: new Date( Date.parse( getLocalDatetime() ) ),
    end: new Date( Date.parse( getLocalDatetime( 2 ) ) ),
    bgColor: '#0f3d3e',
    user: {
      _id: '123',
      name: 'charly',
    }
  }
]


const initialState : IInitialState = {
  activeEvent: null,
  events: tempEvents,
  isLoadingEvents: true,
}


export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onAddNewEvent: ( state, { payload } ) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    onSetActiveEvent: ( state, { payload } ) => {
      state.activeEvent = payload;
    },
    onUpdatedEvent: ( state, { payload } ) => {
      state.events = state.events.map( event => event._id === payload._id ? payload : event );
      state.activeEvent = null;
    },
    onDeleteEvent: ( state, { payload } ) => {
      state.events = state.events.filter( event => event._id !== payload._id );
      state.activeEvent = null;
    },
    onLoadingEvents: ( state, { payload } ) => {
      state.isLoadingEvents = false;
      payload.forEach( ( event : IBigCalendarEvent ) => {
        const exists = state.events.some( dbEvent => dbEvent._id === event._id );
        if ( !exists )
          state.events.push( event );
      });
    },
    onSignOutCalendar: ( state ) => {
      state.activeEvent = null;
      state.events = [];
      state.isLoadingEvents = true;
    }
  }
});

export const {
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
  onSetActiveEvent,
  onSignOutCalendar,
  onUpdatedEvent,
} = calendarSlice.actions;
