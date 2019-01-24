import React from 'react';
import PropTypes from 'prop-types';

const Presenter = props => {

  return (
    <div className="contact-field">
      <label htmlFor={props.field}>{props.label}</label>
      <input
        required
        className={`field-input${props.hasError ? '--error' : ''}`}
        id={props.field}
        type={props.type}
        value={props.value}
        placeholder={props.label}
        autoComplete={props.autoComplete}

        onChange={props.func.handleInputChange}
        onBlur={props.func.handleInputBlur}
      />
    </div>
  );
};

Presenter.displayName = 'Text Field Presenter';

Presenter.propTypes = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  autoComplete: PropTypes.string.isRequired,
  func: PropTypes.shape({
    handleInputChange: PropTypes.func.isRequired,
    handleInputBlur: PropTypes.func.isRequired,
  })
};

Presenter.defaultProps = {
  field: '',
  name: '',
  label: '',
  type: '',
  value: '',
  autoComplete: '',
  hasError: false,
};

export default Presenter;
