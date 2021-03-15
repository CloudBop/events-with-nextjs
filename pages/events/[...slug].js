// TODO Filtered events
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className={"center"}>Loading...</p>;
  }

  const numYear = parseInt(filteredDate[0]);
  const numMonth = parseInt(filteredDate[1]);

  // defense
  if (isNaN(numMonth) || isNaN(numYear) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid data, please try again</p>;
  }

  const events = getFilteredEvents({
    year: numYear,
    moneth: numMonth
  });

  if (!events.length || events.length === 0) {
    return <p>No Events Found</p>;
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <EventList items={events} />
    </div>
  );
}

export default FilteredEvents;
