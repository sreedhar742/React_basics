import React, { Component } from 'react'

export default class Conditionn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        personlogin:true
      }
    }
  
  render() {
    // if(this.state.personlogin){
    //     return <div>loggedin</div>
    // }else{
    //     return <div>loggedout</div>
    // }
    // let message
    // if (this.state.personlogin){
    //     message=React.createElement('div',{},"loggedin")
    // }else{
    //     message=React.createElement("div",{},"logged out")
    // }
    // return(message)
    return(this.state.personlogin?<div>welcome sreedhar</div>:<dic>welcome guest</dic>)

  }
}
