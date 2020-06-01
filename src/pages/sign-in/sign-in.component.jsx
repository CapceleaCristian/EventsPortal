import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { DefaultInput, Toaster } from "../../components";
import { signInAction } from "../../redux/action-exporter";

import "./sign-in.styles.scss";

const SignIn = ({ signInAction }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { email, password } = loginData;

  useEffect(() => setButtonDisabled(email === "" || password === ""), [
    email,
    password
  ]);

  const setLoginDataHandler = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
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
          Sign-in Form:
        </h3>
        <DefaultInput
          type="text"
          name="username"
          label="Username"
          onChangeHandler={setLoginDataHandler}
        />
        <DefaultInput
          type="password"
          name="password"
          label="Password"
          onChangeHandler={setLoginDataHandler}
        />
        <div className="sign-up__footer">
          <Button
            disabled={buttonDisabled}
            onClick={() => signInAction(loginData)}
            variant="success"
          >
            Login
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
  signInAction
})(SignIn);
