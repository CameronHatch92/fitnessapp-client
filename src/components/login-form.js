import React from 'react';
import {Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component{
  submit = (values) => {
    values.preventDefault();
    console.log(values.currentTarget.username.value);
    console.log(values.currentTarget.password.value);
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values => this.submit(values))}>
        <Field name='username' component={renderField} type='text' label='Username' validate={[required, nonEmpty]}/>
        <Field name='password' component={renderField} type='text' label='Password' validate={[required, nonEmpty]}/>
        <button type='submit'>Login</button>
      </form>
    )  
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
