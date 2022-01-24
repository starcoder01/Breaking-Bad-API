import React from "react";

const Card = ({ data }) => {
  return (
    <div key={data.char_id} className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={data.img} alt="" />
        </div>

        <div className="card-back">
          <h1>Name:{data.name}</h1>
          <h3>Birthday:{data.birthday}</h3>
          <h3>Occupation:{data.occupation}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
