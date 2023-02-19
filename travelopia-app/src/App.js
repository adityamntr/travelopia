import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientAdd from './ClientAdd';

class App extends Component {
  render() {
    return (
          <Router>
          <div>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/clients/view' exact={true} component={ClientList}/>
            <Route path='/clients/add' exact={true} component={ClientAdd}/>
          </div>
        </Router>
    )
  }
}

export default App;