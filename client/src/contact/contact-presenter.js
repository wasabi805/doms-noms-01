import React from 'react';
import PropTypes from 'prop-types';

import FieldContainer    from './inputs/text-field-container';
import TextAreaContainer from './inputs/textarea-container';

const Presenter = ({error, phone}) => {
  return (
    <section className="contact">
      <form autoComplete="on" className="contact-form">
        <div className="form-inputs">
          <div className="left">
            <FieldContainer field="name"    type="text"  autoComplete="name"  />
            <FieldContainer field="email"   type="email" autoComplete="email" />
            <FieldContainer field="phone"   type="tel"   autoComplete="phone" />
            <FieldContainer field="subject" type="text"  autoComplete="off"   />
          </div>
          <div className="right">
            <TextAreaContainer />
          </div>
        </div>
        <div className="bottom">
          <p className="error">{error}</p>
          <button type="submit">Send</button>
        </div>
      </form>

      <h3 className="contact-text">To Speak with someone from our team,</h3>

      <h3 className="contact-text">please call: {phone}</h3>
    </section>
  );
};

Presenter.displayName = 'Contact Presenter';

Presenter.propTypes = {
  error: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

Presenter.defaultProps = {
  error: '',
  phone: '',
};


export default Presenter;
