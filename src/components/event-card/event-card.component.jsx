import React from "react";

import { Button, Card } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

import { mockImage } from "../../data";

import "./event-card.styles.scss";

const EventCard = ({
  eventId,
  eventName,
  eventDate,
  description,
  totalPlaces,
  placesAvailable,
  location,
  feedbackList
}) => {
  const { url } = useRouteMatch();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={mockImage} />
      <Card.Body>
        <Card.Title>
          {eventName.length > 20
            ? eventName.substring(0, 20) + "..."
            : eventName}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{eventDate}</Card.Text>
        <Card.Text>{totalPlaces}</Card.Text>
        <Card.Text>{location}</Card.Text>
        <Link to={`${url}/${eventId}`}>
          <Button variant="primary">View Event</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
