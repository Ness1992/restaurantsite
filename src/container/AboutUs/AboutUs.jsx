import React, { useState } from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  const toggleShowMoreAbout = () => {
    setShowMoreAbout(!showMoreAbout);
  };

  const toggleShowMoreHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">À propos de nous</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            {showMoreAbout ? (
              <>
                <br />
                odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus
           
              </>
            ) : null}
          </p>
          <button type="button" className="custom__button" onClick={toggleShowMoreAbout}>
            {showMoreAbout ? 'Réduire' : 'En savoir plus'}
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Notre histoire</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat
            habitasse interdum mi aliquam In sed odio nec aliquet.Adipiscing tempus ullamcorper lobortis
            
            {showMoreHistory ? (
              <>
                <br />
                odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus
            placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.Adipiscing tempus
            
              </>
            ) : null}
          </p>
          <button type="button" className="custom__button" onClick={toggleShowMoreHistory}>
            {showMoreHistory ? 'Réduire' : 'Savoir plus'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
