import { EventsActionTypes } from "./events.types";
import { axiosNoTokenInstance, axiosInstance } from "../../axios";

export const getEvents = () => dispatch => {
  dispatch({
    type: EventsActionTypes.GET.GET_ALL_EVENTS_PENDING
  });

  axiosNoTokenInstance
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

  axiosInstance
    .get(`/events/${eventId}`)
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
  location,
  usersNames = []
) => dispatch => {
  dispatch({
    type: EventsActionTypes.EDIT.EDIT_EVENT_PENDING
  });

  axiosInstance
    .post("/events", {
      eventName,
      eventDate,
      description,
      totalPlaces,
      placesAvailable,
      location,
      usersNames
    })
    .then(postEvent => {
      dispatch({
        type: EventsActionTypes.EDIT.EDIT_EVENT_SUCCESS,
        payload: { postEvent: postEvent.data, status: 201 }
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.EDIT.EDIT_EVENT_ERROR,
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
  location,
  usersNames = []
) => dispatch => {
  dispatch({
    type: EventsActionTypes.EDIT.EDIT_EVENT_PENDING
  });

  axiosInstance
    .put(`/events/${eventId}/`, {
      eventName,
      eventDate,
      description,
      totalPlaces,
      placesAvailable,
      location,
      usersNames
    })
    .then(putEvent => {
      dispatch({
        type: EventsActionTypes.EDIT.EDIT_EVENT_SUCCESS,
        payload: { putEvent: putEvent.data, status: 200 }
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.EDIT.EDIT_EVENT_ERROR,
        payload: err
      });
    });
};

export const addUserToEvent = (eventId, userId) => dispatch => {
  dispatch({
    type: EventsActionTypes.POST.ADD_USER_TO_EVENT_PENDING
  });
  axiosNoTokenInstance
    .post(`events/addUsers`, { eventId, usersId: [userId] })
    .then(addUsers => {
      dispatch({
        type: EventsActionTypes.POST.ADD_USER_TO_EVENT_SUCCESS,
        payload: addUsers
      });
    })
    .catch(err => {
      dispatch({
        type: EventsActionTypes.POST.ADD_USER_TO_EVENT_ERROR,
        payload: err
      });
    });
};

export const isUserSubscribedToEvent = (userName, eventName) => dispatch => {
  dispatch({
    type: EventsActionTypes.GET.IS_USER_SUBSCRIBED_TO_EVENT_PENDING
  });
  axiosInstance
    .get(`/users/isUserSubscribed/${userName}/${eventName}`)
    .then(response => {
      dispatch({
        type: EventsActionTypes.GET.IS_USER_SUBSCRIBED_TO_EVENT_SUCCESS,
        payload: response.data
      });
    });

  dispatch({
    type: EventsActionTypes.GET.IS_USER_SUBSCRIBED_TO_EVENT_ERROR
  });
};

export const clearRequestStatus = () => ({
  type: EventsActionTypes.CLEAR_REQUEST_STATUS,
  payload: ""
});
