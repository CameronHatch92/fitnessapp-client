import React from 'react';

export default class AddGoalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      goal: '',
      unit: ''
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
    })
  }

  render(){
    const categoryDictionary = {
      'Fitness': ['Run', 'Pushups', 'Situps'],
      'Health': ['Weight Loss']
    };
    const goalDictionary = {
      'Run': ['km', 'miles'],
      'Pushups': ['reps'],
      'Situpes': ['reps'],
      'WeightLoss': ['kg', 'lb']
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
    return (
      <form>
        <select onChange={(e) => this.setCategory(e)}>
          <option value=''>Choose a goal category:</option>
          {categoryChoices}
        </select>
        {goalPortion}
      </form>
    )
  }
}
