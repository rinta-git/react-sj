import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Southern Multipacks
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">SM © 2020. All Rights Reserved.</small>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <Link to="/" >
                Home
              </Link>
            </div>
            <div className="footer-link-items">
              <Link to="/AboutUs" >
                About
              </Link>
            </div>
            <div className="footer-link-items">
              <Link to="/Contact" >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
