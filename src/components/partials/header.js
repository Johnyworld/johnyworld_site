import React, { Component } from 'react';
import { setMouseHover, scrollFadeIn } from '../../Funcs/animates';
import HamburgerMenu from '../buttons/HamburgerMenu';
import GoBack from '../buttons/GoBack';
import GoTop from '../buttons/GoTop';
import './Header.scss';

class Header extends Component {
    componentDidMount() {
        const { anim_headerIn } = this.props;
        const jsBtnTop = document.getElementById('jsBtnTop');
        
        window.addEventListener('scroll',  () => {
            let nowScroll = window.scrollY;
            scrollFadeIn(nowScroll, jsBtnTop, window.innerHeight - 200);
        });

        anim_headerIn();
        setMouseHover();
    }

    render() {
        return(
            <header id="jsHeader">
                <GoBack func_goBack={this.props.func_goBack} />
                <HamburgerMenu func_moveToRoute={this.props.func_moveToRoute}/>
                <GoTop func_goTop={this.props.func_goTop} />
            </header>
        )
    }
}

export default Header;