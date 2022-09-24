import { getLocalDatetime } from './';

export const defaultForm = {
  start: new Date( Date.parse( getLocalDatetime() ) ),
  end: new Date( Date.parse( getLocalDatetime( 2 ) ) ),
  title: '',
  note: '',
  bgColor: '#0F3D3E',
};


