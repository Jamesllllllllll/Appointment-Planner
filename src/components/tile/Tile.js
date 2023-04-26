import React from "react";

export const Tile = (props) => {
  let { name, description } = props;

  return (
    <div className="tile-container">
      <p>{name}</p>
      {Object.values(description).map((value,index) => <p index={index}>{value}</p>)
      }
    </div>
  );
};
