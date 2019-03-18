import React from 'react';
// import PropTypes from 'prop-types';

//DON't DELETE DOMINO'S IMG
import domino from '../../src/00-assets/img/domino.jpg';

import SocialContainer from '../../src/header/social/social-container'

const Presenter = ({about_us , brand}) => {

  return (
    <section className="about-us">
      <div className="about-us-container">

        <img className='profile_img' src={about_us} alt=''/>

        <div className='text-container'>


          <h2 className='title'>Quality You Can Taste</h2>

          <p className='text'>HI, My name is Domino, you may know me from such movies as ...Yeah, this album is dedicated
              To all the teachers that told me I'd never amount to nothin'
              To all the people that lived above the buildings that I was hustlin' in front of
              Called the police on me when I was just tryin' to make some money to feed my daughter (it's all good)
              And all the ninjas in the struggle
              You know what I'm sayin'? It's all good, baby baby</p>

            <SocialContainer/>
        </div>




      </div>
    </section>
  );
};

// Presenter.displayName = 'AboutUs Presenter';
//
// Presenter.propTypes = {
//   about_us : PropTypes.string.isRequired,
// };
//
// Presenter.defaultProps = {
//   about_us: '',
// };

export default Presenter;