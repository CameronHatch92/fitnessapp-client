import React from 'react';
import {Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from '../validators';

export class LoginForm extends React.Component{
  submit = (values) => {
    values.preventDefault();
    console.log(values.currentTarget.username.value);
    console.log(values.currentTarget.password.value);
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <Field name='username' component={renderField} type='text' label='Username'/>
        <Field name='password' component={renderField} type='text' label='Password'/>
        <button type='submit'>Login</button>
      </form>
    )  
  }
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
