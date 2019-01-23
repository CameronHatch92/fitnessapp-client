import React from 'react';
import {Field, reduxForm } from 'redux-form';

export class SignupForm extends React.Component{
  render(){
    return(
      <form>
        <label htmlFor='username'>Username</label>
        <Field name='username' component='input' type='text' />
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='email' />
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='text' />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <Field name='confirmPassword' component='input' type='text' />
      </form>
    )  
  }
}

export default reduxForm({
  form: 'signup'
})(SignupForm);