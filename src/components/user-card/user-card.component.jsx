import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Card } from "react-bootstrap";

import { mockNoUserImg } from "../../data";

import "./user-card.styles.scss";

const UserCard = ({ id, user_photo, name, phoneNumber, address, email }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Card className="user-card" style={{ width: "18rem" }}>
      <Card.Img
        onClick={() => history.push(`${url}/${id}`)}
        className="user-card__image"
        variant="top"
        src={user_photo ? user_photo : mockNoUserImg}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{phoneNumber}</Card.Text>
        <Card.Text>{address}</Card.Text>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
