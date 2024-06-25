/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ad ab incidunt rerum soluta doloremque esse, nisi delectus tenetur quam inventore, itaque dignissimos officia unde mollitia earum, iusto molestiae dolorem?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+1-289-567-6679</li>
            <li>contactus@tomato.org</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 @ Tomato.org = All Right Reserved.

      </p>
    </div>
  );
};

export default Footer;
