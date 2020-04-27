import React from "react";
import "./footer.css";
import logos from "../logos.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="sociaux">
          <h2>Suivez-nous</h2>
          <ul>
            <li>
              <i class="fab fa-twitter twit"></i>
            </li>
            <li>
              <i class="fab fa-facebook face"></i>
            </li>
            <li>
              <i class="fab fa-linkedin link"></i>
            </li>
            <li>
              <i class="fab fa-youtube you"></i>
            </li>
          </ul>
        </div>

        <img id="logo" src={logos} alt="logo"></img>

        <div className="contact">
          <h2>Contactez-nous</h2>
          <ul class="list-unstyled">
            <li>
              <p>
                <i class="fas fa-home mr-3"></i> 15 Avenue De Carthage, Tunis
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-envelope mr-3"></i> contact@simplon.co
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-phone mr-3"></i> +216 20000000
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="copyright">
        <p> © 2020 Copyright: Argoubi Allani Mehrez Gdida</p>
      </div>
    </div>
  );
}
export default Footer;
