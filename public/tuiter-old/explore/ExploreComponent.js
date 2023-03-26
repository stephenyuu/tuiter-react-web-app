import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
  return `
      <!--search bar and settings menu cog-->
      <div class="wd-header">
        <div class="input-group">
            <span class="input-group-text bg-white wd-search-bar-icon">
            <i class="fas fa-search text-secondary"></i>
            </span>
            <input
            type="text"
            class="form-control wd-search-bar-container"
            placeholder="Search Tuiter"
            />
        </div>
        <a href="explore-settings.html">
            <i class="fas fa-cog wd-cog-size"></i>
        </a>
      </div>

      <!--navbar section-->
      <ul class="mt-3 nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-none d-md-block" href="entertainment.html">
          Entertainment
          </a>
        </li>
      </ul>

      <!--main content section with posts-->
      <div class="wd-post-section mt-3">
        <!--picture with text overlay-->
        <div class="position-relative">
          <img
            src="../images/spacex-starship.jpeg"
            alt="SpaceX's Starship"
            class="img-fluid"
          />
          <div class="wd-picture-caption">
            <h2>SpaceX's Starship</h2>
          </div>
        </div>
    ${PostSummaryList()}
    </div>
    `;
};

export default ExploreComponent;