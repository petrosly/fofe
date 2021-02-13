import React from "react";
import PositionTile from "./PositionTile";
import Opponents from "./Opponents";

const Positions = (props) => {
  let positionsArray = [];
  let resultArray = [];
  if (props.situation === "rfi") {
    positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB"];
  } else if (props.situation === "vs-rfi") {
    positionsArray = ["UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"];
  } else {
    positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB"];
  }

  positionsArray.forEach((pos) => {
    resultArray.push(
      <PositionTile
        class={pos.toLowerCase()}
        name={pos}
        opponent={<Opponents situation={props.situation} position={pos} />}
      />
    );
  });

  return <ul className={`position ${props.situation}`}>{resultArray}</ul>;
};

export default Positions;
