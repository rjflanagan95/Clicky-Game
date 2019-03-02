import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Clicky Game</h1>
      <p>Try to click all the planets without clicking the same planet twice. If you can click them all, you win!</p>
    </header>
  );
}

export default Header;
