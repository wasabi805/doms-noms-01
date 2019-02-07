import React from 'react';
import PropTypes from 'prop-types';

// import FieldContainer    from './inputs/text-field-container';
// import TextAreaContainer from './inputs/textarea-container';

const Presenter = ({error, phone}) => {
  return (
    <section id='contact' className="contact">
      <div className='contact-overlay'>

      </div>
      {/*<form autoComplete="on" className="contact-form">*/}
        {/*<div className="form-inputs">*/}
          {/*<div className="left">*/}
            {/*<FieldContainer field="name"    type="text"  autoComplete="name"  />*/}
            {/*<FieldContainer field="email"   type="email" autoComplete="email" />*/}
            {/*<FieldContainer field="phone"   type="tel"   autoComplete="phone" />*/}
            {/*<FieldContainer field="subject" type="text"  autoComplete="off"   />*/}
          {/*</div>*/}
          {/*<div className="right">*/}
            {/*<TextAreaContainer />*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="bottom">*/}
          {/*<p className="error">{error}</p>*/}
          {/*<button type="submit">Send</button>*/}
        {/*</div>*/}
      {/*</form>*/}

      <h1 className='wood-bg-title'>Get in Touch</h1>
        <p className='story-text'>Feel free to contact us about having us cater your next event!</p>

        <form >
            <div className="form-group">
               <div className='column-left'>
                   <input type="text" className="form-control" id="contact-name" placeholder="NAME:"/>
                   <input type="email" className="form-control" id="contact-email" placeholder="EMAIL:"/>
                   <input type="text" className="form-control" id="contact-phone" placeholder="PHONE:"/>
                   <input type="text" className="form-control" id="contact-subject" placeholder="SUBJECT:"/>
               </div>

              <div className='column-right'>
                  <textarea className="form-control" rows="3" placeholder="How can we help you today??"/>
              </div>
            </div>

            <div className='button-container'>
                {/*<button type="submit" className="stamp is-approved">Submit</button>*/}
                <button type="submit" className="stamp is-approved">Submit</button>
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
