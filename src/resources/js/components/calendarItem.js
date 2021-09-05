import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


  class CalendarItem extends React.Component{
  render() {
  return (
    <div className="my-4">
      Calendar
      <div>
        <div className="d-flex flex-row-center">
          <Calendar
            locale={"ja-JP"}
            value={new Date()}
            calendarType={"US"}
            prev2Label={null}
            next2Label={null}
            onClickDay={(value) => {
              var year = value.getFullYear();
              var month = ("0" + (value.getMonth()+1)).slice(-2);
              var day = ("0" + value.getDate()).slice(-2);
              var clickDay=( year + '-' + month + '-' + day );
              // 1日の時間情報を取得
              console.log(clickDay);
              fetch("/api/dayTimes",{
                method: 'POST',
                body:JSON.stringify({
                    id:this.props.workData.id,
                    created_at:clickDay
                  }),
                headers:{"Content-Type": "application/json"}
              })
              .then((res) => res.text())
              .then(text =>alert(text));
            }}
          />
        </div>
      </div>
    </div>
  );
 }
}
export default CalendarItem;