import React from "react";
import bgf from "./assets/footer-img/Bg-f.png";
import footerbean1 from "./assets/footer-img/footer-bean-1.png";
import footerbean2 from "./assets/footer-img/footer-bean-2.png";
import coffeeFooter from "./assets/footer-img/coffee-footer.png";
import { ReactComponent as InstFooter } from "../homepage/assets/footer-img/Instagram-footer.svg";
import { ReactComponent as LinkedFooter } from "../homepage/assets/footer-img/Linkedin-footer.svg";
import { ReactComponent as LocationFooter } from "../homepage/assets/footer-img/Location-footer.svg";
import { ReactComponent as PhoneFooter } from "../homepage/assets/footer-img/Phone-footer.svg";
import { ReactComponent as PinterFooter } from "../homepage/assets/footer-img/Pinterest-footer.svg";
import { ReactComponent as PostFooter } from "../homepage/assets/footer-img/Post-footer.svg";

const Footer = () => {
  return (
    <div>
      <footer class="footer" style={{ backgroundImage: `url(${bgf})` }}>
        <span
          class="footer__social"
          style={{
            backgroundImage: `url(${footerbean1}), url(${footerbean2})`,
          }}
        >
          <p>Social media:</p>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedFooter />
          </a>
          <a href="https://pinterest.com/" target="_blank">
            <PinterFooter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstFooter />
          </a>
        </span>
        <div class="footer__container">
          <div class="footer__items">
            <img
              class="footer__main-img"
              src={coffeeFooter}
              alt="cofe-machine"
            />

            <div class="footer__item">
              <div class="footer__about">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">our story</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">careers</a>
                  </li>
                </ul>
              </div>
              <div class="footer__customer">
                <h3>Customer Recourses</h3>
                <ul>
                  <li>
                    <a href="#">menu</a>
                  </li>
                  <li>
                    <a href="#">locations</a>
                  </li>
                  <li>
                    <a href="#">support</a>
                  </li>
                </ul>
              </div>
              <div class="footer__services">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">payment options</a>
                  </li>
                  <li>
                    <a href="#">refunds & exchanges </a>
                  </li>
                  <li>
                    <a href="#">limitation of liability </a>
                  </li>
                </ul>
              </div>
              <div class="footer__contacts" id="contact">
                <ul>
                  <li>
                    <a href="#">
                      <LocationFooter /> 12 jhon Avenue #35 - new York
                    </a>
                  </li>
                  <li>
                    <a href="mailto:elizacoffee@coffee.com">
                      <PostFooter />
                      elizacoffee@coffee.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1-222-34">
                      <PhoneFooter />
                      +1-222-34-eliza
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer__copyright">
            <div class="copyright">
              <p>Created By Dream Team</p>
              <p>Copyright 2023 Eliza Coffee . All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;