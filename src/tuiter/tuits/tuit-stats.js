import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitStats } from "./tuits-reducer";

const TuitStats = ({
  tuit = {
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
  },
}) => {
  const dispatch = useDispatch();
  const handleUnlikeTuit = () => {
    dispatch(
      updateTuitStats({ ...tuit, liked: !tuit.liked, likes: tuit.likes - 1 })
    );
  };
  return (
    <ul className="d-flex justify-content-around align-items-center">
      <li>
        <i className="bi bi-chat"></i> {tuit.replies}
      </li>
      <li>
        <i className="bi bi-arrow-clockwise"></i> {tuit.retuits}
      </li>
      <li>
        {tuit.liked ? (
          <i
            className="bi bi-heart-fill text-danger"
            onClick={handleUnlikeTuit}
          ></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}{" "}
        {tuit.likes}
      </li>
      <li>
        <i className="bi bi-share"></i>
      </li>
    </ul>
  );
};

export default TuitStats;
