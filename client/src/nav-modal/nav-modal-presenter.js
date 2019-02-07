import React from 'react';

import { configureAnchors } from 'react-scrollable-anchor'

// btnAnimate
const Presenter = (props) => {
    configureAnchors({offset: -40, scrollDuration: 150})
    return (
       <React.Fragment>
           <input className="modal-state" id="modal-1" type="checkbox" checked={props.trueOrFalse} />

           <div className="modal">

               <label className="modal__bg" htmlFor="modal-1" onClick={props.handleNavModalClick}/>
               <div className="modal__inner">
                   {/*<label className="modal__close" htmlFor="modal-1"/>*/}

                   <a href='#home' onClick={()=>props.handleNavModalClick()}>
                       <button >
                           <i className="fas fa-home"/>
                           <p>Home</p>
                       </button>
                   </a>

                   <a href='#services' onClick={()=>props.handleNavModalClick()}>
                       <button>
                           <i className="fas fa-utensils"/>
                           <p>Services</p>
                       </button>
                   </a>

                   <a href='#food-menu' onClick={()=>props.handleNavModalClick()}>
                       <button>
                           <i className="fas fa-book-open"/>
                           <p>Menu</p>
                       </button>
                   </a>

                   <a href='#packages' onClick={()=>props.handleNavModalClick()}>
                       <button>
                           <i className="fas fa-gift"/>
                           <p>Packages</p>
                       </button>
                   </a>

                   <a href='#gallery' onClick={()=>props.handleNavModalClick()}>
                      <button>
                          <i className="fas fa-images"/>
                          <p>Gallery</p>
                      </button>
                   </a>

                   <a href='#contact' onClick={()=>props.handleNavModalClick()}>
                       <button>
                           <i className="fas fa-phone-square"/>
                           <p>Contact</p>
                       </button>
                   </a>

               </div>
           </div>
       </React.Fragment>
    );
};

export default Presenter;