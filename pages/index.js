import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

//  recent evnts
function EventsHomePage({ Component, pageProps }) {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Events Homepage</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default EventsHomePage;
