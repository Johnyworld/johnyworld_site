import React, { Component } from 'react';
import './moon.css';
import CanvasStarfire from '../../func/canvas-starfire';

import { rotateInfinity, scrollScale, scrollFloating, scrollFadeOut, smoothScroll } from '../../func/animates';

class Moon extends Component {
    componentDidMount() {
        const mountainFirst = document.getElementById('jsMtFirst');
        const mountainSecond = document.getElementById('jsMtSecond');
        const mountainThird = document.getElementById('jsMtThird');
        const mainText = document.getElementById('jsMaintext');
        const moon = document.getElementById('jsMoon');
        const jsBtnGnbWork = document.getElementById('jsBtnGnbWork');
        const starry = document.getElementById('jsStarry');
        const jsIconWheel = document.getElementById('jsIconWheel');
        // const homeLiboratory = document.getElementById('home-Laboratory');
        // const homeLiboratoryTextbox = homeLiboratory.getElementsByClassName('textbox')[0];
        
        rotateInfinity(starry);

        const clickedWork = () => {
            smoothScroll('#home-Work', 2000);
            setTimeout(() => {
                let clean_uri = window.location.href.split('#')[0];
                window.history.replaceState({}, document.title, clean_uri);
            }, 50);
        }

        if (window.location.hash === "#work") {
            clickedWork();
        }

        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            scrollFloating(nowScroll, mountainFirst, 3);
            scrollFloating(nowScroll, mountainSecond, 2);
            scrollFloating(nowScroll, mountainThird, 1.5);
            scrollFloating(nowScroll, mainText, -3);
            scrollFloating(nowScroll, moon, -15);
            scrollScale(nowScroll, mountainFirst, 100);
            scrollFadeOut(nowScroll, jsIconWheel, 50);
            scrollFadeOut(nowScroll, jsIconWheel, 50);
            // scrollFadeOut(nowScroll, homeLiboratoryTextbox, getAbsoluteTop(homeLiboratoryTextbox) - 200);
        });

        jsIconWheel.addEventListener('click', function () {
            smoothScroll('#home-Work', 3000);
        });

        jsBtnGnbWork.addEventListener('click', function () {
            if (window.location.pathname === '/') {
                clickedWork();
            }
        });

        CanvasStarfire();
    }

    render() {
        return (
            <div className="moon-wrapper">
                <div className="moon-main">
                    <div className="layer moon" id="jsMoon">
                        <div className="l-wrapper">
                            <p className="greeting">님, 찾아주셔서 감사합니다.</p>
                        </div>
                    </div>
                    <div className="layer starry" id="jsStarry"></div>
                    <canvas id="canvas-starfire"></canvas>
                    <div className="layer mt-third" id="jsMtThird"></div>
                    <div className="layer mt-second" id="jsMtSecond"></div>
                    <h1 className="maintext" id="jsMaintext">PLANET</h1>
                    <div className="layer mt-first" id="jsMtFirst"></div>
                </div>
            </div>
        )
    }
}

export default Moon;