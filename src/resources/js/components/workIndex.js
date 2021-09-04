import React from 'react';
import WorkShow from './workShow';

class WorkIndex extends React.Component{
  constructor(){
      super()
      this.state={
        workData: '',
      }
  }
  // セレクトボックス変更時
  onChangeData=(e)=>{
    let workData;
    const workId = e.target.value;
    this.props.userWorks.forEach(element =>{
      if(element.id == workId){
        workData =element;
      }
    });
    console.log(workData);
  }

  render() {
    const searchForm = (  
      <div>
        <div className="form-group">
          MyWork
          <select className="custom-select shadow-sm"onChange={this.onChangeData}>
            <option>選択してください</option>
            {this.props.userWorks.map((obj,index) =>
            <option key={index} value={obj.id}>{obj.name}</option>
            )}
          </select>
        </div>
        <WorkShow 
          workData={this.workData}
        />
      </div>
    )
    return (<div>{searchForm}</div>);
  }
}
export default WorkIndex;