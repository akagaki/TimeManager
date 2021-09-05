import React from 'react';
import WorkShow from './workShow';
import Timer from './Timer';

class WorkIndex extends React.Component{
  constructor(){
      super()
      this.state={
        workData: '',
        totalTime: '',
      }
  }
  // セレクトボックス変更時
  onChangeData=(e)=>{
    const workId = e.target.value;
    // トータル時間情報を取得
    const load=()=>{
      fetch("http://0.0.0.0:8000/api/totalTime",{
        method: 'POST',
        body:JSON.stringify({id:workId}),
        headers:{"Content-Type": "application/json"}
      })
      .then((res) => res.text())
      .then(text =>{this.setState({totalTime:text})});
    }
    load();
    this.props.userWorks.forEach(element =>{
      if(element.id == workId){
        this.setState({
          workData: element,
        });
      }
    });
  }

  render() {
    const searchForm = (  
      <div>
          <Timer
            workData = {this.state.workData}
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
          />
        </div>
      </div>
    )
    return (<div>{searchForm}</div>);
  }
}
export default WorkIndex;