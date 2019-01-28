import React from 'react';
import './goal.css';

export default class Goal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='goal'>
        <h3>{this.props.title}</h3>
        <div className='graph'>
          <div className='progress-bar' style={{width: `${this.props.complete*100/this.props.goal}%`}}>
          {`${this.props.complete*100/this.props.goal}%`}
          </div>
        </div>
        <input type='number' placeholder={this.props.complete} min={0} max={this.props.goal}></input><span>{` ${this.props.unit}`}</span>
      </div>
    )
  }
}