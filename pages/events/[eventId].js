// event by id
import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

function EventDetailPage() {
  const r = useRouter();
  console.log(`r`, r);
  const evtId = r.query.eventId;
  console.log(`evtId`, evtId);
  const evt = getEventById(evtId);

  if (!evt) {
    return <p>No Event Found</p>;
  }

  return (
    <React.Fragment>
      <EventSummary title={evt.title} />
      <EventLogistics
        date={evt.date}
        address={evt.location}
        image={evt.image}
        imageAlt={evt.title}
      />
      <EventContent>
        <p>{evt.description}</p>
      </EventContent>
    </React.Fragment>
  );
}

export default EventDetailPage;
