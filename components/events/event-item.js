import React from "react";

import classes, { item } from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
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
            <DateIcon />
            <time>{prettyDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
