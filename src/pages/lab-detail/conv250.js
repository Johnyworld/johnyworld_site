import React, { Component } from 'react';
import { conversationArray } from './conv250-data';
import './conv250.css';

class Conv250 extends Component {
    componentDidMount() {

        let canClick = true;
        const convCategory = document.getElementById('conv250-category');
        const convText = document.getElementById('conv250-text');
        const startWrap = document.getElementById('conv250-start');
        const againBtn = document.getElementById('conv-roll-btn');
        const startBtn = document.getElementById('conv-start-btn');

        function rollConvs() {
            return Math.floor(Math.random() * conversationArray.length);
        }

        function fadeOut(ele, ms) {
            let opacity = 1;
            let time = 10 / ms;
            setInterval(frame, 10);
            function frame() {
                if (opacity <= 0) {
                    clearInterval(frame);
                } else {
                    opacity = opacity - time;
                    ele.style.opacity = opacity;
                }
            }
        }

        function gradientIn(value) {
            let string = "";
            const oneByOneIn = (x) => {
                let delay = x * 70;
                setTimeout(function () {
                    string = string + value[x];
                    convText.innerHTML = string;
                    if (x === value.length - 1) {
                        canClick = true;
                    }
                }, delay);
            }
            for (let i = 0; i < value.length; i++) { oneByOneIn(i); }
        }

        function again() {
            if (canClick === true) {
                canClick = false;
                let index = rollConvs();
                let value = conversationArray[index].value;
                console.log(index + ' / ' + conversationArray.length);
                convCategory.innerHTML = 'About ' + conversationArray[index].category;
                gradientIn(value);
            }
        }

        function start() {
            if (canClick === true) {
                fadeOut(startWrap, 500);
                again();
                setTimeout(function () { startWrap.style.display = 'none'; }, 500);
            }
        }

        againBtn.addEventListener('click', again);
        startBtn.addEventListener('click', start);

    }

    render() {
        return (
            <div class="conv250-container"> 
                <div id="conv250-wrap" class="conv250-wrap">
                    <p class="url">conversationstartersworld.com</p>
                    <div class="text-container">
                        <p id="conv250-category">category</p>
                        <p id="conv250-text">" Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
                    </div>
                    <div id="conv-roll-btn" class="button">again</div>
                </div>
                <div id="conv250-start" class="conv250-wrap">
                    <p class="url">conversationstartersworld.com</p>
                    <div class="text-container">
                        <p class="num">250</p>
                        <p class="text">Conversation Starters</p>
                    </div>
                    <div id="conv-start-btn" class="button">start</div>
                </div>
            </div>
        );
    }
}

export default Conv250;
