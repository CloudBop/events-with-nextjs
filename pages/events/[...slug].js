// TODO Filtered events
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
function FilteredEvents() {
  const router = useRouter();

  const filteredDate = router.query.slug;
  if (!filteredDate) {
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
    month: numMonth
  });

  if (!events.length || events.length === 0) {
    return <p>No Events Found</p>;
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  );
}

export default FilteredEvents;
