import React from 'react';
import PropTypes from 'prop-types';

const Presenter = ({title, description, index, fa_icon}) => {
  return (
    <article className="offer">
      <div className="offer-title">
        <span className="offer-number"><i className={'fas fa-'+fa_icon}/></span>
        <hr />
        <span className="offer-name">{title}</span>
      </div>
      <p  className="offer-description">{description} </p>
    </article>
  );
};

Presenter.displayName = 'Offer Presenter';

Presenter.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fa_icon : PropTypes.string.isRequired,
};


Presenter.defaultProps = {
  index: 0,
  title: '',
  description: '',
  fa_icon : '',
};


export default Presenter;
