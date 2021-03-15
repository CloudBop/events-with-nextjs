// all events
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function fineEventsHandler(year, month) {
    const uri = `/events/${year}/${month}/abc`;

    // go here...
    router.push(uri);
  }

  return (
    <>
      <EventSearch onSearch={fineEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
