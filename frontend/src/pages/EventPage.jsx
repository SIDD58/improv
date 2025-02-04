import '../../public/events.css'
import Nav from '../components/navbar'

const events = [
  {
    id: 1,
    name: 'Improv Comedy Night',
    venue: 'Comedy Central Hall',
    date: '2025-02-14',
    time: '7:00 PM',
    duration: '2 Hrs'
  },
  {
    id: 2,
    name: 'Improv Games Showdown',
    venue: 'Main Stage Theater',
    date: '2025-02-21',
    time: '6:00 PM',
    duration: '2 Hrs'
  },
  {
    id: 3,
    name: 'Improv for All',
    venue: 'Open Air Park',
    date: '2025-03-05',
    time: '5:00 PM',
    duration: '1 Hr'
  }
];

export default function Events(){
  return (
    <>
    <Nav></Nav>
    <section className="events-section">
    <h2>Upcoming Events</h2>
    <div className="events-list">
      {events.map(event => (
        <div className="event-card" key={event.id}>
          <h3 className="event-name">{event.name}</h3>
          <p className="event-venue">Venue: {event.venue}</p>
          <p className="event-date">Date: {event.date}</p>
          <p className="event-time">Time: {event.time}</p>
          <p className="event-duration">Duration: {event.duration}</p>
        </div>
      ))}

    </div>
  </section>
  <div>
        Anyone can Come, Keep an eye on Last minute changes 
</div>
    </>
  );
}
