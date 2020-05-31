import { combineReducers } from "redux";
import EventsReducer from "./events/events.reducer";
import UsersReducer from "./users/users.reducer";

export default combineReducers({
  eventsReducer: EventsReducer,
  usersReducer: UsersReducer
});
