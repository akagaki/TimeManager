import React from 'react';
import CalendarItem from './calendarItem';

class WorkShow extends React.Component{
  render() {
    const workShow = (  
      <div>
        <div className="border-bottom text-center h4 pb-2 pt-3" >
          {this.props.workData.name}
        </div>
        <div className="text-center p-2">
          {this.props.workData.information}
        </div>
          <div className="h4 m-2">
            合計：{this.props.totalTime}
          </div>
          <div className="h4 m-2">
            月間：{this.props.monthlyTime}
          </div>
            <CalendarItem 
            
            />
      </div>
    )
    return (<div>{workShow}</div>);
  }
}
export default WorkShow;