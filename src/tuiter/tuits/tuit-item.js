import React from "react";
import TuitStats from "./tuit-stats";
import "../../styles/styles.css"

const TuitItem = ({
  tuit = {
    userName: undefined,
    time: undefined,
    image: undefined,
    handle: undefined,
    tuit: "",
  },
}) => {
  return (
    <div className="list-group-item d-flex">
      <img
        className="wd-profile-pic rounded-circle"
        src={`/images/${tuit.image}`}
        alt={tuit.userName}
      />
      <div className="ps-3">
        <ul className="pb-3">
          <li>
            <span className="fw-bold">{tuit.userName}</span>{" "}
            <i className="bi bi-patch-check-fill text-primary"></i>{" "}
            {tuit.handle} · {tuit.time}
          </li>
          <li>{tuit.tuit}</li>
        </ul>
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
};

export default TuitItem;
