import React from "react";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(event => (
        <EventItem id={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;