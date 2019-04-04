import React, { Component } from 'react'
import Button from '../components/Button'
import {Route} from 'react-router-dom';

export default class Todo extends Component {
  state = {
    todos: ['Bangun', 'Mandi', 'Hacktiv8'],
    newTodo: 'React'
  }
  
  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: '',
      heroes: []
    })
  }

  clearTodo = () => {
    this.setState({todos: []})
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount () {
    fetch('https://api.opendota.com/api/heroStats')
      .then(res => res.json())
      .then(data => this.setState({heroes: data}))
  }

  render() {
    const {todos, newTodo} = this.state
    return (
      <div>
        <h1>Halo ini todo</h1>
        <div style={{display: 'flex', 'justifyContent': 'center'}}>
          <ul style={{width: '30vw'}}>
            {
              todos.map(todo => <li key={todo}>{todo}</li>)
            }
          </ul>
        </div>
        <input type='text' value={newTodo} name="newTodo" onChange={this.handleChange}/> <br/>
        <Button title="Halo" color="skyblue" click={this.addTodo} />
        <Button title="Delete Todos" color="red" click={this.clearTodo} />
        <Route exact path="/todo/rahasia" component={() => <h2>You found the secret, dont tell anyone</h2>} />
      </div>
    )
  }
}
