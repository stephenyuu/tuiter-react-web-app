import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import whoArray from "./who.json";

const WhoToFollowList = () => {
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
