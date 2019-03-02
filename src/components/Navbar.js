import React from "react";

const styles = {
  card: {
    background: "#192d86"
  },
  heading: {
    background: "#192d86",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center"
  }
};

function Navbar(props) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Current Score: {props.score} || Top Score: {props.topScore}</div>
    </div>
  );
}

export default Navbar;
