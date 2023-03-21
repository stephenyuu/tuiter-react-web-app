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
  const handleHeartClick = () => {
    console.log(tuit)
    const newLikesCount = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
    const newTuitStats = {
      ...tuit,
      liked: !tuit.liked,
      likes: newLikesCount,
    };
    console.log(newTuitStats)
    dispatch(updateTuitStats(newTuitStats));
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
        <i
          onClick={handleHeartClick}
          className={`bi ${
            tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"
          }`}
        ></i>{" "}
        {tuit.likes}
      </li>
      <li>
        <i className="bi bi-share"></i>
      </li>
    </ul>
  );
};

export default TuitStats;
