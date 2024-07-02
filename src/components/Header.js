import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-nav">
        <h1>
          <span>Kings</span>
          <span style={{ color: "#FFFFFF" }}>Landing</span>
        </h1>
        <nav>
          <a href="#">Home</a>
          <a style={{ color: "#e50914" }} href="#">
            Videos
          </a>
          <a style={{ color: "#e50914" }} href="#">
            Models
          </a>
          <a style={{ color: "#e50914" }} href="#">
            BTS
          </a>
          <a style={{ color: "#e50914" }} href="#">
            Store
          </a>
        </nav>
      </div>
      <div className="header-buttons">
        <div className="search-icon">
          <a href="#">
            <img src="/assets/images/search-icon.png" alt="Search" />
          </a>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src="/assets/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/assets/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
        <button className="login">Login</button>
        <button className="join-now">Join Now</button>
      </div>
    </header>
  );
};

export default Header;
