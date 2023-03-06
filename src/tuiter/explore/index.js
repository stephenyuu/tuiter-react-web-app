import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
    <>
      {/* search bar and settings menu cog */}
      <div class="wd-header">
        <div class="input-group">
          <span class="input-group-text bg-white wd-search-bar-icon">
            <i class="bi bi-search text-secondary"></i>
          </span>
          <input
            type="text"
            class="form-control wd-search-bar-container"
            placeholder="Search Tuiter"
          />
        </div>
        <a href="explore-settings.html">
          <i class="bi bi-gear-fill wd-cog-size"></i>
        </a>
      </div>
      {/* navbar section */}
      <ul class="mt-3 nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">
            For you
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">
            Trending
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">
            News
          </a>
        </li>
      </ul>
      {/* main content section with posts */}
      <div class="wd-post-section mt-3">
        {/* picture with text overlay */}
        <div class="position-relative">
          <img
            src="/images/spacex-starship.jpeg"
            alt="SpaceX's Starship"
            class="img-fluid"
          />
          <div class="wd-picture-caption">
            <h2>SpaceX's Starship</h2>
          </div>
        </div>
        <PostSummaryList />
      </div>
    </>
  );
};

export default ExploreComponent;
