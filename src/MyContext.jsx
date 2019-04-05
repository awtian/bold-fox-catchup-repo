import React, { Component } from 'react'

const Context = React.createContext()
export const {Provider, Consumer} = Context

export default class MyContext extends Component {
  state = {
    name: 'Mahdi',
    status: 'baru putus',
    age: 29
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        tambahTua: () => this.setState({age: this.state.age+1})
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
