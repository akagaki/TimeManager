import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarItem extends React.Component {
  constructor() {
    super();
    this.state = {
        date: new Date(),
        month_days: {
          20210905: { text: 'test' },
          20210902: { text: '00:23:21' }
        }
    };
    this.getTileContent = this.getTileContent.bind(this);
  };
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }
  //日付の内容を出力
  getTileContent({ date, view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return null;
    }
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {(this.state.month_days[day] && this.state.month_days[day].text) ?
          this.state.month_days[day].text : ' '
        }
      </p>
    );
  }


  render() {
    return (
      <div className="my-4">
        Calendar
        <div className="mt-1 p-2">
          <Calendar 
            locale="ja-JP"
            calendarType="US"
            value={this.state.date}
            tileContent={this.getTileContent}
          />
        </div>
      </div>
    );
  }
}

export default CalendarItem;