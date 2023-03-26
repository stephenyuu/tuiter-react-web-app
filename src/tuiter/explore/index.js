import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";
import TuiterLayoutTemplate from "..";

const ExploreComponent = () => {
  return (
    <TuiterLayoutTemplate active="explore">
      <>
        {/* search bar and settings menu cog */}
        <div className="wd-header">
          <div className="input-group">
            <span className="input-group-text bg-white wd-search-bar-icon">
              <i className="bi bi-search text-secondary"></i>
            </span>
            <input
              type="text"
              className="form-control wd-search-bar-container"
              placeholder="Search Tuiter"
            />
          </div>
          <a href="explore-settings.html">
            <i className="bi bi-gear-fill wd-cog-size"></i>
          </a>
        </div>
        {/* navbar section */}
        <ul className="mt-3 nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">
              For you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">
              News
            </a>
          </li>
        </ul>
        {/* main content section with posts */}
        <div className="wd-post-section mt-3">
          {/* picture with text overlay */}
          <div className="position-relative">
            <img
              src="/images/spacex-starship.jpeg"
              alt="SpaceX's Starship"
              className="img-fluid"
            />
            <div className="wd-picture-caption">
              <h2>SpaceX's Starship</h2>
            </div>
          </div>
          <PostSummaryList />
        </div>
      </>
    </TuiterLayoutTemplate>
  );
};

export default ExploreComponent;
