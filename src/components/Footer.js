import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section left">
          <h1>
            <span>Kings</span>
            <span style={{ color: "#FFFFFF" }}>Landing</span>
          </h1>
          <p className="copyright">
            &copy; 2024 KingsLanding. All rights reserved.
          </p>
        </div>
        <div className="footer-section nav1">
          <a href="#">Home</a>
          <a href="#">Videos</a>
          <a href="#">Models</a>
          <a href="#">BTS</a>
          <a href="#">Store</a>
          <a href="#">Join Now</a>
        </div>
        <div className="footer-section nav2">
          <a href="#">Contact Us</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-section about">
          <h2>ABOUT KingsLanding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius a nisl non facilisis. Phasellus finibus scelerisque massa, ac
            elementum enim sollicitudin sed. Ut finibus pulvinar interdum. Proin
            sed neque in nisl ultrices euismod. Ut mattis turpis sed odio.
          </p>
          <div className="social-icons">
            <a href="#">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p className="footer-center">
        &copy; 2024 KingsLanding. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
