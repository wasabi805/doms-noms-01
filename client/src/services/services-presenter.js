import React from 'react';
import PropTypes from 'prop-types';

import OfferPresenter from './offer-presenter';

{/*<i class="fas fa-truck"></i>*/}
const Presenter = ({services}) => {

  return (
    <section id='services' className="services">
      <div className="services-container">
        <h2 className="title">Our Services</h2>
        <div className="offer-container">

          {
            services.map((service, index) => {
              return (
                <OfferPresenter
                  key={index}
                  index={index + 1}
                  title={service.title}
                  description={service.description}
                  fa_icon={service.fa_icon}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

Presenter.displayName = 'Services Presenter';

Presenter.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fa_icon: PropTypes.string.isRequired,
    })
  ),
};

Presenter.defaultProps = {
  services: [],
};

export default Presenter;
