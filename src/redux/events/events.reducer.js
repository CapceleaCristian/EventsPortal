import { EventsActionTypes } from "./events.types";

const INITIAL_STATE = {
  areEventsPending: false,
  events: [],
  eventsError: {},

  isEventByIdPending: false,
  eventById: {},
  eventByIdError: {},

  isEventPosting: false,
  eventPost: {},
  eventPostError: {}
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

    case EventsActionTypes.POST.POST_EVENT_PENDING:
      return {
        ...state,
        isEventPosting: true
      };

    case EventsActionTypes.POST.POST_EVENT_SUCCESS:
      return {
        ...state,
        isEventPosting: false,
        eventPost: action.payload
      };

    case EventsActionTypes.POST.POST_EVENT_ERROR:
      return {
        ...state,
        isEventPosting: false,
        eventPostError: action.payload
      };

    case EventsActionTypes.PUT.PUT_EVENT_PENDING:
      return {
        ...state,
        isEventPosting: true
      };

    case EventsActionTypes.PUT.PUT_EVENT_SUCCESS:
      return {
        ...state,
        isEventPosting: false,
        eventPost: action.payload
      };

    case EventsActionTypes.PUT.PUT_EVENT_ERROR:
      return {
        ...state,
        isEventPosting: false,
        eventPostError: action.payload
      };
    default:
      return state;
  }
};

export default EventsReducer;
