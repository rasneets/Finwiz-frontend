
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons
import '../styling/footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        
        <h2 className="footer-title">Follow Us On</h2>
        <div className="footer-icons">
          <a href="https://www.facebook.com/nitw.finwiz/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon facebook" />
          </a>
          <a href="https://www.instagram.com/finwiz_nitw/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://www.linkedin.com/company/finwiz/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
        </div>
        <p>Developed by Anisetty Venkat Koushik </p>
        <p>For any issues contact venkatkoushik15@gmail.com</p>
      </div>
    </>
  );
};

export default Footer;
