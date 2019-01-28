import React from 'react';

export default class AddGoalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      goal: '',
      unit: '',
      goalNumber: '',
      goalType: ''
    }
  }

  setCategory(e){
    this.setState({
      category: e.currentTarget.value
    });
  }
  setGoal(e){
    this.setState({
      goal: e.currentTarget.value
    });
  }

  setUnit(e){
    this.setState({
      unit: e.currentTarget.value
    });
  }

  setGoalNumber(e){
    this.setState({
      goalNumber: e.currentTarget.value
    });
  }

  setGoalType(e){
    this.setState({
      goalType: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(`${{category: this.state.category,
      goal: this.state.goal,
      unit: this.state.unit,
      goalNumber: this.state.goalNumber,
      goalType: this.state.goalNumber
    }}`)
  }

  render(){
    const categoryDictionary = {
      'Fitness': ['Run', 'Pushups', 'Situps'],
      'Health': ['Weight Loss']
    };
    const goalDictionary = {
      'Run': {
        units: ['km', 'miles'],
        type: ['Work Up To', 'Total']
      },
      'Pushups': {
        units: ['Reps'],
        type: ['Work Up To', 'Total']
      },
      'Situps': {
        units: ['Reps'],
        type: ['Work Up To', 'Total']
      },
      'Weight Loss': {
        units: ['kg', 'lb'],
        type: ['Total']
      }
    };
    const categoryChoices = ['Fitness', 'Health'].map(cat => <option key={cat}>{cat}</option>);
    let goalPortion;
    if(this.state.category ){
      const goalChoices = categoryDictionary[this.state.category].map(goal => <option key={goal}>{goal}</option>)
      goalPortion = <select onChange={(e) => this.setGoal(e)}>
          <option value=''>Choose a goal:</option>
          {goalChoices}
        </select>;
    }
    let readyToSubmit = false;
    if(this.state.unit && this.state.goalType && this.state.goalNumber){
      readyToSubmit = true;
    }
    let specifics;
    if(this.state.goal){
      const unitChoices = goalDictionary[this.state.goal].units.map(unit => <option key={unit}>{unit}</option>);
      const typeChoices = goalDictionary[this.state.goal].type.map(type => <option key={type}>{type}</option>)
      specifics = <div>
        <input type='integer' onChange={(e) => this.setGoalNumber(e)}></input>
        <select onChange={(e) => this.setUnit(e)}>
        <option value=''>Choose units:</option>
        {unitChoices}
        </select>
        <br/>
        <select onChange={(e) => this.setGoalType(e)}>
          <option value=''>Choose Goal Type:</option>
          {typeChoices}
        </select>
        <button type='submit' disabled={!readyToSubmit}>Add Goal</button>
      </div>
    }
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <select onChange={(e) => this.setCategory(e)}>
          <option value=''>Choose a goal category:</option>
          {categoryChoices}
        </select>
        {goalPortion}
        {specifics}
      </form>
    )
  }
}
