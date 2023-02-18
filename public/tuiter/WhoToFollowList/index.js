import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
  <div class="list-group">
    <li class="list-group-item fw-bold">Who to follow</li>
    ${who.map((whoItem) => WhoToFollowListItem(whoItem)).join("")}
  </div>
  `;
};

export default WhoToFollowList;
