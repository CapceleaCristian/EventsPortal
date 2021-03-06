import React from "react";

import { Form } from "react-bootstrap";

import "./default-input.styles.scss";

const DefaultInput = ({
  name,
  label,
  type,
  placeholder,
  onChangeHandler,
  inputValue
}) => {
  return (
    <div className="default-input">
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          name={name}
          onChange={onChangeHandler}
          type={type}
          placeholder={placeholder}
          value={inputValue}
        />
      </Form.Group>
    </div>
  );
};

export default DefaultInput;
