import React from 'react';

const Footer = () => {
    return (
        
            <footer>
  <div className="row primary">
    <div className="column about">
      <h3>Automotores SDR</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        voluptatem corporis error non,
      </p>
      <div className="social">
        <i className="fa-brands fa-facebook-square" />
        <i className="fa-brands fa-instagram-square" />
        <i className="fa-brands fa-twitter-square" />
        <i className="fa-brands fa-youtube-square" />
        <i className="fa-brands fa-whatsapp-square" />
      </div>
    </div>
    <div className="column links">
      <h3>Some Links</h3>
      <ul>
        <li>
          <a href="#faq">F.A.Q</a>
        </li>
        <li>
          <a href="#cookies-policy">Cookies Policy</a>
        </li>
        <li>
          <a href="#terms-of-services">Terms Of Service</a>
        </li>
        <li>
          <a href="#support">Soporte</a>
        </li>
      </ul>
    </div>
    <div className="column links">
      <h3>Some Links</h3>
      <ul>
        <li>
          <a href="#faq">F.A.Q</a>
        </li>
        <li>
          <a href="#cookies-policy">Cookies Policy</a>
        </li>
        <li>
          <a href="#terms-of-services">Terms Of Service</a>
        </li>
        <li>
          <a href="#support">Soporte</a>
        </li>
      </ul>
    </div>
    <div className="column subscribe">
      <h3>Newsletter</h3>
      <div>
        <input type="email" placeholder="Your email id here" />
        <button>Suscribite</button>
      </div>
    </div>
  </div>
  <div className="row copyright">
    <div className="footer-menu">
      <a href>Home</a>
      <a href>About</a>
      <a href>Contacto</a>
      <a href>Blog</a>
      <a href>Social</a>
    </div>
    <p>Copyright © 2023 Automotores SDR</p>
  </div>
</footer>

        
    );
}

export default Footer;