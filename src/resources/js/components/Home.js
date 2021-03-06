import React from "react"
import WorkAdd from "./workAdd";
import WorkIndex from "./workIndex";

class Home extends React.Component {
  constructor(){
      super()
      this.state = {
        loginUser: [],
        userWorks: [],
      }
      this.reload=this.reload.bind(this);
  }
// API取得
  componentDidMount(){
      const load= async () =>{
      // ログインユーザー情報
      const userdata = await fetch("/api/loginUser");
      const user = await userdata.json();    
      // ユーザーワーク一覧
      const workData = await fetch("/api/userWorks");
      const works = await workData.json();
        this.setState({
          loginUser: user,
          userWorks: works,
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
        <WorkAdd 
          loginUserId={this.state.loginUser.id}
          reload={this.reload}
        />
        <WorkIndex 
          userWorks={this.state.userWorks}
          // reload={this.reload}
        />
      </div>
    );
  }
}

export default Home;
