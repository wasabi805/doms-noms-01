import React from 'react';
// import PropTypes from 'prop-types';
import chicken from '../../src/00-assets/img/chicken.jpg';
import ribs from '../../src/00-assets/img/ribs.jpg';
import rig from '../../src/00-assets/img/rig.jpg';
import spice from '../../src/00-assets/img/spice.jpg';

const Presenter = ({title, images}) => {
// console.log(chicken);

  return (
    <React.Fragment>
      <section className='gallery'>
        <div className="contain">
          <h1>Gallery</h1>

          {/*Gallery Images*/}
          <div className="row">
            <div className="row__inner">
              {images.map((path, i ) => <div key={ i } className="tile">
                <div className="tile__media">

                  <img className="tile__img" src={path} alt=""  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">
                    This could be a title
                  </div>
                </div>
              </div> )}
            </div>
          </div>
        </div>
      </section>



    </React.Fragment>

  );
};

// Presenter.displayName = 'Gallery Presenter';
//
//
// Presenter.propTypes = {
//   title: PropTypes.string.isRequired,
//   settings: PropTypes.object.isRequired,
//   images: PropTypes.arrayOf(PropTypes.string.isRequired),
// };
//
//
// Presenter.defaultProps = {
//   title: '',
//   settings: {},
//   images: [],
// };


export default Presenter;
