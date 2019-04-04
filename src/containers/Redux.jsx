import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {increment, decrement, cgreeting} from '../actions/count'
import {fetchHeroes} from '../actions/api'

class Redux extends Component {
  componentDidMount() {
    if (!this.props.isLoaded) this.props.fetchHeroes()
  }
  render() {
    return this.props.loading ? <h1>Tunggu sebentar yach..</h1> : (
      <div>
        <h1>Hello, welcome to the redux page</h1>
        <h2>{this.props.greeting}</h2>
        <h3>{this.props.count}</h3>
        <h4>{JSON.stringify(this.props.heroes)}</h4>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button> <br/>
        <input value={this.props.greeting} onChange={this.props.cgreeting}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  greeting: state.count.greeting,
  count: state.count.count,
  heroes: state.api.heroes,
  loading: state.api.loading,
  error: state.api.error,
  isLoaded: state.api.isLoaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({increment, decrement, cgreeting, fetchHeroes}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Redux)