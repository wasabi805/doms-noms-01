import React from 'react';
import logo from '../00-assets/img/logo.min.png'

import SocialContainer from './social/social-container';
// import NavContainer from '../nav/nav-container';
import NavLinksContainer from './nav-links/nav-link-container'

const Presenter = (props) => {
    console.log(props, 'almost there');
    return (
        <header  className="page-header">
            <div className="logo-area">
                <label className="btn" htmlFor="modal-1"
                       onClick={props.handleNavModalClick}>
                    <i className="fas fa-bars" />
                </label>

                <NavLinksContainer/>

                {/*<div style={{display: 'flex',*/}
                    {/*listStyleType: 'none',*/}
                    {/*fontSize: '2em',*/}
                    {/*padding: '0',*/}
                    {/*background: '#9acd325e',*/}
                    {/*bottom: '0',*/}
                    {/*right:'0',*/}
                    {/*position: 'absolute',*/}
                    {/*transform: 'translate(-50%, -50%), '}}>*/}
                    {/*<a style={{margin :"auto", width: '5em', border: '1px solid #f2f2f2',}}>Home</a>*/}
                    {/*<a style={{margin :"auto", width: '5em' ,border: '1px solid #f2f2f2',}}>Services</a>*/}
                    {/*<a style={{margin :"auto", width: '5em',  border: '1px solid #f2f2f2',}}>Menu</a>*/}
                    {/*<a style={{margin :"auto", width: '5em',  border: '1px solid #f2f2f2',}}>Package</a>*/}
                    {/*<a style={{margin :"auto", width: '5em',  border: '1px solid #f2f2f2',}}>Gallery</a>*/}
                    {/*<a style={{margin :"auto", width: '5em',  border: '1px solid #f2f2f2',}}>Contact</a>*/}
                {/*</div>*/}


                {/*<p id="myBtn" className="menu-button" onClick={props.handleNavModalClick} >*/}
                    {/*<i className="fas fa-bars" />*/}
                {/*</p>*/}

                {/*DOMS NOMS LOGO WuTang*/}
                <img src={logo} alt={''}/>

                <SocialContainer />
            </div>
            {/*<NavContainer />*/}
        </header>
    );
};


export default Presenter;