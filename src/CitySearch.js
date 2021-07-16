import React, { Component } from 'react';
import { InfoAlert } from './alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if(suggestions.length === 0){
      this.setState({
        query: value,
        infoText: "Cannot locate city. Please try again",
      });
    } else {
      return this.setState({ 
        query: value, 
        suggestions,
        infoText:"",
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
  
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div>
        <InfoAlert className="InfoAlert" text={this.state.infoText} />
        <h2 className="enter-city-label">Enter your city:</h2>
        <div className="CitySearch">
          <input 
            type="text" 
            className="city" 
            value={ this.state.query } 
            onChange={ this.handleInputChanged }
            onFocus={() => { this.setState({ showSuggestions: true }) }}
          />
          <ul className="suggestions" style={this.state.showSuggestions ? {}: {display: 'none'}}>
            {this.state.suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default CitySearch;