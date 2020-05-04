import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import { EventCard, LoadingSpinner } from "../../components";

import { getEvents } from "../../redux/action-exporter";

import "./events.styles.scss";

const Events = ({ getEvents, areEventsPending, events }) => {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="events-page-container">
      {areEventsPending ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <div className="events-page-container__inner">
            <h1 style={{ textAlign: "center" }}>
              Total events: {events.length || 0}
            </h1>
            <Row>
              {events.map(
                ({
                  eventId,
                  eventName,
                  description,
                  totalPlaces,
                  placesAvailable,
                  location,
                  feedbackList
                }) => (
                  <Col key={eventId} md={4}>
                    <EventCard
                      eventId={eventId}
                      eventName={eventName}
                      description={description}
                      totalPlaces={totalPlaces}
                      placesAvailable={placesAvailable}
                      location={location}
                      feedbackList={feedbackList}
                    />
                  </Col>
                )
              )}
            </Row>
          </div>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  areEventsPending: state.eventsReducer.areEventsPending,
  events: state.eventsReducer.events
});
export default connect(mapStateToProps, { getEvents })(Events);
