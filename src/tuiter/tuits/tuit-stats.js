import React from "react";
import { useDispatch } from "react-redux";
import { dislikeTuit, likeTuit } from "./tuits-reducer";

const TuitStats = ({
  tuit = {
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
  },
}) => {
  const dispatch = useDispatch();

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
          <i onClick={() => dispatch(dislikeTuit(tuit))} className="bi bi-heart-fill text-danger"></i>
        ) : (
          <i onClick={() => dispatch(likeTuit(tuit))} className="bi bi-heart"></i>
        )} {tuit.likes}
      </li>
      <li>
        <i className="bi bi-share"></i>
      </li>
    </ul>
  );
};

export default TuitStats;
