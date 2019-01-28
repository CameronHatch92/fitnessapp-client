import React from 'react';
import './goal.css';

export default class Goal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      complete: this.props.complete
    }
  }

  setComplete(e){
    this.setState({
      complete: e.currentTarget.value
    })
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
        <input type='number' value={this.state.complete} onChange={e => this.setComplete(e)} min={0} max={this.props.goal}></input><span>{` ${this.props.unit}`}</span>
      </div>
    )
  }
}