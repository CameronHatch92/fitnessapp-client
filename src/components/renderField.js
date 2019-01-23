import React from 'react';

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) => {
  let errorDiv = touched && error ? error : " ";
  const errorStyle = {
    color: 'red',
    height: '1em'
  };
  return(
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      <div className='errorDiv' style={errorStyle}>
        {errorDiv}
      </div>
    </div>
  </div>
)};

export default renderField;