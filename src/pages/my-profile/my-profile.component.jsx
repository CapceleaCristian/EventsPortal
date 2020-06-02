import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { mockNoUserImg } from "../../data";

import { getUserById } from "../../redux/action-exporter";

import "./my-profile.styles.scss";

const MyProfile = ({ getUserById, userById }) => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.hasOwnProperty("myProfile")) {
      const ls = JSON.parse(localStorage.getItem("myProfile"));
      getUserById(ls.id);
    }
  }, [getUserById]);

  return (
    <div className="my-profile">
      {userById ? (
        <Container>
          <div className="my-profile__inner">
            <div className="user-data">
              <div className="user-data__field">
                Name: <strong>{userById.name}</strong>
              </div>
              <div className="user-data__field">
                Phone: <strong>{userById.phoneNumber}</strong>
              </div>
              <div className="user-data__field">
                Address: <strong>{userById.address}</strong>
              </div>
              <div className="user-data__field">
                Email: <strong>{userById.email}</strong>
              </div>
              <div className="user-data__events">
                <div className="user-events-title">
                  User goes to events like:
                </div>
                <div className="user-events-data">
                  {userById.events && !!userById.events.length
                    ? userById.events.map(({ eventId, eventName }) => (
                        <div key={eventId} className="user-events-data__event">
                          <div
                            onClick={() => history.push(`/events/${eventId}`)}
                            className="event-name"
                          >
                            {eventName}
                          </div>
                        </div>
                      ))
                    : "No user events"}
                </div>
              </div>
            </div>
            <div className="user-image">
              <img
                src={userById.user_photo ? userById.user_photo : mockNoUserImg}
                alt=""
              />
            </div>
          </div>
        </Container>
      ) : (
        "Missing Data"
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userById: state.usersReducer.userById
});

export default connect(mapStateToProps, { getUserById })(MyProfile);
