import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuitsArray = useSelector((state) => state.tuits);
  return (
    <div className="list-group">
      {tuitsArray.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </div>
  );
};

export default TuitList;
