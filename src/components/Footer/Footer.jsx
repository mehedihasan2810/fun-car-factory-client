import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
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
        <div className="item">
          <h6>About</h6>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            eos vitae blanditiis neque molestias itaque sequi, voluptatem
            voluptatum, error placeat magni? Rerum mollitia dignissimos quo
            magnam culpa quasi maiores.
          </span>
        </div>
        <div className="item">
          <h6>Contact</h6>
          <span>spanhone: O172*******</span>
          <span>12 Avenue, Dhaka, Bangladesh</span>
          <div className="social">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="/assets/logo.png" alt="" />
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
