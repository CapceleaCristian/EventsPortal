import { EventsActionTypes } from "./events.types";

const INITIAL_STATE = {
  areEventsPending: false,
  events: [],
  eventsError: {},

  isEventByIdPending: false,
  eventById: {},
  eventByIdError: {},

  isEventEditing: false,
  eventEdited: {},
  eventEditedError: {},

  isUserGoingToEvent: false,
  eventRequestStatus: 0
};

const EventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventsActionTypes.GET.GET_ALL_EVENTS_PENDING:
      return {
        ...state,
        areEventsPending: true
      };

    case EventsActionTypes.GET.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        areEventsPending: false,
        events: action.payload
      };

    case EventsActionTypes.GET.GET_ALL_EVENTS_ERROR:
      return {
        ...state,
        areEventsPending: false,
        eventsError: action.payload
      };

    case EventsActionTypes.GET.GET_EVENT_BY_ID_PENDING:
      return {
        ...state,
        isEventByIdPending: true
      };

    case EventsActionTypes.GET.GET_EVENT_BY_ID_SUCCESS:
      return {
        ...state,
        isEventByIdPending: false,
        eventById: action.payload
      };

    case EventsActionTypes.GET.GET_EVENT_BY_ID_ERROR:
      return {
        ...state,
        isEventByIdPending: false,
        eventByIdError: action.payload
      };

    case EventsActionTypes.EDIT.EDIT_EVENT_PENDING:
      return {
        ...state,
        isEventEditing: true
      };

    case EventsActionTypes.EDIT.EDIT_EVENT_SUCCESS:
      return {
        ...state,
        eventEdited: action.payload,
        eventRequestStatus: action.payload.status,
        isEventEditing: false
      };

    case EventsActionTypes.EDIT.EDIT_EVENT_ERROR:
      return {
        ...state,
        eventEditedError: action.payload,
        eventRequestStatus: action.payload.status,
        isEventEditing: false
      };

    case EventsActionTypes.GET.IS_USER_SUBSCRIBED_TO_EVENT_SUCCESS:
      return {
        ...state,
        isUserGoingToEvent: action.payload
      };

    case EventsActionTypes.CLEAR_REQUEST_STATUS:
      return {
        ...state,
        eventRequestStatus: action.payload
      };
    default:
      return state;
  }
};

export default EventsReducer;
