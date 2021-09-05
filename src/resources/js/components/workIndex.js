import React from 'react';
import WorkShow from './workShow';
import Timer from './Timer';
import CalendarItem from './calendarItem';


class WorkIndex extends React.Component{
  constructor(){
      super()
      this.state={
        workData: '',
        totalTime: '',
        monthlyTime: '',
      }
      this.reload=this.reload.bind(this);
  }
  // トータル時間情報を取得
  getTotalTime (workId){
    fetch("http://0.0.0.0:8000/api/totalTime",{
      method: 'POST',
      body:JSON.stringify({id:workId}),
      headers:{"Content-Type": "application/json"}
    })
    .then((res) => res.text())
    .then(text =>{this.setState({totalTime:text})});
  };
  // 月間時間情報を取得
  getMonthlyTime (workId){
    fetch("http://0.0.0.0:8000/api/monthlyTime",{
      method: 'POST',
      body:JSON.stringify({id:workId}),
      headers:{"Content-Type": "application/json"}
    })
    .then((res) => res.text())
    .then(text =>{this.setState({monthlyTime:text})});
  };
  
  // セレクトボックス変更時
  onChangeData=(e)=>{
    const workId = e.target.value;
    this.getTotalTime(workId);
    this.getMonthlyTime(workId);
    this.props.userWorks.forEach(element =>{
      if(element.id == workId){
        this.setState({
          workData: element,
        });
      }
    });
  }
  reload(workId){
      this.getTotalTime(workId);
      this.getMonthlyTime(workId);
  }

  render() {
    const searchForm = (  
      <div>
          <Timer
            workData = {this.state.workData}
            reload = {this.reload}
          />
        <div className="form-group my-2">
          MyWork
          <select className="custom-select shadow-sm"onChange={this.onChangeData}>
            <option>選択してください</option>
            {this.props.userWorks.map((obj,index) =>
            <option key={index} value={obj.id}>{obj.name}</option>
            )}
          </select>
        </div>
        <div>
          <WorkShow 
            workData = {this.state.workData}
            totalTime = {this.state.totalTime}
            monthlyTime = {this.state.monthlyTime}
            dayTimes = {this.state.dayTimes}
          />
          <CalendarItem 
              workData = {this.state.workData}
            />
        </div>
      </div>
    )
    return (<div>{searchForm}</div>);
  }
}
export default WorkIndex;