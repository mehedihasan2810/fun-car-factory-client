import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      {/* Gradient overlays for left and right sides of the footer */}
      <div className="footer-left-gradient"></div>
      <div className="footer-right-gradient"></div>

      {/* Main footer section */}
      <footer className="footer">
        {/* Top section containing various information categories */}
        <div className="top">
          {/* Categories */}
          <div className="item">
            <h6>Categories</h6>
            <span>Truck Toys</span>
            <span>Ferrari Toys</span>
            <span>Volvo Toys</span>
            <span>BMW Toys</span>
            <span>Best Rated</span>
          </div>
          <div className="item">
            <h6>Links</h6>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stories</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          {/* About section with a brief description */}
          <div className="item">
            <h6>About</h6>
            <span className="footer-about-info">
              Welcome to Fun Car Factory, your hub for premium toy cars that
              spark creativity and joy. Our diverse selection ensures endless
              adventure. With a focus on safety and quality, we create memorable
              moments for your family. Explore and play with us today!
            </span>
          </div>

          {/* Contact information and social media links */}
          <div className="item">
            <h6>Contact</h6>
            <span>Phone: O172*******</span>
            <span>12 Avenue, Dhaka, Bangladesh</span>
            <div className="social">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Bottom section with logo and copyright */}
        <div className="bottom">
          <div className="left">
            <img src="/assets/logo.png" alt="" />
            <span className="copyright">
              Copyright 2023. All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
