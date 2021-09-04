import React from 'react';

class WorkShow extends React.Component{



  render() {
    const workShow = (  
      <div>
        <div className="border-bottom" >
        Name：{this.props.workData}
        </div>
        Total　：
        Monthly：

        カレンダー
      </div>
    )
    return (<div>{workShow}</div>);
  }
}
export default WorkShow;