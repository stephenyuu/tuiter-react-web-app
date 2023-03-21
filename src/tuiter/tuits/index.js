import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <div className="list-group">
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </div>
  );
};

export default TuitList;
