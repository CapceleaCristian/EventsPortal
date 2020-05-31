import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";

import { LoadingSpinner, UserCard } from "../../components";
import { getUsers } from "../../redux/action-exporter";

const Users = ({ users, areUserPending, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  console.log(users);

  return (
    <div className="users">
      {areUserPending ? (
        <LoadingSpinner />
      ) : (
        <div className="users__container">
          <h1 style={{ textAlign: "center" }}>
            Total events: {users.length || 0}
          </h1>
          <Container>
            <Row>
              {users.map(
                ({ id, user_photo, name, phoneNumber, address, email }) => (
                  <UserCard
                    key={id}
                    id={id}
                    user_photo={user_photo}
                    name={name}
                    phoneNumber={phoneNumber}
                    address={address}
                    email={email}
                  />
                )
              )}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  areUserPending: state.usersReducer.areUserPending,
  users: state.usersReducer.users
});

export default connect(mapStateToProps, { getUsers })(Users);
