import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

function Navbar(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello Bold Fox! {props.count.count}
      </p>
      <div style={{marginRight: '1vw'}}>
        <Link to='/'>
          Home
        </Link>
        <Link to='/todo'>
          Todo
        </Link>
        <Link to='/redux'>
          Redux
        </Link>
        <Link to='/context'>
          Context
        </Link>
      </div>
    </header>
  )
}

const mapStateToProps = ({count}) => ({
  count
})

export default connect(mapStateToProps)(Navbar)
