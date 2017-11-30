import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDashboard from './components/user/UserDashboard';
import TaskDashboard from './components/task/TaskDashboard';

import store from './model';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <UserDashboard store={store} />
          <TaskDashboard store={store} />
        </div>
      </div>
    );
  }
}

export default App;
