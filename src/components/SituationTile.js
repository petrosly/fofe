import React from "react";

const SituationTile = (props) => {
  function situationHover() {
    document.querySelector(`.position.${props.class}`).style.opacity = 1;
  }

  function situationDisableHover() {
    document.querySelector(`.position.${props.class}`).style.opacity = 0;
  }

  return (
    <li
      className={props.class}
      onMouseEnter={situationHover}
      onMouseLeave={situationDisableHover}
    >
      {props.name}
    </li>
  );
};

export default SituationTile;
