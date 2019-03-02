import React from "react";

const styles = {
  card: {
    // margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
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
