import React, { Component } from 'react';
import './HamburgerMenu.scss';

export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.showedGnb = false;
        this.canClickHamburger = true;
    }

    componentDidMount() {
        const jsHeader = document.getElementById('jsHeader');
        this.jsHamburgerMenu = this.refs.jsHamburgerMenu;
        this.jsBtnHamburger = this.refs.jsBtnHamburger;
        this.jsHamburberLines = this.jsBtnHamburger.getElementsByClassName('line');
        
        jsHeader.addEventListener('mouseleave', () => {
            if ( this.showedGnb ) { this.handleBtnGnb() }
        });
    }

    callHamburger = () => {
        if ( this.jsHamburgerMenu.classList.contains('is-active') ) {
            this.jsHamburgerMenu.classList.remove('is-active');
        } else {
            this.jsHamburgerMenu.classList.add('is-active');
        }   
    }

    linesCueAnimation = ( type ) => {
        const {jsHamburberLines} = this;
        for( let i=0; i< jsHamburberLines.length; i++ ) {
            if ( type === "add" ) {
                jsHamburberLines[i].classList.add('cue1');
                setTimeout( function(){
                    jsHamburberLines[i].classList.add('cue2');
                }, 500 );
            } else if ( type === "remove" ) {
                jsHamburberLines[i].classList.remove('cue2');
                setTimeout( function(){
                    jsHamburberLines[i].classList.remove('cue1');
                }, 500 );
            }
        }
    }

    handleBtnGnb = () => {
        const { linesCueAnimation, callHamburger } = this;
        if ( this.canClickHamburger ) {
            callHamburger();
            this.canClickHamburger = false;
            if ( !this.showedGnb ) {
                this.showedGnb = true;
                linesCueAnimation('add');
            } else {
                this.showedGnb = false;
                linesCueAnimation('remove');
            }

            const setCanClick = () => {
                this.canClickHamburger = true;
            }
            setTimeout( setCanClick, 500 );
        }
    }

    render() {
        const {func_moveToRoute} = this.props;
        const {handleBtnGnb} = this;
        const nowpage = window.location.pathname.split('/', 2)[1];
        console.log(nowpage);

        return (
            <>
                <button className="jsAnimButtons hamburger-button" id="jsBtnHamburger" ref="jsBtnHamburger" onClick={handleBtnGnb}>
                    <div className="lines-wrap">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                </button>
                <ul className="jsAnimButtons hamburger-menu" id="jsHamburgerMenu" ref="jsHamburgerMenu">
                    <li key="toWork" className="f-eng-title"><button className={"menu-item"+(nowpage==="work"?' is-disabled':'')} onClick={func_moveToRoute} data-goto="/work">WORK</button></li>
                    <li key="toAbout" className="f-eng-title"><button className={"menu-item"+(nowpage==="about"?' is-disabled':'')} onClick={func_moveToRoute} data-goto="/about">ABOUT</button></li>
                    <li key="toBlog" className="f-eng-title"><button className={"menu-item"+(nowpage==="blog"?' is-disabled':'')} onClick={func_moveToRoute} data-goto="/blog">BLOG</button></li>
                    <li key="toToy" className="f-eng-title"><button className="menu-item" onClick={func_moveToRoute} data-goto="/#study">TOY-PJ</button></li>
                </ul>
            </>
        )
    }
    
}