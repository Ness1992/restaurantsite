import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Poursuivez la nouvelle saveur" />
      <h1 className="app__header-h1">La Clé de la Haute Cuisine</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Installez-vous confortablement et laissez la sérénité de notre ambiance vous envelopper, tout en profitant de chaque instant. Savourez une cuisine raffinée, où chaque plat est préparé avec une maîtrise et une élégance incomparables. Découvrez des alliances de saveurs subtiles et des accords parfaits, dans un cadre où chaque détail est pensé pour votre plaisir.</p>
      <button type="button" className="custom__button">Explorez notre menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;