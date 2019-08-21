import React, { Component } from 'react';
import './HamburgerMenu.scss';

export default class HamburgerMenu extends Component {
    componentDidMount() {
        const jsHeader = document.getElementById('jsHeader');
        const jsBtnHamburger = document.getElementById('jsBtnHamburger');
        const lines = jsBtnHamburger.getElementsByClassName('line');
        const jsHamburgerMenu = document.getElementById('jsHamburgerMenu');
        
        let showedGnb = false;
        let canClickHamburger = true;

        const callHamburger = () => {
            if ( jsHamburgerMenu.classList.contains('is-active') ) {
                jsHamburgerMenu.classList.remove('is-active');
            } else {
                jsHamburgerMenu.classList.add('is-active');
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

        const handleBtnGnb = () => {
            if ( canClickHamburger ) {
                callHamburger();
                canClickHamburger = false;
                if ( !showedGnb ) {
                    showedGnb = true;
                    linesCueAnimation('add');
                } else {
                    showedGnb = false;
                    linesCueAnimation('remove');
                }
                setTimeout( function(){
                    canClickHamburger = true;
                }, 500 );
            }
        }

        jsHeader.addEventListener('mouseleave', () => {
            if ( showedGnb ) { handleBtnGnb() }
        });

        jsBtnHamburger.addEventListener('click', handleBtnGnb);
    }

    render() {
        return (
            <>
                <button className="jsAnimButtons hamburger-button" id="jsBtnHamburger">
                    <div className="lines-wrap">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                </button>
                <ul className="jsAnimButtons hamburger-menu" id="jsHamburgerMenu">
                    <li key="toWork" className="f-eng-title"><button className="menu-item" id="jsBtnGnbWork">WORK</button></li>
                    <li key="toAbout" className="f-eng-title"><button className="menu-item" id="jsBtnGnbAbout">ABOUT</button></li>
                    <li key="toBlog" className="f-eng-title"><button className="menu-item" id="jsBtnGnbBlog">BLOG</button></li>
                    <li key="toToy" className="f-eng-title"><button className="menu-item" id="jsBtnGnbToy">TOY-PJ</button></li>
                </ul>
            </>
        )
    }
    
}