import React from "react";

import { Link } from "react-router-dom";

import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";

import { mockEvents, mockImage } from "../../data";

import "./entry.styles.scss";

const Entry = () => {
  return (
    <div className="entry-page-container">
      <Grid alignContent="center" container justify="center" spacing={3}>
        {mockEvents.map(({ eventId }) => (
          <Grid
            className="card-element"
            justify="center"
            key={eventId}
            item
            md={4}
          >
            <Link to={eventId}>
              <Card>
                <img src={mockImage} alt="" />
                <CardContent>
                  <Typography>Event Name</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Entry;
