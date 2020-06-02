export const EventsActionTypes = {
  GET: {
    GET_ALL_EVENTS_PENDING: "GET_ALL_EVENTS_PENDING",
    GET_ALL_EVENTS_SUCCESS: "GET_ALL_EVENTS_SUCCESS",
    GET_ALL_EVENTS_ERROR: "GET_ALL_EVENTS_ERROR",

    GET_EVENT_BY_ID_PENDING: "GET_EVENT_BY_ID_PENDING",
    GET_EVENT_BY_ID_SUCCESS: "GET_EVENT_BY_ID_SUCCESS",
    GET_EVENT_BY_ID_ERROR: "GET_EVENT_BY_ID_ERROR",

    IS_USER_SUBSCRIBED_TO_EVENT_PENDING: "IS_USER_SUBSCRIBED_TO_EVENT_PENDING",
    IS_USER_SUBSCRIBED_TO_EVENT_SUCCESS: "IS_USER_SUBSCRIBED_TO_EVENT_SUCCESS",
    IS_USER_SUBSCRIBED_TO_EVENT_ERROR: "IS_USER_SUBSCRIBED_TO_EVENT_ERROR"
  },
  EDIT: {
    EDIT_EVENT_PENDING: "EDIT_EVENT_PENDING",
    EDIT_EVENT_SUCCESS: "EDIT_EVENT_SUCCESS",
    EDIT_EVENT_ERROR: "EDIT_EVENT_ERROR"
  },
  POST: {
    ADD_USER_TO_EVENT_PENDING: "ADD_USER_TO_EVENT_PENDING",
    ADD_USER_TO_EVENT_SUCCESS: "ADD_USER_TO_EVENT_SUCCESS",
    ADD_USER_TO_EVENT_ERROR: "ADD_USER_TO_EVENT_ERROR"
  },
  CLEAR_REQUEST_STATUS: "CLEAR_REQUEST_STATUS"
};
