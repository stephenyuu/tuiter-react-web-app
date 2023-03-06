import React from "react";
import PostSummaryItem from "./post-summary-item";
import postsArray from "./posts.json";

const PostSummaryList = () => {
  return (
    <div className="list-group">
      {postsArray.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostSummaryList;
