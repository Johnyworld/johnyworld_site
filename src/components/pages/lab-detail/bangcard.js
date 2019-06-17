import React, { Component } from 'react';
import './bangcard.css';

class BangCard extends Component {
    componentDidMount() {
        const shapesArr = ['heart', 'club', 'spade', 'diamond'];
        const numberArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

        let canClick = true;

        const shape = document.getElementById('shape');
        const number = document.getElementById('number');
        const loading = document.getElementById('loading');
        const loadings = loading.children;
        const bangBtn = document.getElementById('bang-roll-button');
        const startCover = document.getElementById('cover');
        const startBtn = document.getElementById('bang-start-button');


        function rollCard() {
            let resultShape = Math.floor(Math.random() * shapesArr.length);
            let resultNumber = Math.floor(Math.random() * numberArr.length);
            shape.className = ' ';
            shape.classList.add(shapesArr[resultShape]);
            number.innerHTML = numberArr[resultNumber];
        }

        function fadeOut(ele, ms) {
            let opacity = 1;
            let time = 10 / ms;
            let animate = setInterval(frame, 10);
            function frame() {
                if (opacity <= 0) {
                    clearInterval(animate);
                } else {
                    opacity = opacity - time;
                    ele.style.opacity = opacity;
                }
            }
        }

        function fadeIn(ele, ms) {
            let opacity = 0;
            let time = 10 / ms;
            let animate = setInterval(frame, 10);
            function frame() {
                if (opacity >= 1) {
                    clearInterval(animate);
                } else {
                    opacity = opacity + time;
                    ele.style.opacity = opacity;
                }
            }
        }

        function loadingAnimate(ele) {
            for (let i = 0; i < ele.length; i++) {
                (function (x) {
                    let delayIn = 500 * x;
                    let delayOut = 1300 + x * 200;
                    setTimeout(function () {
                        fadeIn(ele[x], 500);
                    }, delayIn);
                    setTimeout(function () {
                        fadeOut(ele[x], 500);
                    }, delayOut);
                })(i);
            }
        }

        function rollAnimation(isStart) {
            if (isStart !== 'start') {
                setTimeout(function () { fadeOut(shape, 500); }, 0);
                setTimeout(function () { fadeOut(number, 500); }, 0);
            }
            setTimeout(function () { rollCard(); }, 1000);
            setTimeout(function () { loadingAnimate(loadings); }, 500);
            setTimeout(function () { fadeIn(shape, 500); }, 2500);
            setTimeout(function () { fadeIn(number, 500); }, 2500);
            setTimeout(function () { canClick = true; }, 3000);
        }

        function reDraw() {
            if (canClick === true) {
                canClick = false;
                rollAnimation();
            }
        }

        function startDraw() {
            if (canClick === true) {
                canClick = false;
                fadeOut(startCover, 700);
                setTimeout(function () { startCover.style.display = 'none'; }, 700);
                rollAnimation('start');
            }
        }

        startBtn.addEventListener('click', startDraw);
        bangBtn.addEventListener('click', reDraw);
    }

    render() {
        return (
            <div className="bang-wrap lab-center">
                <div className="card-wrap">
                    <div className="settings"></div>
                    <div className="main">
                        <div id="shape"></div>
                        <div id="number">A</div>
                    </div>
                    <div id="bang-roll-button" className="bang-btn">다시하기</div>
                    <ul id="loading">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div id="cover">
                        <div className="text-wrap">
                            <p className="cover-bang">BANG!</p>
                            <p className="cover-draw-eng">"Draw!"</p>
                            <p className="cover-draw">카드 펼치기 단계</p>
                        </div>
                        <div id="bang-start-button" className="bang-btn">시작하기</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BangCard;
