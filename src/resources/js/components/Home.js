import React from "react"
import WorkAdd from "./workAdd";

class Home extends React.Component {
  constructor(){
      super()
      this.state = {
        loginUser: [],
      }
      this.reload=this.reload.bind(this);
  }
// API取得
  componentDidMount(){
      const load= async () =>{
      // ログインユーザー情報
      const userdata = await fetch("/api/loginUser");
      const user = await userdata.json();    
        this.setState({
          loginUser: user,
        });
      }
      load();
  }
  reload(){
    this.componentDidMount();
  }
 
  render() {
    return (
      <div>
        <div>ワーク一覧</div>
        <WorkAdd 
          loginUserId={this.state.loginUser.id}
          reload={this.reload}
        />
        <div>タイマー</div>
        <div>ワーク詳細</div>
      </div>
    );
  }
}

export default Home;
