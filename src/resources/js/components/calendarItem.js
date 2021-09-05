import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarItem extends React.Component {
  constructor() {
    super();
    this.state = {
        date: new Date(),
    }
  };
  render() {
    return (
      <div className="my-4">
        Calendar
        <Calendar locale="ja-JP" value={this.state.date} />
      </div>
    );
  }
}

export default CalendarItem;