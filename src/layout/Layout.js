import React from 'react';
import Footer from './footer'
import Header from './header'
import Content from './content';
import './layout.css'
import UserComponent from '../commonComponents/UserComponent'




class layout extends React.Component {
  constructor(props) {
    super(props);
    this.showMeLog = this.showMeLog.bind(this)
    this.state = {
      fistname: 'ME'
    }


    // let fistname = 'ME'
    let person = {
      name: 'react-session',
      date: '12/12/20'
    }
  }



  showMeLog(name) {
    console.log("child called me")
    this.setState({
      fistname: name
    })
  }

  render() {
    return (

      <div id="123" className='layout' >this is my layout
      layout name is :{this.state.fistname}
        <UserComponent parentCall={this.showMeLog} persons={[]} fistname={this.state.fistname} ></UserComponent>
        <Header firstName={this.state.fistname} > <button>Login</button> </Header>
        <Content loggedInUser={'name'} username={this.state.fistname}></Content>

      </div>
    );

  }


}

export default layout;