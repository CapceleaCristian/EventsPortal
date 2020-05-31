import React from "react";
import moment from "moment";

import "./input-date-picker.styles.scss";

const InputDatePicker = ({
  datePickHandler,
  timePickHandler,
  dateValue,
  timeValue
}) => {
  return (
    <div className="input-date-picker">
      <div className="input-date-picker__date">
        <label htmlFor="start">Event date:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          onChange={datePickHandler}
          value={dateValue}
          min={moment().format("YYYY-MM-DD")}
          max="2020-12-31"
          step="1"
          required
        />
      </div>
      <div className="input-date-picker__time">
        <label htmlFor="appt">Event time:</label>
        <input
          type="time"
          id="appt"
          name="appt"
          onChange={timePickHandler}
          value={timeValue}
          min="00:00"
          max="24:00"
          step="1"
          required
        />
      </div>
    </div>
  );
};

export default InputDatePicker;
