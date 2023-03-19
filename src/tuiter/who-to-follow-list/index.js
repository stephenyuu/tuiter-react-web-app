import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return (
    <div className="list-group">
      <li className="list-group-item fw-bold">Who to follow</li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </div>
  );
};

export default WhoToFollowList;
