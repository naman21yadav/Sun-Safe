import React from "react";
import rem from "../reminder.png";
import tra from "../time-tracking.png";

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <a className="main-nav-link" href="impact">
            UV Impacts
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="reminder">
            <img
              src={rem}
              alt=""
              className="rem"
              style={{ height: 30, width: 30 }}
            />
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="track">
            <img
              src={tra}
              alt=""
              className="tra"
              style={{ height: 30, width: 30 }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
