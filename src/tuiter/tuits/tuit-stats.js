import React from "react";

const TuitStats = ({
  tuit = {
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
  },
}) => {
  return (
    <ul className="d-flex justify-content-between">
      <li>
        <i className="bi bi-chat"></i> {tuit.replies}
      </li>
      <li>
        <i className="bi bi-arrow-clockwise"></i> {tuit.retuits}
      </li>
      <li>
        <i className="bi bi-heart-fill"></i> {tuit.likes}
      </li>
      <li>
        <i className="bi bi-share"></i>
      </li>
    </ul>
  );
};

export default TuitStats;
