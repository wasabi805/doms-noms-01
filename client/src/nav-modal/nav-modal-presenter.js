import React from 'react';


import { HashLink as Link } from 'react-router-hash-link';
import { configureAnchors } from 'react-scrollable-anchor'

// btnAnimate
const Presenter = (props) => {
    configureAnchors({offset: -40, scrollDuration: 150})
    return (
       <div className='navmodal-presenter'>
           <input className="modal-state" id="modal-1" type="checkbox" checked={props.trueOrFalse} />

           <div className="modal">

               <label className="modal__bg" htmlFor="modal-1" onClick={props.handleNavModalClick}/>
               <div className="modal__inner">
                   <label className="modal__close" htmlFor="modal-1"/>

                   <a href='#home' onClick={()=>props.handleNavModalClick()}>
                       <button ><i className="fas fa-home"/>Home</button>
                   </a>

                   <a href='#services' onClick={()=>props.handleNavModalClick()}>
                       <button><i className="fas fa-utensils"/>Services</button>
                   </a>

                   <a href='#food-menu' onClick={()=>props.handleNavModalClick()}>
                       <button><i className="fas fa-book-open"/>Menu</button>
                   </a>

                   <button><i className="fas fa-gift"/>Packages</button>
                   <a href='#gallery' onClick={()=>props.handleNavModalClick()}>
                      <button> <i className="fas fa-images"/>Gallery</button>
                   </a>

                   <a href='#contact' onClick={()=>props.handleNavModalClick()}>
                       <button><i className="fas fa-phone-square"/>Contact</button>
                   </a>

               </div>
           </div>

       </div>
    );
};

export default Presenter;