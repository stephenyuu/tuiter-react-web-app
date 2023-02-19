import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return `
    <!--other posts-->
    <div class="list-group">
      ${exploreItems.map((postItem) => PostSummaryItem(postItem)).join('')}
    </div>
    `;
};

export default PostSummaryList;
