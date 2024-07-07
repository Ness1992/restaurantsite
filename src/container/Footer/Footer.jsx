import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">29 Quai de Bonneuil 94100, Saint-Maur-des-Fossés ,France</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Se retrouver en régalant les autres.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=100089817815471&locale=fr_FR" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/ness_la_brune_?igsh=MTA3OW9zdjgxZHgzYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heures d'ouverture</h1>
        <p className="p__opensans">Lundi-vendredi :</p>
        <p className="p__opensans">08h00 - 00h00</p>
        <p className="p__opensans">Samedi-dimanche :</p>
        <p className="p__opensans">07h00 - 23h00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Gastronome. Tous droits réservés.</p>
    </div>

  </div>
);

export default Footer;
