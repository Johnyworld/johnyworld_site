import React, { Component } from 'react';
import './lab-slider.css';

class LabSlider extends Component {
    componentWillMount() {
        this.laboratories = [
            {
                id: "03001",
                title: "Super Mario Jump!",
                comment: "JQuery 연습",
                desc: [
                    "JQuery를 처음 배우고 나서",
                    "키보드에 반응하는 무언가를 만들어보고 싶었고",
                    "첫 시도로 만들어본 연습작.",
                ],
                technics: [ "HTML", "CSS", "JQuery" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2017. 12"
            },
            {
                id: "03002",
                title: "Collision Test I",
                comment: "HTML 캔버스 연습",
                desc: [
                    "Canvas를 이용하면",
                    "재밌는것들을 많이 만들 수 있겠다고 생각하여",
                    "Javascript와 Canvas를 이해하기 위하여",
                    "코드를 따라 치며 연습했던 연습작.",
                ],
                technics: [ "Javascript", "ES6", "Canvas" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2018. 05"
            },
            {
                id: "03003",
                title: "Collision Test II",
                comment: "HTML 캔버스 연습",
                desc: [
                    "Canvas를 이용하면",
                    "재밌는것들을 많이 만들 수 있겠다고 생각하여",
                    "Javascript와 Canvas를 이해하기 위하여", 
                    "코드를 따라 치며 연습했던 연습작.",
                ],
                technics: [ "Javascript", "ES6", "Canvas" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2018. 05"
            },
            {
                id: "03004",
                title: "Supermario Canvas",
                comment: "슈퍼마리오 게임 만들기 연습",
                desc: [
                    "모던 자바스크립트(ES6)에 익숙해지기 위해",
                    "코드를 따라 치며 연습했던 연습작.",
                    "Promise, map, forEach, async, await등을 이해하는데",
                    "도움이 되었습니다.",
                ],
                technics: [ "Javascript", "ES6", "Canvas" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2019. 03",
            },
            {
                id: "03005",
                title: "RPG MOVING",
                comment: "RPG 게임 만들기 연습",
                desc: [
                    "위의 슈퍼마리오를 만들어 본 다음, 혼자서 얼마나 할 수 있을지 궁금하여",
                    "MDN문서와 Stack flow를 참고하면서",
                    "바닐라 자바스크립트만을 이용해 직접 만들어본 연습작.",
                    "이때는 일부러 모던자바스크립트는 사용하지 않았습니다.",
                    "자바스크립트와 친해지는데에 포커스를 맞추었습니다.",
                ],
                technics: [ "Javascript", "ES5", "Canvas" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2019. 04"
            },
            {
                id: "03006",
                title: "WETUBE!",
                comment: "유튜브 따라하기 코딩.",
                desc: [
                    "NodeJS와 친해지기 위해 수강했던 강의의 수강작품.", 
                    "유튜브 클론 코딩.",
                ],
                technics: [ "Javascript", "NodeJS", "Express", "MongoDB", "Webpack", "Github", "AWS S3" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2019. 04"
            },
            {
                id: "03007",
                title: "Prismagram",
                comment: "인스타그램 따라하기 코딩.",
                desc: [
                    "React와 친해지기 위해 수강했던 강의의 수강작품.", 
                    "인스타그램 클론 코딩.",
                ],
                technics: [ "Javascript", "React", "NodeJS", "React Native", "Prisma", "GraphQL" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2019. now"
            }
        ];
    }

    componentDidMount() {
        const sliderItems = document.getElementsByClassName('slider-item');
        sliderItems[0].classList.add('selected');
    }

    render() {
        function pad(n, width) {
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
        }
        return(
            <div className="lab-slider-wrapper">
                <ul className="slider">
                    { this.laboratories.map((item, key) => {
                        console.log(item)
                        return(
                            <li className="slider-item" key={item.id}>
                                <div className="slider-inner">
                                    <div className="image-wrap"><div className="thumbnail"></div></div>
                                    <div className="text-wrap">
                                        <p className="index c-blue-bright">{ pad(key+1, 2) }<span> / { pad(this.laboratories.length, 2) }</span></p>
                                        <div className="title-wrap">    
                                            <h2 className="c-blue-bright">{item.title}</h2>
                                            <a href={item.href} className="btn-more"><div className="bg"></div><p className="txt">보러가기</p></a>
                                            <p className="comment c-blue-dark">{item.comment}</p>
                                        </div>
                                        <div className="f-normal c-wine-dark">{ item.desc.map((desc, key) => (<p key={`desc${key}`}>{desc}</p>))}</div>
                                        <p className="f-normal c-blue-dark">{item.date}</p>
                                        <div className="f-normal c-blue-dark">{ item.technics.map((desc, key) => (<span key={`desc${key}`}>{desc} <span className="divide">/</span></span>))}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>            
        )
    }
}

export default LabSlider;