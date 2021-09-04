import React from 'react';


class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00',
      time: 0,
      button: this.startButton()
    };
  }
  start() {
    if(this.props.workData.id == null){
      alert('ワークを選択してください');
    }else{
      this.timer = setInterval(() => this.update(), 1000);
      this.setState({
        button: this.pauseButton()
      });
    }
  }
  stop() {
    clearInterval(this.timer);
    this.setState({
      button: this.startButton()
    });
  }
  reset() {
    const isYes = confirm('経過時間を記録します。\nワークを終了しますか？');
    if(isYes === false){return}
    fetch("/api/recordAdd",{
      method: 'POST',
      body:JSON.stringify({
        user_id:this.props.workData.user_id,
            work_id:this.props.workData.id,
            elapsed_time:this.state.time
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
    clearInterval(this.timer);
    this.setState({
      hours: '00',
      minutes: '00',
      seconds: '00',
      time: 0,
      button: this.startButton()
    });
  }
  update() {
    const time = this.state.time + 1;
    const hours = parseInt(time / 60 / 60, 10);
    const minutes = parseInt(time / 60 % 60, 10);
    const seconds = parseInt(time % 60, 10);
    this.setState({
      hours: this.toText(hours),
      minutes: this.toText(minutes),
      seconds: this.toText(seconds),
      time: time
    });
  }
  toText (time) {
    return ('00' + time).slice(-2);
  }
  startButton() {
    return(
        <div className="btn  btn-danger px-3 py-2 mx-2 rounded shadow-sm" onClick={() => {this.start()}}>
          <i className="fas fa-play"></i>
        </div>
    )
  }
  pauseButton(){
    return(
        <div className="btn  btn-danger px-3 py-2  mx-2 rounded shadow-sm" onClick={() => {this.stop()}}>
          <i className="fas fa-pause"></i>
        </div>
    )
  }
  render() {
    return(
      <div>
        Timer
        <div>
          <div className="bg-dark text-white h1 p-2 text-center shadow-sm">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
        </div>
        <div className="text-center">
          {this.state.button}
          <div className="btn  btn-dark px-3 py-2 mx-2 rounded shadow-sm" onClick={() => {this.reset()}}>
            <i className="fas fa-stop"></i>
          </div>
        </div>    
      </div>
    );
  }
}
export default Timer;