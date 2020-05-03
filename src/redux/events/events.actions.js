import { EventsActionTypes } from "./events.types";
import { axiosNoTokenRequest } from "../../axios";

export const getEvents = () => dispatch => {
  dispatch({
    type: EventsActionTypes.GET.GET_ALL_EVENTS_PENDING
  });

  axiosNoTokenRequest
    .get("/events")
    .then(events => {
      dispatch({
        type: EventsActionTypes.GET.GET_ALL_EVENTS_SUCCESS,
        payload: events.data
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.GET.GET_ALL_EVENTS_SUCCESS,
        payload: err
      });
    });
};

export const getEventById = eventId => dispatch => {
  dispatch({
    type: EventsActionTypes.GET.GET_EVENT_BY_ID_PENDING
  });

  axiosNoTokenRequest
    .get(`/events/${eventId}/`)
    .then(event => {
      dispatch({
        type: EventsActionTypes.GET.GET_EVENT_BY_ID_SUCCESS,
        payload: event.data
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.GET.GET_EVENT_BY_ID_ERROR,
        payload: err
      });
    });
};

export const postEvent = (
  eventName,
  eventDate,
  description,
  totalPlaces,
  placesAvailable,
  location
) => dispatch => {
  dispatch({
    type: EventsActionTypes.POST.POST_EVENT_PENDING
  });

  axiosNoTokenRequest
    .post("/events/", {
      eventName,
      eventDate,
      description,
      totalPlaces,
      placesAvailable,
      location
    })
    .then(postEvent => {
      dispatch({
        type: EventsActionTypes.POST.POST_EVENT_SUCCESS,
        payload: postEvent
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.POST.POST_EVENT_ERROR,
        payload: err
      });
    });
};

export const putEvent = (
  eventId,
  eventName,
  eventDate,
  description,
  totalPlaces,
  placesAvailable,
  location
) => dispatch => {
  dispatch({
    type: EventsActionTypes.PUT.PUT_EVENT_PENDING
  });

  axiosNoTokenRequest
    .put(`/events/${eventId}/`, {
      eventName,
      eventDate,
      description,
      totalPlaces,
      placesAvailable,
      location
    })
    .then(putEvent => {
      dispatch({
        type: EventsActionTypes.PUT.PUT_EVENT_SUCCESS,
        payload: putEvent
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.PUT.PUT_EVENT_ERROR,
        payload: err
      });
    });
};
