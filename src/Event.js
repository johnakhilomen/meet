import React, { Component } from 'react';

class Event extends Component {
  state = {
    showOrHideDetails: null,
  }

  changeHideShow(showOrHideDetails){
    if(showOrHideDetails){
      this.setState({
        showOrHideDetails: false
      })
    }
    if(!showOrHideDetails){
      this.setState({
        showOrHideDetails: true
      })
    }
  }

  render() {
    let { showOrHideDetails } = this.state;
    const { event } = this.props;
    return (
      <div className="event event-container">
        <h1 className="name">{ event.summary }</h1>
        <p className="event-start-dateTime">{ event.start.dateTime }</p>
        <p className="event-location">{ event.location }</p>
        {showOrHideDetails
          ? <div className="event__Details additional-info">
            <h2>About Event</h2>
            <a href={ event.htmlLink } className="event-link">See details on Google calendar</a>
            <p className="event-description">{ event.description }</p>
          </div>
          : null
        }
        {showOrHideDetails
          ?<button className="details-btn btn-text"  onClick={() => this.changeHideShow(showOrHideDetails)}>Hide Details</button>
          :<button className="details-btn btn-text"  onClick={() => this.changeHideShow(showOrHideDetails)}>Show Details</button>
        }
      </div> 
      
    )
  }
}

export default Event;