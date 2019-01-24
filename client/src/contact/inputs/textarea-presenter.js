import React from 'react';
import PropTypes from 'prop-types';

const Presenter = props => {
  return (
    <div className="contact-field">
      <label htmlFor="message">Message</label>
      <textarea
        required
        className={`textarea${props.hasError ? '--error' : ''}`}
        id="message"
        value={props.value}
        placeholder="How Can We Help"

        onChange={props.func.handleInputChange}
        onBlur={props.func.handleInputBlur}
      />
    </div>
  );
};

Presenter.displayName = 'TextArea Presenter';

Presenter.propTypes = {
  hasError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.shape({
    handleInputChange: PropTypes.func.isRequired,
    handleInputBlur: PropTypes.func.isRequired,
  })
};

Presenter.defaultProps = {
  hasError: false,
  value: '',
};

export default Presenter;
