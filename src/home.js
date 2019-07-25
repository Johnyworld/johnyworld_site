import React, { Component } from 'react';
import LabSlider from './components/partials/lab-slider';
import ToySliderMobile from './components/partials/toy-slider-mobile.js';

import { 
    mouseMoving, 
    setMouseHover, 
    smoothScroll, 
    animOutFade,
    animInLoading,
    setBeforeLoading,
    scrollFloating } from './components/func/animates';
import {
    topBtnHandler } from './components/func/functions';

import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
        }
        this.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    }

    componentDidMount() {
        this._nowLoading();
    }

    _mobileFuncs() {
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsMobileMenu01 = document.getElementById('jsMobileMenu01');
        const jsMobileMenu02 = document.getElementById('jsMobileMenu02');
        const jsMobileMenu03 = document.getElementById('jsMobileMenu03');
        let propsHistory = this.props.history;
        
        const handleBtnGoBack = (btn) => {
            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
            setTimeout(()=>{
                propsHistory.push('/' + btn);
            }, 1300);
        }

        jsMobileMenu01.addEventListener( 'click', handleBtnGoBack.bind(this, 'work'));
        jsMobileMenu02.addEventListener( 'click', handleBtnGoBack.bind(this, 'about'));
        jsMobileMenu03.addEventListener( 'click', handleBtnGoBack.bind(this, 'blog'));
    }

    _animate() {
        // Defines
        const jsMenuTexts = document.getElementById('jsMenuTexts');
        const jsMenuTextItems = jsMenuTexts.getElementsByClassName('item');
        const jsMenuBtnLeft = document.getElementById('jsMenuBtnLeft');
        const jsMenuBtnRight = document.getElementById('jsMenuBtnRight');
        const jsMenuCenter = document.getElementById('jsMenuCenter');
        const jsMenuLeft = document.getElementById('jsMenuLeft');
        const jsMenuRight = document.getElementById('jsMenuRight');
        const jsMenuBgLeft = document.getElementById('jsMenuBgLeft');
        const jsMenuBgRight = document.getElementById('jsMenuBgRight');
        const jsMenuBgLeftChild = document.getElementById('jsMenuBgLeftChild');
        const jsMenuBgRightChild = document.getElementById('jsMenuBgRightChild');
        const jsMenuVerticalLine = document.getElementById('jsMenuVerticalLine');
        const jsCodeLabBtn = document.getElementById('jsCodeLabBtn');
        const homeLaboratory = document.getElementById('home-Laboratory');
        const homeLaboratoryThumbnail = homeLaboratory.getElementsByClassName('image-wrap');
        const jsLabSliderIndex = document.getElementById('jsLabSliderIndex');

        let canWheel = true;
        let sectionGnb = true;
        let propsHistory = this.props.history;

        // FUNCTIONS
        const mainMenuFollowingMouse = (event) => {
            let mouse = {
                x : event.clientX,
                y : event.clientY,
            }
            if ( window.innerWidth > 1024 ) {
            mouseMoving(mouse, jsMenuCenter, 3, 15, true);
            mouseMoving(mouse, jsMenuLeft, 2, 20, true);
            mouseMoving(mouse, jsMenuRight, 2, 20, true);
            mouseMoving(mouse, jsMenuBgLeft, 10, 20, true);
            mouseMoving(mouse, jsMenuBgRight, 10, 20, true);
            }
        }

        const mainMenuFocused = (event) => {
            for (let j = 0; j < jsMenuTextItems.length; j++) {
                if ( jsMenuTextItems[j] !== event.target ) {
                    jsMenuTextItems[j].classList.add('dim');
                }
            }
            event.target.classList.add('focused');
        }

        const mainMenuBlured = (event) => {
            for (let j = 0; j < jsMenuTextItems.length; j++) {
                if ( jsMenuTextItems[j] !== event.target ) {
                    jsMenuTextItems[j].classList.remove('dim');
                }
            }
            event.target.classList.remove('focused');
        }

        const mainMenuStop = () => {
            for (let i = 0; i < jsMenuTextItems.length; i++) {
                jsMenuTextItems[i].style.transform = '';
            }
            jsMenuBgLeft.style.transform = '';
            jsMenuBgRight.style.transform = '';
            window.removeEventListener('mousemove', mainMenuFollowingMouse);
        }

        const mainMenuAddScrollEvent = () => {
            window.addEventListener( 'scroll', function() {
                let nowScroll = window.scrollY;
                scrollFloating(nowScroll, jsMenuCenter, -2);
                scrollFloating(nowScroll, jsMenuLeft, -3);
                scrollFloating(nowScroll, jsMenuRight, -4);
                scrollFloating(nowScroll, jsMenuBgLeft, -8);
                scrollFloating(nowScroll, jsMenuBgRight, -10);
            });
        }

        const mainMenuAddHoverEvent = () => {
            for (let i = 0; i < jsMenuTextItems.length; i++) {
                jsMenuTextItems[i].addEventListener( 'mouseover', mainMenuFocused );
                jsMenuTextItems[i].addEventListener( 'mouseleave', mainMenuBlured );
            }
        }
        
        const mainMenuRemoveHoverEvent = () => {
            for (let i = 0; i < jsMenuTextItems.length; i++) {
                jsMenuTextItems[i].classList.remove('focused', 'dim');
                jsMenuTextItems[i].removeEventListener( 'mouseover', mainMenuFocused );
                jsMenuTextItems[i].removeEventListener( 'mouseleave', mainMenuBlured );
            }
        }

        // HANDLERS
        //// -------------------------------
        const handleMainMenuScrollFloating = () => {
            mainMenuStop();
            mainMenuRemoveHoverEvent();
            mainMenuAddScrollEvent();
            jsMenuBgLeftChild.style.height = '0';
            jsMenuBgRightChild.style.height = '0';
        }

        const codeLabBtnHandler = () => {
            sectionGnb = false;
            handleMainMenuScrollFloating();
            for ( let i=0; i<homeLaboratoryThumbnail.length; i++) {
                homeLaboratoryThumbnail[i].classList.remove('slide-hide');
            }
            jsLabSliderIndex.classList.remove('slide-hide');
            smoothScroll('#home-Laboratory', 2000);
            this.props.history.replace('/#study');
        }

        const handleNotGnbSection = () => {
            if ( this.props.location.hash === '#study' ) {
                sectionGnb = false;
                handleMainMenuScrollFloating();
                window.scrollTo( 0, window.innerHeight );
            }
        }

        const topBtnHandlerAtHome = () => {
            if (window.location.pathname === "/") {
                sectionGnb = true;
                setTimeout( function() {
                    jsMenuBgLeftChild.style.height = '100%';
                    jsMenuBgRightChild.style.height = '100%';
                    mainMenuAddHoverEvent();
                    window.addEventListener('mousemove', mainMenuFollowingMouse);
                }, 1500)
                for ( let i=0; i<homeLaboratoryThumbnail.length; i++) {
                    homeLaboratoryThumbnail[i].classList.add('slide-hide');
                }
                jsLabSliderIndex.classList.add('slide-hide');
                this.props.history.replace('/');
            }
        }
        
        const wheelHandler = (event) => {
            if ( canWheel && window.location.pathname === "/" ) {
                if ( event.deltaY > 0 && sectionGnb ) {
                    canWheel = false;
                    codeLabBtnHandler();
                    setTimeout( function(){ canWheel = true },2500 );
                } else if ( event.deltaY < 0 && !sectionGnb ) {
                    canWheel = false;
                    topBtnHandler();
                    topBtnHandlerAtHome();
                    setTimeout( function(){ canWheel = true },2500 );
                }
            }
        }

        const handleResize = () => {
            if ( window.innerWidth < 1024 ) {
                mainMenuStop();
            } else {
                window.addEventListener( 'mousemove', mainMenuFollowingMouse );
            }
        }

        const handleWheelAtHome = (event) => {
            if ( window.location.pathname === '/') {
                event.preventDefault();
                wheelHandler(event);
            }
        }

        const mainCenterMenuClickHandler = () => {
            canWheel = false;
            mainMenuStop();
            mainMenuRemoveHoverEvent();
            jsMenuLeft.classList.add('is-hidden');
            jsMenuRight.classList.add('is-hidden');
            jsMenuVerticalLine.classList.add('is-hidden');
            jsMenuBgLeftChild.style.height = '0';
            jsMenuBgRightChild.style.height = '0';
            setTimeout( function() { 
                jsMenuTexts.classList.add('aligned'); 
            }, 1000 );
            setTimeout( function() {
                propsHistory.push('/work#home');
            }, 2100);
        }

        const mainLeftMenuClickHandler = () => {
            canWheel = false;
            mainMenuStop();
            mainMenuRemoveHoverEvent();
            jsMenuCenter.classList.add('is-hidden');
            jsMenuRight.classList.add('is-hidden');
            jsMenuVerticalLine.classList.add('is-hidden');
            jsMenuBgLeftChild.classList.add('cue1');
            jsMenuBgRightChild.style.height = '0';
            setTimeout( function() {
                jsMenuBtnLeft.classList.add('aligned'); 
            }, 900);
            setTimeout( function() {
                jsMenuBgLeftChild.classList.add('cue2');
            }, 1000);
            setTimeout( function() {
                jsMenuBgLeftChild.classList.add('cue3');
            }, 1800);
            setTimeout( function() { 
                jsMenuTexts.classList.add('aligned'); 
            }, 2300 );
            setTimeout( function() {
                propsHistory.push('/blog#home');
            }, 3500);
        }

        const mainRightMenuClickHandler = () => {
            canWheel = false;
            mainMenuStop();
            mainMenuRemoveHoverEvent();
            jsMenuLeft.classList.add('is-hidden');
            jsMenuCenter.classList.add('is-hidden');
            jsMenuVerticalLine.classList.add('is-hidden');
            jsMenuBgLeftChild.style.height = '0';
            setTimeout( function() {
                jsMenuBtnRight.classList.add('aligned');
            }, 700);
            setTimeout( function() {
                jsMenuBgRightChild.classList.add('cue1');
            }, 900);
            setTimeout( function() {
                jsMenuTexts.classList.add('aligned'); 
            }, 2000);
            setTimeout( function() {
                jsMenuBgRightChild.classList.add('cue2');
            }, 2100);
            setTimeout( function() {
                propsHistory.push('/about#home');
            }, 3200);
        }

        // EVENT LISTENERS
        window.addEventListener( 'wheel', handleWheelAtHome, { passive: false });
        jsMenuCenter.addEventListener( 'click', mainCenterMenuClickHandler );
        jsMenuLeft.addEventListener( 'click', mainLeftMenuClickHandler );
        jsMenuRight.addEventListener( 'click', mainRightMenuClickHandler );
        jsCodeLabBtn.addEventListener( 'click', codeLabBtnHandler );
        window.addEventListener( 'mousemove', mainMenuFollowingMouse );
        window.addEventListener( 'resize', handleResize );

        //RUN
        mainMenuAddHoverEvent();
        handleNotGnbSection();
        setMouseHover();
        // reactRouteScrollTop();
    }

    _nowLoading() {
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');

        const handleLoaded = () => {
            animOutFade(jsLoading, 1500);
            setTimeout(() => {
                this.setState({
                    loaded: true
                });
                if ( !this.isMobile ) { this._animate();}
                else { this._mobileFuncs(); }
                jsFullScreenWrap01.style.transition = '1.5s';
                jsFullScreenWrap01.style.opacity = '0';
                jsFullScreenWrap02.style.width = '0';
                setTimeout(() => {
                    jsFullScreenWrap01.style.transition = '0s';
                    jsFullScreenWrap01.style.width = '0%';
                    jsFullScreenWrap01.style.opacity = '1';
                    jsLoading.style.display = 'none';
                    jsLoading.style.opacity = '1';
                    // jsFullScreenWrap01.style.transition = '1s';
                }, 1500);
            }, 1000);
        }

        setBeforeLoading(jsFullScreenWrap01, jsFullScreenWrap02, jsLoading);
        handleLoaded();
        
        // window.addEventListener( 'load', handleLoaded.bind(this));
    }

    _renderContent() {
        return (
            <>
                <div className="home-main">
                    <div className="vertical-line" id="jsMenuVerticalLine">
                        <div className="links">
                            <a className="c-gray-dark f-eng f-normal" href="https://www.behance.net/johnykim1" target="blank">Behance</a>
                            <a className="c-gray-dark f-eng f-normal" href="https://github.com/Johnyworld" target="blank">GitHub</a>
                            <a className="c-gray-dark f-eng f-normal" href="https://codepen.io/johnyworld/" target="blank">Codepen</a>
                        </div>
                        <div className="line"></div>
                        <ul>
                            <li>
                                <button className="f-subhead c-wine f-eng-title" id="jsCodeLabBtn">Toy Development</button>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-wrapper" id="jsMenuBgWrap">
                        <div className="item bg left" id="jsMenuBgLeft"><div className="child" id="jsMenuBgLeftChild"></div></div>
                        <div className="item bg right" id="jsMenuBgRight"><div className="child" id="jsMenuBgRightChild"></div></div>
                    </div>
                    <div className="menu-wrapper clear-fix" id="jsMenuTexts">
                        <div className="menu-btn left" id="jsMenuBtnLeft"><button className="f-hugetitle item left" id="jsMenuLeft">BLOG</button></div>
                        <div className="menu-btn center" id="jsMenuBtnCenter"><button className="f-hugetitle item center" id="jsMenuCenter">WORK</button></div>
                        <div className="menu-btn right" id="jsMenuBtnRight"><button className="f-hugetitle item right" id="jsMenuRight">ABOUT</button></div>
                    </div>
                </div>
                <div className="home-section home-Laboratory" id="home-Laboratory">
                    <LabSlider history={this.props.history} />
                </div>
            </>
        )
    }

    _renderMobile() {
        return (
            <>
                <div className="home-mobile-main">
                    <div className="l-wrapper">
                        <ul className="l-row">
                            <li className="l-col l-col-8-12">
                                <button className="f-bigtitle item" id="jsMobileMenu01">WORK</button>
                                <button className="f-bigtitle item" id="jsMobileMenu02">ABOUT</button>
                                <button className="f-bigtitle item" id="jsMobileMenu03">BLOG</button>
                            </li>
                            <li className="l-col l-col-4-12">
                                <a className="link-item c-gray-dark f-eng f-normal" href="https://www.behance.net/johnykim1" target="blank">Behance</a>
                                <a className="link-item c-gray-dark f-eng f-normal" href="https://github.com/Johnyworld" target="blank">GitHub</a>
                                <a className="link-item c-gray-dark f-eng f-normal" href="https://codepen.io/johnyworld/" target="blank">Codepen</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-mobile-toy-wrap">
                    <div className="l-wrapper">
                        <h2 className="f-title f-eng-title c-blue-bright">TOY DEVELOPMENT</h2>
                    </div>
                    <ToySliderMobile history={this.props.history} />
                </div>
            </>
        )
    }

    render() {
        if ( this.isMobile ) {
            return(
                <content className="home-wrapper">
                    {this.state.loaded ? this._renderMobile() : 'Loading' }
                </content>
            )
        } else {
            return(
                <content className="home-wrapper">
                    {this.state.loaded ? this._renderContent() : 'Loading' }
                </content>
            )
        }
    }
}

export default Home;