import React, { Component } from 'react';
import Form from '../components/form';
import HomeSectionTextBox from '../components/home-section';
import IconWheelBtn from '../components/icon-wheel-btn';
import HomeSectionContent from '../components/home-section-content';

import Animate from '../js/animate';
import CanvasStarfire from '../js/canvas-starfire';

import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);      
        this.homeTextbox = [
            { 
                title: "Javascript", 
                strong: "재밌는 것들을 만들고싶은 호기심.",
                desc: [
                    "프론트엔드, 백엔드는 물론이고 인터렉티브웹. 그리고 아래와 같은 게임도요."
                ]
            },
            { 
                title: "Laboratory", 
                strong: "흥미로운 것들, 유용한 코드, 다양한 시도.",
                desc: ["자바스크립트를 독학하면서 만들었던 여러가지 습작들을 공개합니다."]
            },
            { 
                title: "Works", 
                strong: "고객을 위한 하나의 생각들.",
                desc: ["근무했던 회사에서, 또는 개인적으로 고객을 위해 일했던 작업물들입니다."]
            },
            { 
                title: "Portfolio History", 
                strong: "평범하지 않고자 했던 몸부림.",
                desc: ["그동안 제작했던 포트폴리오들을 공개합니다."]
            }
        ];
    }

    componentDidMount() {
        Animate();
        CanvasStarfire();
    }

    render() {
        return (
            <content className="home-wrapper" >
                <div className="home-main">
                    <div className="layer moon" id="jsMoon">
                        <div className="l-wrapper">
                            <p className="greeting">님, 찾아주셔서 감사합니다.</p>  
                        </div>
                    </div>
                    <div className="layer starry" id="jsStarry"></div>
                    <canvas id="canvas-starfire"></canvas>
                    <div className="layer mt-third" id="jsMtThird"></div>
                    <div className="layer mt-second" id="jsMtSecond"></div>
                    <h1 className="maintext" id="jsMaintext">JOHNY KIM</h1>
                    <div className="layer mt-first" id="jsMtFirst"></div>
                    <div className="l-wrapper" id="jsHomeForm">
                        <Form />
                    </div>
                    <IconWheelBtn text="작업물 보러가기" tagId="jsIconWheel" />
                </div>
                { this.homeTextbox.map( section => {                  
                    return (
                        <div key={section.title} id={`home-${section.title}`} className="home-section">
                            <HomeSectionTextBox
                                title={section.title}
                                strong={section.strong}
                                desc={section.desc}
                            />
                            <HomeSectionContent content={section.title} />
                        </div>
                    );
                })}
                <div className="button-top is-hidden" id="jsBtnTop">
                    <div className="icon"></div>
                    <p className="f-normal">Top</p>
                </div>
            </content>
        )
    }
}

export default Home;