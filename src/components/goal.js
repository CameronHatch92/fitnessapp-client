import React from 'react';
import './goal.css';

export default class Goal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <div className='graph'>
          <div className='progress-bar' style={{width: `${this.props.complete*100/this.props.goal}%`}}>
          Progress
          </div>
          Here is your progress
        </div>
      </div>
    )
  }
}