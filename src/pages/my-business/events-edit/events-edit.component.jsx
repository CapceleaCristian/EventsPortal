import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import { DefaultInput } from "../../../components";
import {
  getEventById,
  putEvent,
  postEvent
} from "../../../redux/action-exporter";

import "./events.edit.styles.scss";

const EventEdit = ({ getEventById, eventById, postEvent, putEvent }) => {
  const { eventId } = useParams();

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString());
  const [description, setDescription] = useState("");
  const [placesTotal, setPlacesTotal] = useState("");
  const [availablePlaces, setAvailablePlaces] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (eventId !== "create") {
      getEventById(eventId);
      const {
        eventName,
        eventDate,
        description,
        totalPlaces,
        placesAvailable,
        location
      } = eventById;

      setName(eventName);
      setDate(eventDate);
      setDescription(description);
      setPlacesTotal(totalPlaces);
      setAvailablePlaces(placesAvailable);
      setLocation(location);
    }
  }, [eventById.eventName]);

  const editEventHandler = () => {
    if (eventId === "create") {
      postEvent(
        name,
        date,
        description,
        placesTotal,
        availablePlaces,
        location
      );
    } else {
      putEvent(
        eventId,
        name,
        date,
        description,
        placesTotal,
        availablePlaces,
        location
      );
    }
  };

  return (
    <div className="event-edit-container">
      <Container>
        <div className="event-edit-container__content">
          <h3 style={{ textAlign: "center" }}>
            Current event id: <strong>{eventId}</strong>
          </h3>
          <DefaultInput
            label="Event name"
            type="name"
            placeholder="Event dame..."
            onChangeHandler={e => setName(e.target.value)}
            inputValue={name}
          />
          <DefaultInput
            label="Event date"
            type="name"
            placeholder="Event date..."
            onChangeHandler={e => setDate(e.target.value)}
            inputValue={date}
          />
          <DefaultInput
            label="Event description"
            type="name"
            placeholder="Event description..."
            onChangeHandler={e => setDescription(e.target.value)}
            inputValue={description}
          />
          <DefaultInput
            label="Event total places"
            type="name"
            placeholder="Event total places..."
            onChangeHandler={e => setPlacesTotal(e.target.value)}
            inputValue={placesTotal}
          />
          <DefaultInput
            label="Event available places"
            type="name"
            placeholder="Event available places..."
            onChangeHandler={e => setAvailablePlaces(e.target.value)}
            inputValue={availablePlaces}
          />
          <DefaultInput
            label="Event location"
            type="name"
            placeholder="Event location..."
            onChangeHandler={e => setLocation(e.target.value)}
            inputValue={location}
          />
          <div className="event-edit-container__footer">
            <Button onClick={editEventHandler} variant="success">
              Save
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  eventById: state.eventsReducer.eventById
});

export default connect(mapStateToProps, { getEventById, postEvent, putEvent })(
  EventEdit
);
