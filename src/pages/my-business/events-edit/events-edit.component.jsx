import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import { DefaultInput, InputDatePicker } from "../../../components";
import {
  getEventById,
  putEvent,
  postEvent,
  clearRequestStatus
} from "../../../redux/action-exporter";

import "./events.edit.styles.scss";

const EventEdit = ({
  getEventById,
  eventById,
  postEvent,
  putEvent,
  eventRequestStatus,
  clearRequestStatus
}) => {
  const { eventId } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [fullTime, setFullTime] = useState({ eDate: "", eTime: "" });
  const [description, setDescription] = useState("");
  const [placesTotal, setPlacesTotal] = useState("");
  const [availablePlaces, setAvailablePlaces] = useState("");
  const [location, setLocation] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { eDate, eTime } = fullTime;

  useEffect(() => {
    if (eventId !== "create") {
      getEventById(eventId);
    }
  }, [getEventById, eventId]);

  useEffect(() => {
    if (eventId !== "create") {
      const {
        eventName,
        eventDate,
        description,
        totalPlaces,
        placesAvailable,
        location
      } = eventById;
      let dateSplit = eventDate && eventDate.split(" ");

      setName(eventName);
      setFullTime(fullTime => ({
        ...fullTime,
        eDate: dateSplit[0],
        eTime: dateSplit[1]
      }));
      setDescription(description);
      setPlacesTotal(totalPlaces);
      setAvailablePlaces(placesAvailable);
      setLocation(location);
    }
  }, [eventId, eventById]);

  useEffect(
    () =>
      setButtonDisabled(
        name === "" ||
          eDate === "" ||
          eTime === "" ||
          description === "" ||
          placesTotal === "" ||
          availablePlaces === "" ||
          location === ""
      ),
    [name, eDate, eTime, description, placesTotal, availablePlaces, location]
  );

  useEffect(() => {
    if (eventRequestStatus === 200 || eventRequestStatus === 201) {
      history.push("/events");
    }
  }, [history, eventRequestStatus]);

  useEffect(() => () => clearRequestStatus(), [clearRequestStatus]);

  const editEventHandler = () => {
    if (eventId === "create") {
      postEvent(
        name,
        `${eDate} ${eTime}`,
        description,
        placesTotal,
        availablePlaces,
        location
      );
    } else {
      putEvent(
        eventId,
        name,
        `${eDate} ${eTime}`,
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
            placeholder="Event name..."
            onChangeHandler={e => setName(e.target.value)}
            inputValue={name}
          />
          <InputDatePicker
            datePickHandler={e =>
              setFullTime({ ...fullTime, eDate: e.target.value })
            }
            timePickHandler={e =>
              setFullTime({ ...fullTime, eTime: e.target.value })
            }
            dateValue={eDate}
            timeValue={eTime}
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
            <Button
              disabled={buttonDisabled}
              onClick={editEventHandler}
              variant="success"
            >
              Save
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  eventById: state.eventsReducer.eventById,
  eventRequestStatus: state.eventsReducer.eventRequestStatus
});

export default connect(mapStateToProps, {
  getEventById,
  postEvent,
  putEvent,
  clearRequestStatus
})(EventEdit);
