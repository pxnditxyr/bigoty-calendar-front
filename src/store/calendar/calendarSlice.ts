import { createSlice } from '@reduxjs/toolkit';
import { getLocalDatetime } from '../../calendar/helpers';
import { IBigCalendarEvent } from '../../calendar/interfaces';

interface IInitialState {
  events: Array<IBigCalendarEvent>,
  activeEvent: IBigCalendarEvent | null,
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
  events: tempEvents,
  activeEvent: null,
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
    }
  }

});

export const { onAddNewEvent, onSetActiveEvent, onUpdatedEvent, onDeleteEvent } = calendarSlice.actions;
