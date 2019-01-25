import React, { Component } from 'react';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        <SignupForm />
      </div>
    );
  }
}

export default App;
