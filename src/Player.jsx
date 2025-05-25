import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: "19rem",
    margin: "1rem",
    display: "inline-block",
    verticalAlign: "top",
    borderRadius: "16px",
    overflow: "hidden",
    transition: "transform 0.3s",
    backgroundColor: "var(--card-bg)",
    color: "var(--text-color)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
  };

  const imageStyle = {
    height: "260px",
    objectFit: "cover"
  };

  const textStyle = {
    textAlign: "left",
    fontSize: "1rem",
    lineHeight: "1.5"
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.4rem", fontWeight: "600" }}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string
};

export default Player;