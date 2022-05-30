import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
    return (
    <footer class="footer navbar-static-bottom">
      <div class="container">
        <a rel="noreferrer" href="#top" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
          <a rel="noreferrer" href="https://twitter.com/MblackwellGCA"  target="_blank">
            <i className="fa fa-twitter fa-inverse fa-2x" />
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/michelle-b-45b5a5224/" target="_blank">
            <i className="fa fa-linkedin fa-inverse fa-2x" />
          </a>
          <a rel="noreferrer" href="https://github.com/mblackwellgca" target="_blank">
            <i className="fa fa-github fa-inverse fa-2x" />
          </a>
        </div>
      </div>
    </footer>
);
}

export default Footer;