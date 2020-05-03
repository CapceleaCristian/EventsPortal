import { combineReducers } from "redux";
import EventsReducer from "./events/events.reducer";

export default combineReducers({
  eventsReducer: EventsReducer
});
