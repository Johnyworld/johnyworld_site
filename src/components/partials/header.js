import React, { Component } from 'react';
import { 
    setMouseHover, 
    scrollFadeIn, 
    loadHeader } from '../../Funcs/animates';

import HamburgerMenu from '../buttons/HamburgerMenu';
import GoBack from '../buttons/GoBack';
import GoTop from '../buttons/GoTop';

import './Header.scss';

class Header extends Component {
    componentDidMount() {
        const headerButtons = document.getElementsByClassName('jsAnimButtons');
        const jsBtnTop = document.getElementById('jsBtnTop');
        
        window.addEventListener('scroll',  () => {
            let nowScroll = window.scrollY;
            scrollFadeIn(nowScroll, jsBtnTop, window.innerHeight - 200);
        });

        loadHeader(headerButtons);
        setMouseHover();
    }

    render() {
        return(
            <header id="jsHeader">
                <GoBack goBack={this.props.goBack} />
                <HamburgerMenu func_moveToRoute={this.props.func_moveToRoute}/>
                <GoTop />
            </header>
        )
    }
}

export default Header;