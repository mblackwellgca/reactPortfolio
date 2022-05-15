import React from 'react';
import '../styles/Footer.css'

function Footer({  }) {
    return (
    <footer class="footer navbar-static-bottom">
      <div class="container">
        <a rel="noreferrer" href="#top" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
          <a rel="noreferrer" href="https://twitter.com/MblackwellGCA" target="_blank">
            <i class="fa fa-twitter fa-inverse fa-lg" style="border: 1px solid silver; border-radius: 0.25em; padding: 0.5em;"></i>
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/michelle-b-45b5a5224/" target="_blank">
            <i class="fa fa-linkedin fa-inverse fa-lg" style="border: 1px solid silver; border-radius: 0.25em; padding: 0.5em;"></i>
          </a>
          <a rel="noreferrer" href="https://github.com/mblackwellgca" target="_blank">
            <i class="fa fa-github fa-inverse fa-lg" style="border: 1px solid silver; border-radius: 0.25em; padding: 0.5em;"></i>
          </a>
          <hr/>
          <p>Thank you for stopping by to check out my work!</p>
        </div>
        </div>
        </footer>
        );
    }

    export default Footer;