import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";

import { mockImage } from "../../data";
import { LoadingSpinner } from "../../components";
import { getEventById, addUserToEvent } from "../../redux/action-exporter";

import "./event-info.styles.scss";

const EventInfo = ({
  getEventById,
  isEventByIdPending,
  eventById,
  addUserToEvent
}) => {
  const { eventId } = useParams();

  useEffect(() => {
    getEventById(eventId);
  }, [getEventById, eventId]);

  const {
    eventName,
    eventDate,
    description,
    totalPlaces,
    placesAvailable,
    location
  } = eventById;

  return (
    <div className="event-info-container">
      {isEventByIdPending ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <div className="event-info-container__inner">
            <div className="event-info">
              <div className="event-info__title">{eventName}</div>
              <div className="event-info__date event-info__general-information">
                Event date: <span>{eventDate || "No date!"}</span>
              </div>
              <div className="event-info__date event-info__general-information">
                Description: <span>{description}</span>
              </div>
              <div className="event-info__date event-info__general-information">
                Event total places: <span>{totalPlaces}</span>
              </div>
              <div className="event-info__date event-info__general-information">
                Event places available: <span>{placesAvailable}</span>
              </div>
              <div className="event-info__date event-info__general-information">
                Event location: <span>{location}</span>
              </div>
              <div className="event-info__go-to-event">
                <Button onClick={() => addUserToEvent(eventId)}>
                  Go To Event
                </Button>
              </div>
            </div>

            <div className="event-image">
              <div className="event-image__actions">
                <h3>Event actions --> </h3>
                <Link to={`/my-business/events/${eventId}`}>
                  <FiEdit />
                </Link>
              </div>
              <img src={mockImage} alt="" />
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isEventByIdPending: state.eventsReducer.isEventByIdPending,
  eventById: state.eventsReducer.eventById
});

export default connect(mapStateToProps, { getEventById, addUserToEvent })(
  EventInfo
);
