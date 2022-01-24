import React from "react";
import Card from "./Card";

const Grid = ({ isLoading, data }) => {
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="grid">
      {data.map((e) => (
        <Card key={e.char_key} data={e} />
      ))}
    </div>
  );
};

export default Grid;
