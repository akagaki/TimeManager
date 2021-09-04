import React from 'react';

class workIndex extends React.Component{
  constructor(){
      super()
      this.state={
        workData: [],
      }
  }
  // セレクトボックス変更時
  onChangeData=(e)=>{
    console.log(e.target.value);

    this.setState({ 
      workData: e.target.value,
    });
  }

  render() {
    const searchForm = (  
      <div>
        <div className="form-group">
          MyWork
          <select className="custom-select shadow-sm"onChange={this.onChangeData}>
            <option>選択してください</option>
            {this.props.workIndex.map((obj,index) =>
            <option key={index} value={obj.id}>{obj.name}</option>
            )}
          </select>
        </div>
      </div>
    )
    return (<div>{searchForm}</div>);
  }
}
export default workIndex;