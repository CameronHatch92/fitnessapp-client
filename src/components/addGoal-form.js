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
  render(){
    const categoryDictionary = {
      'Fitness': ['Run', 'Pushups', 'Situps'],
      'Health': ['Weight Loss', 'Blood Pressure']
    };
    const categoryChoices = ['Fitness', 'Health'].map(cat => <option>{cat}</option>);
    let goalPortion;
    if(this.state.category ){
      const goalChoices = categoryDictionary[this.state.category].map(goal => <option>{goal}</option>)
      goalPortion = <select>{goalChoices}</select>;
    }
    return (
      <form>
        <select>
          <option value=''>Choose a goal category:</option>
          {categoryChoices}
        </select>
        {goalPortion}
      </form>
    )
  }
}
