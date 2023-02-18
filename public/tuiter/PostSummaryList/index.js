import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return `
    ${exploreItems.map((postItem) => PostSummaryItem(postItem, exploreItems.indexOf(postItem))).join('')}
    `;
};

export default PostSummaryList;
