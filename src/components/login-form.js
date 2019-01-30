import React from 'react';
import { Mutation } from 'react-apollo';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import { required, nonEmpty } from '../validators';
import { LOGIN_USER } from '../Mutations';
import {saveAuthToken} from '../local-storage';

export class LoginForm extends React.Component {
  submit = (values) => {
    values.preventDefault();
    console.log(values.currentTarget.username.value);
    console.log(values.currentTarget.password.value);
  }
  render() {
    return (
      <Mutation mutation={LOGIN_USER}>
        {(login, {data}) => (
          <form onSubmit={e=> {
            e.preventDefault();
            login({variables: {username: e.currentTarget.username.value, password: e.currentTarget.password.value}});
            console.log(data);
            if(data){
              saveAuthToken(data.login);
            }
          }}>
            <Field name='username' component={renderField} type='text' label='Username' validate={[required, nonEmpty]} />
            <Field name='password' component={renderField} type='text' label='Password' validate={[required, nonEmpty]} />
            <button type='submit'>Login</button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
