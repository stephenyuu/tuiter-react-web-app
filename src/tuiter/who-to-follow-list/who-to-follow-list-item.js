import React from "react";
import "./index.css";

const WhoToFollowListItem = ({
  who = {
    userName: "NASA",
    handle: "NASA",
    avatarIcon: "nasa-logo.webp",
  },
}) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <div>
        <img
          className="wd-profile-pic rounded-circle"
          src={`/images/${who.avatarIcon}`}
          alt={who.userName}
        />
      </div>
      <div className="flex-shrink-0 d-flex flex-column ps-2">
        <span className="fw-bold">
          {who.userName} <i className="bi bi-check-circle-fill"></i>
        </span>
        @{who.handle}
      </div>
      <button className="btn btn-primary rounded-pill ms-auto">Follow</button>
    </li>
  );
};

export default WhoToFollowListItem;
