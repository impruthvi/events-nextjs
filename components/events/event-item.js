import Link from "next/link";
import classes from "./event-item.module.css";

const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <Link href={exploreLink}>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>{formattedDate}</div>
            <div className={classes.address}>{formattedAddress}</div>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default EventItem;
