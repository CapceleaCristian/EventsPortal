import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { mockNoUserImg } from "../../data";

import { LoadingSpinner } from "../../components";

import { getUserById } from "../../redux/action-exporter";

import "./user-single.styles.scss";

const UserSingle = ({ getUserById, userById, isUserByIdPending }) => {
  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUserById(userId);
  }, [userId, getUserById]);

  return (
    <div className="user-single">
      {isUserByIdPending && userById ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <div className="user-single__inner">
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
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isUserByIdPending: state.usersReducer.isUserByIdPending,
  userById: state.usersReducer.userById
});

export default connect(mapStateToProps, { getUserById })(UserSingle);
