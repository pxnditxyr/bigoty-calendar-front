export interface IBigCalendarEvent {
  _id?: string;
  title: string;
  note: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: {
    _id: string;
    name: string;
  }
};



