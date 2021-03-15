// event by id
import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import ErrorAlert from "../../components/ui/error-alert";
function EventDetailPage() {
  const r = useRouter();
  // format is regex of r.query.eventId === [eventId]
  const evtId = r.query.eventId;
  const evt = getEventById(evtId);

  if (!evt) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
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
