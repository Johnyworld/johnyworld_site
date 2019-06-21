import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setMouseHover, scrollFadeIn, animInLoading } from '../func/animates';
import { topBtnHandler } from '../func/functions';

import './header.css';

class Header extends Component {
    componentDidMount() {
        // DEFINE
        const headerButtons = document.getElementsByClassName('header-buttons');
        const jsHeader = document.getElementById('jsHeader');
        const jsBtnTop = document.getElementById('jsBtnTop');
        // const jsBtnHome = document.getElementById('jsBtnHome');
        const jsBtnBack = document.getElementById('jsBtnBack');
        const jsHamberger = document.getElementById('jsHamberger');
        const jsBtnGnb = document.getElementById('jsBtnGnb');
        const lines = document.getElementsByClassName('gnb-btn-line');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');

        let showedGnb = false;
        let canClickHamberger = true;
        
        // FUNCTIONS
        const callHamberger = () => {
            if ( jsHamberger.classList.contains('is-active') ) {
                jsHamberger.classList.remove('is-active');
            } else {
                jsHamberger.classList.add('is-active');
            }   
        }
        
        const linesCueAnimation = ( type ) => {
            for( let i=0; i<lines.length; i++ ) {
                if ( type === "add" ) {
                    lines[i].classList.add('cue1');
                    setTimeout( function(){
                        lines[i].classList.add('cue2');
                    }, 500 );
                } else if ( type === "remove" ) {
                    lines[i].classList.remove('cue2');
                    setTimeout( function(){
                        lines[i].classList.remove('cue1');
                    }, 500 );
                }
            }
        }

        // HANDLERS
        const handleBtnGoBack = () => {
            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
            
            setTimeout(()=>{
                this.props.goBack();
            }, 1300);
        }

        const handleBtnGnb = () => {
            if ( canClickHamberger ) {
                callHamberger();
                canClickHamberger = false;
                if ( !showedGnb ) {
                    showedGnb = true;
                    linesCueAnimation('add');
                } else {
                    showedGnb = false;
                    linesCueAnimation('remove');
                }
                setTimeout( function(){
                    canClickHamberger = true;
                }, 500 );
            }
        }

        const showRightToLeft = (element) => {
            element.style.opacity = 0;
            element.animate([
                { opacity: 0, transform: 'translateX(100px)' },
                { opacity: 1, transform: 'translateX(0px)' },
            ], {
                duration: 1500,
                easing: 'cubic-bezier(.33,.78,.41,1)'
            });
            element.style.opacity = 1;
        }

        const loadHeader = () => {
            for( let i=0; i<headerButtons.length; i++ ) {
                if ( !headerButtons[i].classList.contains('is-hidden') ) {
                    headerButtons[i].style.opacity = 0;
                    setTimeout( function() {
                        showRightToLeft(headerButtons[i]);
                    }, 300*i + 1000); 
                }
            } 
        }

        // LISTENER
        jsHeader.addEventListener('mouseleave', () => {
            if ( showedGnb ) { handleBtnGnb() }
        });
        jsBtnTop.addEventListener('click', topBtnHandler );
        // jsBtnHome.addEventListener( 'click', () => {
        //     homBtnHandler( this.props.history );
        // });

        // 뒤로가기 버튼
        jsBtnBack.addEventListener('click', handleBtnGoBack);
        
        window.addEventListener('scroll',  () => {
            let nowScroll = window.scrollY;
            scrollFadeIn(nowScroll, jsBtnTop, window.innerHeight - 200);
        });

        jsBtnGnb.addEventListener('click', handleBtnGnb);

        // RUN
        jsLoading.style.display = "none";
        jsBtnBack.classList.remove('is-hidden');
        jsBtnGnb.classList.remove('is-hidden');
        jsHamberger.classList.remove('is-hidden');
        loadHeader();
        setMouseHover();
    }
    
    render() {
        const hambergers = [];
        if (window.location.pathname !== "/work") { hambergers.push( <li key="toWork" className="f-eng-title"><Link to="/work" className="menu-item" id="jsBtnGnbWork">WORK</Link></li> ); }
        if (window.location.pathname !== "/about") { hambergers.push( <li key="toAbout" className="f-eng-title"><Link to="/about" className="menu-item">ABOUT</Link></li> ); }
        if (window.location.pathname !== "/blog") { hambergers.push( <li key="toBlog" className="f-eng-title"><Link to="/blog" className="menu-item">BLOG</Link></li> ); }

        return(
            <header id="jsHeader">
                {/* <button className="header-buttons button-home" id="jsBtnHome">
                </button> */}
                <button className="header-buttons back-btn" id="jsBtnBack">
                        <div className="arrow"></div>
                </button>
                <button className="header-buttons gnb-btn" id="jsBtnGnb">
                    <div className="gnb-btn-lines">
                        <div className="gnb-btn-line line1"></div>
                        <div className="gnb-btn-line line2"></div>
                        <div className="gnb-btn-line line3"></div>
                    </div>
                </button>
                <ul className="header-buttons hamberger-menu" id="jsHamberger">
                    { hambergers }
                    {/* <li className="f-eng-title"><Link to="/work" className="menu-item" id="jsBtnGnbWork">WORK</Link></li>
                    <li className="f-eng-title second"><Link to="/about" className="menu-item">ABOUT</Link></li>
                    <li className="f-eng-title third"><Link to="/blog" className="menu-item">BLOG</Link></li> */}
                </ul>
                <button className="header-buttons button-top is-hidden" id="jsBtnTop">
                    <div className="icon"></div>
                    <p className="f-subhead f-eng-title">Top</p>
                </button>
            </header>
        )
    }
}

export default Header;