import React from 'react';
import {Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import {required, nonEmpty, isTrimmed, length, matches, email} from '../validators';

const usernameLength = length({min: 3, max: 40});
const passwordLength = length({min: 8, max: 40});
const passwordMatch = matches('password');

export class SignupForm extends React.Component{
  submit = (values) => {
    values.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values => this.submit(values))}>
        <Field name='username' component={renderField} type='text' label='Username' validate={[required, nonEmpty, isTrimmed, usernameLength]}/>
        <Field name='email' component={renderField} type='text' label='Email' validate={[required, nonEmpty, email]}/>
        <Field name='password' component={renderField} type='password' label='Password' validate={[required, nonEmpty, isTrimmed, passwordLength]}/>
        <Field name='confirmPassword' component={renderField} type='password' label='Confirm Password' validate={[required, nonEmpty, passwordMatch]}/>
        <button type='submit'>Signup</button>
      </form>
    )  
  }
}

export default reduxForm({
  form: 'signup'
})(SignupForm);