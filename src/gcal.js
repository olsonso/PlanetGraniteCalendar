import request from 'superagent';
const CALENDAR_ID = 'frqvt2hfp7q31c98pl2p2bdulee1g8h3@import.calendar.google.com';
const API_KEY = 'AIzaSyAy1fynzq_Gt--wgNcJ65DMbn9UYcIK1aI'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
import moment from 'moment';

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
       JSON.parse(resp.text).items.map(event => {
         let sTime = event.start.date || event.start.dateTime;
         let eTime = event.end.date || event.end.dateTime;

        let csTime = moment(sTime).toDate();
         let ceTime = moment(eTime).toDate();

        return events.push({
         start: csTime,
         end: ceTime,
          title: event.summary,
          description: event.description,
       });
      });
        callback(events)
        console.log(events);
      }
    })
}


