import React, { useRef } from "react";
import "./Footer.css";
import facebook from "./assets/facebook.png";
import linkdb from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import instagram from "./assets/instagram.png"


import imagelogo from "../../assets/logos/logo-iskcon.png"
const Footer: React.FC = () => {
 
  
  return (
    <footer className="footer-section">
      {/* Main Links Section */}
      {/* <div className="footer-links">
        <div className="footer-column">
          <h3>About us</h3>
          <ul>
            <li>Our Goals</li>
            <li>Our Process</li>
            <li>Our Work</li>
            <li>Our Partners</li>
            <li>Our Teams</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Programs</h3>
          <ul>
            <li>Mid-Day Meals</li>
            <li>Iskcon Events</li>
            <li>Kit of Joy</li>
            <li>Calender</li>
            <li>Healthcare Program</li>
            <li>Donation List</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blogs</li>
            <li>Gallery</li>
            <li>Newsletter</li>
            <li>Testimonials</li>
            <li>Publications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>New & Media</h3>
          <ul>
            <li>In the News</li>
            <li>Press Release</li>
            <li>Awards</li>
          </ul>
        </div>
      </div> */}

     




      {/* Get Involved Section */}
      <div className="footer-form">
        <h3>Get Involved</h3>
        <form>
          <input name="fullName" type="text" placeholder="Full Name *" required />
          <input name="email" type="email" placeholder="Email*" required />
          <input name="phoneNumber" type="text" placeholder="Phone Number*" required />
          <textarea name="message" placeholder="Message" rows={4}></textarea>
          <div className="form-footer">
           
          </div>
          <button type="submit" className="submit-button">
            Submit Now
          </button>
        </form>
      </div>



       {/* Social Media Section */}
       <div className="footer-social">
        <h3>Social Media</h3>
        <div className="social-icons">
          <div className="icon facebook"> <a href="https://www.youtube.com/@iskconfoodforchild">  <img src={facebook} alt="facebook"/> </a></div>
          <div className="icon x"><a href="https://www.instagram.com/iskcon.foodforchild/"><img src={instagram} alt="linkdin"/> </a></div>
          <div className="icon x"><a href="https://www.linkedin.com/company/iskcon-food-for-child/"><img src={linkdb} alt="linkdin"/> </a></div>
          <div className="icon youtube"><a href="https://twitter.com/IskconFFC"><img src={twitter} alt="twitter-x"/> </a></div>
          <div className="icon linkedin"><a href="https://www.youtube.com/@iskconfoodforchild"><img src={youtube} alt="youtube"/> </a></div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-logo" style={{backgroundColor:'white',borderRadius:'15px',width:'170px',height:'50px',padding:'10px',marginBottom:'10px'}}>
          <img src={imagelogo} alt="ISKCON JUHU" style={{height:'100%',width:'100%',objectFit:'cover'}}/> {/* Replace with actual logo */}
  
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2024 ISKCON JUHU. All Rights Reserved.</p>
        </div>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

