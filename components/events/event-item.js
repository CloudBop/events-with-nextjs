import React from "react";
import Link from "next/link";
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
    <li>
      <img src={`/${image}`} alt={`${title}`} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{prettyDate}</time>
        </div>
        <div>
          <address>{formatAddress}</address>
        </div>

        <div>
          <Link href={exploreLink}>
            <a> Go back home </a>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
