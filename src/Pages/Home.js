import React, { Component } from 'react';
import ToySlider from '../Components/partials/ToySlider';
import ToySliderMobile from '../Components/partials/ToySliderMobile';

import { 
    mouseMoving, 
    setMouseHover, 
    smoothScroll,
    animInLoading,
    setBeforeLoading,
    animOutLoadingFade,
    scrollFloating } from '../Funcs/animates';
import {
    cbTimeout, topBtnHandler } from '../Funcs/functions';

import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            history : this.props.history,
            isMobile : navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
            mainMenu : [ "work", "blog", "about" ],
            outLinks : [
                { title: "Behance", url: "https://www.behance.net/johnykim1"},
                { title: "GitHub", url: "https://github.com/Johnyworld"},
                { title: "Codepen", url: "https://codepen.io/johnyworld/"}
            ]
        }
        this.canWheel = true;
        this.sectionGnb = true;
    }
    
    componentDidMount() {
        this._nowLoading();        
    }

    anim_mainmenuStop = () => {
        const { jsMenuTextItems, jsMenuBgLeft, jsMenuBgRight } = this;
        for (let i = 0; i < jsMenuTextItems.length; i++) {
            jsMenuTextItems[i].style.transform = '';
        }
        jsMenuBgLeft.style.transform = '';
        jsMenuBgRight.style.transform = '';
        window.removeEventListener('mousemove', this.hndl_mainMenuFollowingMouse);
    }

    anim_mainmenuFocused = (event) => {
        const { jsMenuTextItems } = this;

        for (let j = 0; j < jsMenuTextItems.length; j++) {
            if ( jsMenuTextItems[j] !== event.target ) {
                jsMenuTextItems[j].classList.add('dim');
            }
        }
        event.target.classList.add('focused');
    }

    anim_mainmenuBlured = (event) => {
        const { jsMenuTextItems } = this;
        for (let j = 0; j < jsMenuTextItems.length; j++) {
            if ( jsMenuTextItems[j] !== event.target ) {
                jsMenuTextItems[j].classList.remove('dim');
            }
        }
        event.target.classList.remove('focused');
    }

    hndl_mainMenuFollowingMouse = (event) => {
        const { jsBtnLeft, 
            jsBtnCenter, 
            jsBtnRight, 
            jsMenuBgLeft, 
            jsMenuBgRight,
            jsGotoToyProject } = this;
        let mouse = {
            x : event.clientX,
            y : event.clientY,
        }
        if ( window.innerWidth > 1024 ) {
        mouseMoving(mouse, jsBtnCenter, 3, 15, true);
        mouseMoving(mouse, jsBtnLeft, 2, 20, true);
        mouseMoving(mouse, jsBtnRight, 2, 20, true);
        mouseMoving(mouse, jsMenuBgLeft, 10, 20, true);
        mouseMoving(mouse, jsMenuBgRight, 10, 20, true);
        mouseMoving(mouse, jsGotoToyProject, 20, 12, true);
        }
    }

    hndl_mainmenuRemoveHover = () => {
        const { jsMenuTextItems } = this;
        for (let i = 0; i < jsMenuTextItems.length; i++) {
            jsMenuTextItems[i].classList.remove('focused', 'dim');
            jsMenuTextItems[i].removeEventListener( 'mouseover', this.anim_mainmenuFocused );
            jsMenuTextItems[i].removeEventListener( 'mouseleave', this.anim_mainmenuBlured );
        }
    }

    hndl_mainmenuAddHover = () => {
        const { jsMenuTextItems } = this;
        for (let i = 0; i < jsMenuTextItems.length; i++) {
            jsMenuTextItems[i].addEventListener( 'mouseover', this.anim_mainmenuFocused );
            jsMenuTextItems[i].addEventListener( 'mouseleave', this.anim_mainmenuBlured );
        }
    }

    hndl_mainmenuScroll = () => {
        const { jsMenuBgLeftChild, jsMenuBgRightChild } = this;
        this.anim_mainmenuStop();
        this.hndl_mainmenuRemoveHover();
        this.hndl_mainmenu_addScrollEvent();
        jsMenuBgLeftChild.style.height = '0';
        jsMenuBgRightChild.style.height = '0';
    }

    hndl_gotoSlider = () => {
        const { 
            jsLabSliderIndex,
            homeToySliderThumbnails: thumbnails } = this;
        this.sectionGnb = false;
        this.hndl_mainmenuScroll();
        for ( let i=0; i< thumbnails.length; i++) {
            thumbnails[i].classList.remove('slide-hide');
        }
        jsLabSliderIndex.classList.remove('slide-hide');
        smoothScroll('#homeToySlider', 2000);
        this.props.history.replace('/#study');
    }

    hndl_mainmenu_addScrollEvent = () => {
        const { jsBtnLeft, jsBtnCenter, jsBtnRight, jsMenuBgLeft, jsMenuBgRight } = this;
        window.addEventListener( 'scroll', function() {
            let nowScroll = window.scrollY;
            scrollFloating(nowScroll, jsBtnCenter, -2);
            scrollFloating(nowScroll, jsBtnLeft, -3);
            scrollFloating(nowScroll, jsBtnRight, -4);
            scrollFloating(nowScroll, jsMenuBgLeft, -8);
            scrollFloating(nowScroll, jsMenuBgRight, -10);
        });
    }

    hndl_isSliderSection = () => {
        if ( this.props.location.hash === '#study' ) {
            this.sectionGnb = false;
            this.hndl_mainmenuScroll();
            window.scrollTo( 0, window.innerHeight );
        }
    }

    hndl_gotoTop_home = () => {
        const { 
            jsLabSliderIndex,
            jsMenuBgLeftChild, 
            jsMenuBgRightChild,
            homeToySliderThumbnails: thumbnails } = this;
        if (window.location.pathname === "/") {
            this.sectionGnb = true;
            const hndl_mainmenuAddHoverHandle = ()=> {
                jsMenuBgLeftChild.style.height = '100%';
                jsMenuBgRightChild.style.height = '100%';
                this.hndl_mainmenuAddHover();
                window.addEventListener('mousemove', this.hndl_mainMenuFollowingMouse);
            }
            setTimeout( hndl_mainmenuAddHoverHandle, 1500)
            for ( let i=0; i< thumbnails.length; i++) {
                thumbnails[i].classList.add('slide-hide');
            }
            jsLabSliderIndex.classList.add('slide-hide');
            this.props.history.replace('/');
        }
    }
    
    func_wheelEvents = (event) => {
        let {canWheel} = this;

        if ( canWheel && window.location.pathname === "/" ) {
            if ( event.deltaY > 0 && this.sectionGnb ) {
                canWheel = false;
                this.hndl_gotoSlider();
                setTimeout( function(){ canWheel = true },2500 );
            } else if ( event.deltaY < 0 && !this.sectionGnb ) {
                canWheel = false;
                topBtnHandler();
                this.hndl_gotoTop_home();
                setTimeout( function(){ canWheel = true },2500 );
            }
        }
    }

    hndl_resize = () => {
        if ( window.innerWidth < 1024 ) {
            this.anim_mainmenuStop();
        } else {
            window.addEventListener( 'mousemove', this.hndl_mainMenuFollowingMouse );
        }
    }

    hndl_mainCenter = async() => {
        const { 
            jsMainmenu, 
            jsBtnLeft, 
            jsBtnRight, 
            jsMenuBgLeftChild, 
            jsMenuBgRightChild, 
            jsMenuVerticalLine } = this;
        const { history } = this.state;

        this.anim_mainmenuStop();
        this.hndl_mainmenuRemoveHover();
        jsBtnLeft.classList.add('is-hidden');
        jsBtnRight.classList.add('is-hidden');
        jsMenuVerticalLine.classList.add('is-hidden');
        jsMenuBgLeftChild.style.height = '0';
        jsMenuBgRightChild.style.height = '0';
        await cbTimeout( 1000, ()=> jsMainmenu.classList.add('aligned'));
        await cbTimeout( 1100, ()=> history.push('/work#home'));
    }

    hndl_mainLeft = async() => {
        const { 
            jsMainmenu, 
            jsLeft, 
            jsBtnCenter, 
            jsBtnRight, 
            jsMenuBgLeftChild, 
            jsMenuBgRightChild,
            jsMenuVerticalLine } = this;
        const {history} = this.state;
        this.canWheel = false;
        this.anim_mainmenuStop();
        this.hndl_mainmenuRemoveHover();
        jsBtnCenter.classList.add('is-hidden');
        jsBtnRight.classList.add('is-hidden');
        jsMenuVerticalLine.classList.add('is-hidden');
        jsMenuBgLeftChild.classList.add('cue1');
        jsMenuBgRightChild.style.height = '0';
        await cbTimeout( 900, ()=> jsLeft.classList.add('aligned') );
        await cbTimeout( 100, ()=> jsMenuBgLeftChild.classList.add('cue2'));
        await cbTimeout( 800, ()=> jsMenuBgLeftChild.classList.add('cue3'));
        await cbTimeout( 600, ()=> jsMainmenu.classList.add('aligned'));
        await cbTimeout( 1200, ()=> history.push('/blog#home'));
    }

    hndl_mainRight = async() => {
        const { 
            jsMainmenu, 
            jsRight, 
            jsBtnCenter, 
            jsBtnLeft, 
            jsMenuBgLeftChild, 
            jsMenuBgRightChild,
            jsMenuVerticalLine } = this;
        const {history} = this.state;
        this.canWheel = false;
        this.anim_mainmenuStop();
        this.hndl_mainmenuRemoveHover();
        jsBtnLeft.classList.add('is-hidden');
        jsBtnCenter.classList.add('is-hidden');
        jsMenuVerticalLine.classList.add('is-hidden');
        jsMenuBgLeftChild.style.height = '0';
        await cbTimeout( 700, ()=> jsRight.classList.add('aligned'));
        await cbTimeout( 200,()=> jsMenuBgRightChild.classList.add('cue1'));
        await cbTimeout( 1100,()=> jsMainmenu.classList.add('aligned'));
        await cbTimeout( 100,()=> jsMenuBgRightChild.classList.add('cue2'));
        await cbTimeout( 1100,()=> history.push('/about#home'));
    }

    hndl_wheelEvents = (event) => {
        if ( window.location.pathname === '/') {
            event.preventDefault();
            this.func_wheelEvents(event);
        }
    }

    _mobileGoToPage = (event) => {
        const href = event.currentTarget.dataset.goto;
        const { history } = this.state;
        animInLoading();
        setTimeout(()=>{
            history.push(href);
        }, 1300);
    }

    _nowLoading() {
        const { isMobile } = this.state;

        setBeforeLoading();
        animOutLoadingFade(isMobile);

        setTimeout(() => {
            this.setState({ loaded: true });
            if ( !isMobile ) { this._componentDidLoading();}
        }, 1000);
    }

    _componentDidLoading() {
        this.jsMainmenu = this.refs.jsMainmenu;
        this.jsMenuTextItems = this.jsMainmenu.getElementsByClassName('item');
        this.jsLeft = this.refs.jsLeft;
        this.jsCenter = this.refs.jsCenter;
        this.jsRight = this.refs.jsRight;
        this.jsBtnLeft = this.refs.jsBtnLeft;
        this.jsBtnCenter = this.refs.jsBtnCenter;
        this.jsBtnRight = this.refs.jsBtnRight;
        this.jsMenuBgLeft = this.refs.jsMenuBgLeft;
        this.jsMenuBgRight = this.refs.jsMenuBgRight;
        this.jsMenuBgLeftChild = this.refs.jsMenuBgLeftChild;
        this.jsMenuBgRightChild = this.refs.jsMenuBgRightChild;
        this.jsMenuVerticalLine = this.refs.jsMenuVerticalLine;
        this.jsGotoToyProject = this.refs.jsGotoToyProject;
        this.homeToySlider = this.refs.homeToySlider;
        this.homeToySliderThumbnails = this.homeToySlider.getElementsByClassName('image-wrap');
        this.jsLabSliderIndex = this.refs.ToySlider.jsLabSliderIndex;

        // EVENT LISTENERS
        window.addEventListener( 'wheel', this.hndl_wheelEvents, { passive: false });
        window.addEventListener( 'mousemove', this.hndl_mainMenuFollowingMouse );
        window.addEventListener( 'resize', this.hndl_resize );

        //RUN
        this.hndl_mainmenuAddHover();
        this.hndl_isSliderSection();
        setMouseHover();
    }

    componentWillUnmount() {
        window.removeEventListener( 'wheel', this.hndl_wheelEvents, { passive: false });
        window.removeEventListener( 'mousemove', this.hndl_mainMenuFollowingMouse );
        window.removeEventListener( 'resize', this.hndl_resize );
    }

    _renderContent() {
        const { outLinks, mainMenu } = this.state;
        return (
            <>
                <div className="home-main">
                    <div className="vertical-line" ref="jsMenuVerticalLine">
                        <div className="links">
                            { outLinks.map((item, key) => {
                                return (
                                    <a className="link-item c-gray-dark f-eng f-normal" href={item.url} target="blank" key={`outlinks-${key}`}>{item.title}</a>
                                )
                            })}
                        </div>
                        <div className="line"></div>
                        <div className="bottom" ref="jsGotoToyProject">
                            <button className="view-toy-btn f-subhead f-eng-title" id="jsCodeLabBtn" onClick={this.hndl_gotoSlider}>TOY PROJECT</button>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="item bg left" ref="jsMenuBgLeft">
                            <div className="child" ref="jsMenuBgLeftChild" />
                        </div>
                        <div className="item bg right" ref="jsMenuBgRight">
                            <div className="child" ref="jsMenuBgRightChild" />
                        </div>
                    </div>
                    <nav className="menu-wrapper clear-fix" ref="jsMainmenu">
                        <div className="menu-btn left" ref="jsLeft">
                            <button className="f-hugetitle item left" ref="jsBtnLeft" onClick={this.hndl_mainLeft}>{mainMenu[1]}</button>
                        </div>
                        <div className="menu-btn center" ref="jsCenter">
                            <button className="f-hugetitle item center" ref="jsBtnCenter" onClick={this.hndl_mainCenter}>{mainMenu[0]}</button>
                        </div>
                        <div className="menu-btn right" ref="jsRight">
                            <button className="f-hugetitle item right" ref="jsBtnRight" onClick={this.hndl_mainRight}>{mainMenu[2]}</button>
                        </div>
                    </nav>
                </div>
                <div className="home-toyslider" id="homeToySlider" ref="homeToySlider">
                    <ToySlider history={this.props.history} ref="ToySlider" />
                </div>
            </>
        )
    }

    _renderMobile() {
        const { outLinks, mainMenu } = this.state;
        return (
            <>
                <div className="home-mobile-main">
                    <div className="l-wrapper">
                        <ul className="l-row">
                            <li className="l-col l-col-8-12">
                                { mainMenu.map((item, key)=>{
                                    return <button className="f-bigtitle item" id={`jsMobileMenu0${key+1}`} onClick={this._mobileGoToPage} data-goto={'/'+item} key={item}>{item}</button>
                                })}
                            </li>
                            <li className="l-col l-col-4-12">
                                { outLinks.map((item, key) => {
                                    return (
                                        <a className="link-item c-gray-dark f-eng f-normal" href={item.url} target="blank" key={`outlinks-${key}`}>{item.title}</a>
                                    )
                                })}
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
        const { isMobile } = this.state;
        if ( isMobile ) {
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