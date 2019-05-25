import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    componentDidMount() {
        const gnbBtn = document.getElementById('gnbBtn');
        const jsHamberger = document.getElementById('jsHamberger');

        let gnbBtnClicked = false;
        let gnbBtnClickable = true;

        const callHamberger = () => {
            if ( jsHamberger.classList.contains('is-active') ) {
                jsHamberger.classList.remove('is-active');
            } else {
                jsHamberger.classList.add('is-active');
            }   
        }
         
        function gnbBtnHandler() {
            if ( gnbBtnClickable ) {
                callHamberger();
                gnbBtnClickable = false;
                const lines = this.getElementsByClassName('gnb-btn-line');

                if ( !gnbBtnClicked ) {
                    gnbBtnClicked = true;
                    for( let i=0; i<lines.length; i++ ) {
                        lines[i].classList.add('cue1');
                        setTimeout( function(){
                            lines[i].classList.add('cue2');
                        }, 500 );
                    }
                    setTimeout( function(){
                        gnbBtnClickable = true;
                    }, 1000 );
                } else {
                    gnbBtnClicked = false;
                    for( let i=0; i<lines.length; i++ ) {
                        lines[i].classList.remove('cue2');
                        setTimeout( function(){
                            lines[i].classList.remove('cue1');
                        }, 500 );
                    }
                    setTimeout( function(){
                        gnbBtnClickable = true;
                    }, 1000 );
                }
            }
        }
        gnbBtn.addEventListener('click', gnbBtnHandler);

    }
    render() {
        return(
            <header>
                <div className="gnb">
                    <div className="gnb-btn" id="gnbBtn">
                        <div className="gnb-btn-lines">
                            <div className="gnb-btn-line line1"></div>
                            <div className="gnb-btn-line line2"></div>
                            <div className="gnb-btn-line line3"></div>
                        </div>
                    </div>
                    <ul className="hamberger-menu" id="jsHamberger">
                        <li><span className="menu-item">WORKS</span></li>
                        <li className="second"><span className="menu-item">ABOUT</span></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;