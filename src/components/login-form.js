import React from 'react';
import {Field, reduxForm } from 'redux-form';

export class LoginForm extends React.Component{
  render(){
    return(
      <form>
        <label htmlFor='username'>Username</label>
        <Field name='username' component='input' type='text' />
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='text' />
      </form>
    )  
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
