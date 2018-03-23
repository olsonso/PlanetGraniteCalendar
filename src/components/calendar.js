import React, {Component} from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { getEvents } from '../gcal';

BigCalendar.momentLocalizer(moment);
require('style!css!react-big-calendar/lib/css/react-big-calendar.css');


class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

  render () {
    return (
      <div><center>
      <h1> Planet Granite Calendar </h1></center>
      <p></p>
      <BigCalendar
        style={{height: '620px'}}
        culture='en-GB'
        timeslots={12}
        defaultView='week'
        views={['month', 'week']}
        events={this.state.events}/>
      </div>
    )
  }
}

export default Calendar;