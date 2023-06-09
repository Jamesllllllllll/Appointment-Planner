import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { tiles } = props;

  return (
    <div class="tileList-container">
      {tiles.map(({id, name, ...rest}) => (
        <Tile key={id} name={name} description={rest} />
      ))}
    </div>
  );
};
