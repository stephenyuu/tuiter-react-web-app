const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item d-flex align-items-center">
        <div>
            <img
                src=${who.avatarIcon}
                alt=${who.userName}
                class="wd-profile-pic rounded-circle"
            />
        </div>
        <div class="flex-shrink-0 d-flex flex-column ps-2">
            <span class="fw-bold"
                >${who.userName} <i class="fas fa-check-circle"></i
            ></span>
            ${who.handle}
        </div>
        <button class="btn btn-primary rounded-pill ms-auto">
        Follow
        </button>
    </li>
    `;
};

export default WhoToFollowListItem;
