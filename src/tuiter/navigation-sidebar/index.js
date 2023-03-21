import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item">
        <i className="bi bi-twitter"></i> 
      </a>
      <a className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <i className="bi bi-house-fill"></i> <span className="d-none d-xl-inline ps-3">Home</span>
      </a>
      <a className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <i className="bi bi-hash"></i> <span className="d-none d-xl-inline ps-3">Explore</span>
      </a>
      <a
        className={`list-group-item ${
          active === "notifications" ? "active " : ""
        }`}
      >
        <i className="bi bi-bell-fill"></i> <span className="d-none d-xl-inline ps-3">Notifications</span>
      </a>
      <a className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <i className="bi bi-envelope-fill"></i> <span className="d-none d-xl-inline ps-3">Messages</span>
      </a>
      <a
        className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}
      >
        <i className="bi bi-bookmark-fill"></i> <span className="d-none d-xl-inline ps-3">Bookmarks</span>
      </a>
      <a className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <i className="bi bi-list-ul"></i> <span className="d-none d-xl-inline ps-3">Lists</span>
      </a>
      <a className={`list-group-item ${active === "profile" ? "active" : ""}`}>
        <i className="bi bi-person-fill"></i> <span className="d-none d-xl-inline ps-3">Profile</span>
      </a>
      <a className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <i className="bi bi-three-dots"></i> <span className="d-none d-xl-inline ps-3">More</span>
      </a>
    </div>
  );
};

export default NavigationSidebar;
