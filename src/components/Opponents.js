import React from "react";
import OpponentTile from "./OpponentTile";

const Opponents = (props) => {
  let positionsArray = [];
  let resultArray = [];
  if (props.situation === "vs-rfi") {
    switch (props.position) {
      case "UTG+1":
        positionsArray = ["UTG"];
        break;
      case "UTG+2":
        positionsArray = ["UTG", "UTG+1"];
        break;
      case "LJ":
        positionsArray = ["UTG", "UTG+1", "UTG+2"];
        break;
      case "HJ":
        positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ"];
        break;
      case "CO":
        positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ"];
        break;
      case "BU":
        positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO"];
        break;
      case "SB":
        positionsArray = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BU"];
        break;
      case "BB":
        positionsArray = [
          "UTG",
          "UTG+1",
          "UTG+2",
          "LJ",
          "HJ",
          "CO",
          "BU",
          "SB",
        ];
        break;
      default:
        break;
    }
  } else {
    switch (props.position) {
      case "UTG":
        positionsArray = ["UTG+1", "UTG+2", "LJ", "HJ", "CO", "BU", "SB", "BB"];
        break;
      case "UTG+1":
        positionsArray = ["UTG+2", "LJ", "HJ", "CO", "BU", "SB", "BB"];
        break;
      case "UTG+2":
        positionsArray = ["LJ", "HJ", "CO", "BU", "SB", "BB"];
        break;
      case "LJ":
        positionsArray = ["HJ", "CO", "BU", "SB", "BB"];
        break;
      case "HJ":
        positionsArray = ["CO", "BU", "SB", "BB"];
        break;
      case "CO":
        positionsArray = ["BU", "SB", "BB"];
        break;
      case "BU":
        positionsArray = ["SB", "BB"];
        break;
      case "SB":
        positionsArray = ["BB"];
        break;
      default:
        break;
    }
  }

  positionsArray.forEach((pos) => {
    resultArray.push(<OpponentTile class={pos.toLowerCase()} name={pos} />);
  });

  return <ul className={`opponent ${props.situation}`}>{resultArray}</ul>;
};

export default Opponents;
