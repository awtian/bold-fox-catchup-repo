import React, { Component } from 'react'
import { Consumer } from '../MyContext'

export default class Context extends Component {
  render() {
    return (
      <div>
        <h1>hai context</h1>
        <Batch>
          {'Halo mahdi'}
        </Batch>
      </div>
    )
  }
}

class Student extends Component {
  render() {
    return (
        <Consumer>
         {(context) => (
           <>
             <h1>Name: {context.state.name}</h1>
             <h1>Status: {context.state.status}</h1>
             <h1>Age: {context.state.age}</h1>
             <button onClick={context.tambahTua}>💩🌮💩🛌</button>
           </>
         )} 
        </Consumer>
    )
  }
}

class Batch extends Component {
  render() {
    return (
      <div>
        <h1>
        {this.props.children}
        </h1>
        <Student />
      </div>
    )
  }
}
