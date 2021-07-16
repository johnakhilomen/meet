import React, { Component } from 'react';
import { ErrorAlert } from './alert';

class NumberOfEvents extends Component {
  state = {
    query: 32, // by default if no number is inputted, there will be maximum of 32 events
    infoText:'',
  }

  updateNumberOfEvents = (event) => {
    const value = event.target.value
    this.props.updateEvents(null, value);
    if(value < 1 || value > 32) {
      this.setState({
        query: value,
        infoText: "Please enter number between 1 - 32",
      })
    } else {
      return this.setState({
        query: value,
        infoText: '',
      })
    }
  }

  render() {
    return <div className="numberOfEvents">
      <label>Show </label>
      <input type="number" className="eventNumberInput" value={this.state.query} onChange={this.updateNumberOfEvents}/>
      <label> events on page</label>
      <ErrorAlert className="ErrorAlert" text={this.state.infoText}/>
    </div>
  }
}

export default NumberOfEvents;