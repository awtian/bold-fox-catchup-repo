import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'

// CONTAINERS
import Navbar from './containers/Navbar'
import Todo from './containers/Todo'
import Redux from './containers/Redux.jsx'
import DemoCon from './containers/DemoCon.jsx'
import MyContext from './MyContext'


// Store
import store from './store'

class App extends Component {
  render() {
    return (
      <MyContext>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={() => <h1>Ini Home</h1>} />
                <Route exact path='/todo' component={Todo} />
                <Route exact path='/redux' component={Redux} />
                <Route exact path='/context' component={DemoCon} />
                <Route exact path='/parampa/:name' component={(props) => <h3>{props.match.params.name}</h3> } />
                <Route component={() => <h1>Cari apaan cuuy</h1>} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MyContext>
    );
  }
}

export default App;
