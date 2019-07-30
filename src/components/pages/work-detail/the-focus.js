import React, { Component } from 'react';

import styleColors from '../../../images/work-detail-focus/focus-style-color.png';
import styleFonts from '../../../images/work-detail-focus/focus-style-fonts.png';
import styleTypo from '../../../images/work-detail-focus/focus-style-typography.png';
import styleLayout from '../../../images/work-detail-focus/focus-style-layout.png';

let focusHome1, focusHome2, sub01, sub02;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    focusHome1 = require( '../../../mobile-images/work-detail-focus/focus-main-1.jpg' );
    focusHome2 = require( '../../../mobile-images/work-detail-focus/focus-main-2.jpg' );
    sub01 = require( '../../../mobile-images/work-detail-focus/focus-sub-01.jpg' );
    sub02 = require( '../../../mobile-images/work-detail-focus/focus-sub-02.jpg' );
} else {
    focusHome1 = require( '../../../images/work-detail-focus/focus-main-1.jpg' );
    focusHome2 = require( '../../../images/work-detail-focus/focus-main-2.jpg' );
    sub01 = require( '../../../images/work-detail-focus/focus-sub-01.jpg' );
    sub02 = require( '../../../images/work-detail-focus/focus-sub-02.jpg' );
}



class TheFocus extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Colors</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleColors} style={{ maxWidth: 422, maxHeight: 155 }} alt="스타일-색상" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Fonts</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleFonts} style={{ maxWidth: 513, maxHeight: 354 }} alt="스타일-폰트" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Typography</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleTypo} style={{ maxWidth: 684, maxHeight: 638 }} alt="스타일-타이포그래피" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Layouts</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleLayout} style={{ maxWidth: 514, maxHeight: 953 }} alt="스타일-레이아웃" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec-padded-end sec-bright">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">홈</h2>
                            <p className="f-normal jsAppearBtT"><br /><strong>홈 메인메뉴 페이지</strong><br />마우스 움직임에 따른 인터렉션으로 각 오브젝트간의 공간감을 표현하여 깔끔하면서도 재미있는 홈 화면을 보여줍니다. <br className="dis-m" />중앙에는 가장 중요한 3가지 메뉴를 배치하고 상단에는 외부링크, 하단에는 토이프로젝트를 볼 수 있는 버튼을 배치했습니다.</p>
                        </div>
                        <img className="jsAppearBtT" src={focusHome1} alt="designimg" />
                        <div className="text-wrap">
                            <p className="f-normal jsAppearBtT"><br /><strong>홈 토이프로젝트 페이지</strong><br />직접 사용하거나 스터디의 목적으로 작업한 가벼운 프로젝트들의 모음입니다. <br className="dis-m" />시차를 부여한 슬라이더 애니메이션으로 슬라이더 자체에도 재미를 느낄 수 있습니다. <br className="dis-m" />대부분 프로젝트들의 코드가 GitHub에 공개돼있습니다.</p>
                        </div>
                        <img className="jsAppearBtT" src={focusHome2} alt="designimg" />
                    </div>
                </section>
                <section> 
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">서브페이지</h2>
                            <p className="f-normal"></p>
                        </div>
                        <div className="grid-wrap clear-fix">
                            <ul className="l-row gap60">
                                <li className="l-col l-col-6-12 l-col-m-12-12">
                                    <img className="jsAppearBtT" src={sub01} alt="designimg" />
                                </li>
                                <li className="l-col l-col-6-12 l-col-m-12-12">
                                    <img className="jsAppearBtT" src={sub02} alt="designimg" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TheFocus;