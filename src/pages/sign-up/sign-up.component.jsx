import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { DefaultInput, Toaster } from "../../components";
import {
  signUpAction,
  clearUserRequestStatus
} from "../../redux/action-exporter";

import "./sign-up.styles.scss";

const SignUp = ({
  signUpAction,
  userRequestStatus,
  clearUserRequestStatus
}) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { name, phone, address, email, password } = userData;

  useEffect(
    () =>
      setButtonDisabled(
        name === "" ||
          phone === "" ||
          address === "" ||
          email === "" ||
          password === "" ||
          userRequestStatus === 201
      ),
    [name, userRequestStatus, phone, address, email, password]
  );

  useEffect(() => {
    if (userRequestStatus === 201) {
      setShowModal(true);
      setTimeout(() => {
        history.push("/events");
        setShowModal(false);
      }, 3000);
    }
  }, [history, userRequestStatus]);

  useEffect(() => {
    return () => clearUserRequestStatus();
  }, [clearUserRequestStatus]);

  const setUserDataHandler = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <Toaster
        title="Notification"
        message="Registration with success!"
        onCloseHandle={() => setShowModal(false)}
        showModal={showModal}
        animation={true}
        autohide={true}
      />
      <Container>
        <h3 style={{ paddingTop: "18px", textAlign: "center" }}>
          Sign-up Form:
        </h3>
        <DefaultInput
          type="text"
          name="name"
          label="Name"
          onChangeHandler={setUserDataHandler}
        />
        <DefaultInput
          type="text"
          name="phone"
          label="Phone"
          onChangeHandler={setUserDataHandler}
        />
        <DefaultInput
          type="text"
          name="address"
          label="Address"
          onChangeHandler={setUserDataHandler}
        />
        <DefaultInput
          type="text"
          name="email"
          label="Email"
          onChangeHandler={setUserDataHandler}
        />
        <DefaultInput
          type="password"
          name="password"
          label="Password"
          onChangeHandler={setUserDataHandler}
        />
        <div className="sign-up__footer">
          <Button
            disabled={buttonDisabled}
            onClick={() => signUpAction(userData)}
            variant="success"
          >
            Save
          </Button>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  userRequestStatus: state.usersReducer.userRequestStatus
});

export default connect(mapStateToProps, {
  signUpAction,
  clearUserRequestStatus
})(SignUp);
