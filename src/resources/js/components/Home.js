import React from "react"

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
        <div>{this.state.loginUser.name}</div>
        <div>メニューカテゴリー</div>
        <div>メニュー詳細</div>
      </div>
    );
  }
}

export default Home;
