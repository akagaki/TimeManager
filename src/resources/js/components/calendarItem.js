import React from 'react';
import Calendar from 'react-calendar';

class CalendarItem extends React.Component {
  render() {
    return (
      <div className="my-4">
        Calendar
        <Calendar locale="ja-JP" value={new Date()} />
      </div>
    );
  }
}

export default CalendarItem;