import React from "react";
import SituationTile from "./SituationTile";
import Positions from "./Positions";

const Situations = () => {
  return (
    <ul className="situations">
      <SituationTile class="rfi" name="RFI" />
      <SituationTile class="vs-rfi" name="vs RFI" />
      <SituationTile class="vs-3bet" name="vs 3-BET" />
      <Positions situation="rfi" />
      <Positions situation="vs-rfi" />
      <Positions situation="vs-3bet" />
    </ul>
  );
};

export default Situations;
