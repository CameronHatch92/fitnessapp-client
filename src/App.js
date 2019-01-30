import React, { Component } from 'react';
import LoginForm from './components/login-form';
// import SignupForm from './components/signup-form';
// import AddGoalForm from './components/addGoal-form';
import Goal from './components/goal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LoginForm/>
        <Goal 
          title="Run 20 miles"
          unit="miles"
          goal={20}
          complete={5}
          type="Total"
        />
      </div>
    );
  }
}

export default App;
