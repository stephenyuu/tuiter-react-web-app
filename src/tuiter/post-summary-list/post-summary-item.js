import React from "react";
import "../../styles/styles.css";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla-logo.jpeg",
  },
}) => {
  return (
    <div className="list-group-item p-2 d-flex justify-content-between align-items-center">
      <ul>
        <li>
          <span className="text-secondary">{post.userName} · {post.time}</span>
        </li>
        <li className="text-dark fw-bold">{post.topic}</li>
        <li className="text-secondary">{post.title}</li>
      </ul>
      <img
        className="wd-article-image rounded"
        src={`/images/${post.image}`}
        alt={post.userName}
      />
    </div>
  );
};

export default PostSummaryItem;
