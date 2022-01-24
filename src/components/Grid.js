import React from "react";
import Card from "./Card";
import spinner from "../images/spinner.gif";

const Grid = ({ isLoading, data }) => {
  return isLoading ? (
    <div>
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="grid">
      {data.map((e) => (
        <Card key={e.char_id} data={e} />
      ))}
    </div>
  );
};

export default Grid;
