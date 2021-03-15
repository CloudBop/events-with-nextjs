import React from "react";
import Link from "next/link";
import classes, { item } from "./event-item.module.css";
import Button from "../ui/button";
function EventItem(props) {
  const { title, image, date, location, id } = props;

  const prettyDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  // replace comma, with linebreak
  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={item}>
      <img src={`/${image}`} alt={`${title}`} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>

          <div className={classes.date}>
            <time>{prettyDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
