import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Gastronome" />
      <h1 className="headtext__cormorant">Abonnez-vous</h1>
      <p className="p__opensans">Et ne manquez jamais les dernières mises à jour !</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Entrez votre adresse e-mail" />
      <button type="button" className="custom__button">
      Inscrivez-vous</button>
    </div>
  </div>
);

export default Newsletter;