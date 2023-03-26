const NavigationSidebar = () => {
  return `
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter"></i>
        </a>
        <a
            href="../home.html"
            class="list-group-item list-group-item-action"
        >
            <i class="fas fa-home"></i>
            <span class="d-none d-xl-inline ps-3">Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fas fa-hashtag"></i>
            <span class="d-none d-xl-inline ps-3">Explore</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-bell"></i>
            <span class="d-none d-xl-inline ps-3">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-envelope"></i>
            <span class="d-none d-xl-inline ps-3">Messages</span>
        </a>
        <a
            href="../bookmarks/index.html"
            class="list-group-item list-group-item-action"
        >
            <i class="fas fa-bookmark"></i>
            <span class="d-none d-xl-inline ps-3">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-list"></i>
            <span class="d-none d-xl-inline ps-3">Lists</span>
        </a>
        <a
            href="../profile.html"
            class="list-group-item list-group-item-action"
        >
            <i class="fas fa-user"></i>
            <span class="d-none d-xl-inline ps-3">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action ps-1">
            <span class="fa-stack">
            <i class="fas fa-circle fa-stack-1x wd-circle-size"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x text-black"></i>
            </span>
            <span class="d-none d-xl-inline">More</span>
        </a>
        <a href="../tuit.html" class="mt-2 btn btn-primary rounded-pill"
            >Tuit</a
        >
    </div>
    `;
};

export default NavigationSidebar;
