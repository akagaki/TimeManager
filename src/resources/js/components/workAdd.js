import React from "react"


class WorkAdd extends React.Component {
  constructor(){
    super()
    this.state = {
      workAddModalOpen: false,
      nameData:'',
      informationData:'',
      intervalData:'00:00',
    }
  }
  //フォーム入力
  onChangeName=(e)=>{
    this.setState({ 
      nameData: e.target.value,
    });
  }
  onChangeInfo=(e)=>{
    this.setState({ 
      informationData: e.target.value,
    });
  }
  onChangeInterval=(e)=>{
    this.setState({ 
      intervalData: e.target.value,
    });
  }
  //登録ボタン
  handleClickAdd=()=>{
    const isYes = confirm('この内容で登録しますか？');
    if(isYes === false){return}
    const data = {name:this.state.nameData,
                  information:this.state.informationData,
                  interval:this.state.intervalData,
                };
    fetch("/api/workAdd",{
      method: 'POST',
      body:JSON.stringify({
        user_id:this.props.loginUserId,
        name:data.name,
        information:data.information,
        interval:data.interval
      }),
      headers:{"Content-Type": "application/json"},
    }).then(response => {
        return response.text();
      }).then((text) => {
        alert(text);
      }).catch((e) => {
        console.log(e);
        alert('入力が正しくありません。');
      });
     this.setState({ 
        nameData: '',
        informationData: '',
        intervalData: '00:00',
        workAddModalOpen: false,
      });
      this.props.reload()
  }
  // NewWorkボタン
  workCreate(){
    return(
      <div className="d-flex flex-row-reverse">
        <small className="btn btn-light bg-white  btn-sm shadow-sm" onClick={() => {this.handleClickOpen()}}>NewWork　<i className="fas fa-plus"></i></small>
      </div>
    )
  }
  //作成画面を開く
  handleClickOpen() {
    this.setState({
      workAddModalOpen: true
    });
  }
// 作成画面を閉じる
  handleClickClose(){
    this.setState({
      workAddModalOpen: false,
      nameData: '',
      informationData: '',
      intervalData: '00:00',
    });
  }

  render(){
    const addForm = (    
      <div className="m-4">
        <div className="border-bottom text-center pb-2 mb-3">
          新規ワーク作成
        </div>
        <form>
          <div>
              Name
              <input type="text" className="form-control" value={this.state.nameData} placeholder="ワーク名を入力"   onChange={this.onChangeName}/>
          </div>
          <div className="form-group">
              Information
              <textarea className="form-control" value={this.state.informationData} placeholder="ワークの詳細を入力"  onChange={this.onChangeInfo}/>
          </div>
          <div className="form-group">
              Interval (通知までの時間を入力下さい)
              <input type="time" className="form-control" value={this.state.intervalData} onChange={this.onChangeInterval}/>
          </div>
        </form>
          <button className="btn btn-info text-white btn-sm shadow-sm m-1 float-left" onClick={() => {this. handleClickAdd()}}>
            登録
          </button>
          <button className="btn btn-light bg-white btn-sm shadow-sm m-1 " onClick={() => {this.handleClickClose()}}>
            Cancel
          </button>
      </div>
    )
    let workAddModal;
    if(this.state.workAddModalOpen === true){
      workAddModal = (
        <div className='custom-modal'>
          <div className='custom-modal-container'>
            {addForm}
          </div>
        </div>
    )}
    return (<div>
              {this.workCreate()}
              {workAddModal}
            </div>
           );
  }
}
  


export default WorkAdd;