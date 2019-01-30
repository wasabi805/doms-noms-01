import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer       from '../services/services-container';
import FoodMenu                 from '../food-menu/food-menu-container';
import GalleryContainer         from '../gallery/gallery-container';
import AboutUsContainer     from '../about-us/about-us-container';
import ContactContainer     from '../contact/contact-contianer';
import PackagesContainer from '../packages/packages-container';
import NavModalContainer from '../nav-modal/nav-modal-container'




class Presenter extends Component{
    constructor(props){
        super(props);
        this.state={
            //checks checkbox to display navModal
            trueOrFalse : false,
            blur_page: ''
        }
    }


    handleBtnAnimation = (e)=>{

    };


    handleNavModalClick = ()=>{

        let {trueOrFalse, blur_page} = this.state

        if(trueOrFalse === false && blur_page === ''){
            this.setState({
                trueOrFalse: !this.state.trueOrFalse,
                blur_page: 'blur(8px)'
            })
        }

        if(trueOrFalse === true && blur_page === 'blur(8px)'){
            this.setState({
                trueOrFalse: !this.state.trueOrFalse,
                blur_page: ''
            })
        }

    };



    render(){
        return (
            <React.Fragment>

                <div className="page">
                    <HeaderContainer handleNavModalClick={this.handleNavModalClick} modalDisplay={this.state.modalDisplay}/>
                    <div style={{filter:`${this.state.blur_page}`}}>
                        <HeroContainer/>
                        <StoryContainer/>
                        <ServicesContainer/>
                        <FoodMenu/>
                        <PackagesContainer/>

                        <ScrollableAnchor id={'gallery'}>
                            <GalleryContainer/>
                        </ScrollableAnchor>

                        <AboutUsContainer/>
                        <ContactContainer/>
                    </div>
                </div>
                <NavModalContainer trueOrFalse={this.state.trueOrFalse} handleNavModalClick={this.handleNavModalClick}/>
            </React.Fragment>
        );
    }
}

export default Presenter;