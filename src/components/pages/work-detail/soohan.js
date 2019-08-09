import React, { Component } from 'react';
import StyleSheetItem from '../work-detail-stylesheet';

import styleColors from '../../../images/work-detail-soohan/soohan-style-color.png';
import styleFonts from '../../../images/work-detail-soohan/soohan-style-fonts.png';
import styleButtons from '../../../images/work-detail-soohan/soohan-style-buttons.png';

let workDesignSoohan, soohanSub01, soohanSub02;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    workDesignSoohan = require( '../../../mobile-images/work-detail-soohan/soohan-design.jpg' );
    soohanSub01 = require( '../../../mobile-images/work-detail-soohan/soohan-sub01.jpg' );
    soohanSub02 = require( '../../../mobile-images/work-detail-soohan/soohan-sub02.jpg' );
} else {
    workDesignSoohan = require( '../../../images/work-detail-soohan/soohan-design.jpg' );
    soohanSub01 = require( '../../../images/work-detail-soohan/soohan-sub01.jpg' );
    soohanSub02 = require( '../../../images/work-detail-soohan/soohan-sub02.jpg' );
}

class Soohan extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={521} imgHeight={155} />
                        <StyleSheetItem title="Fonts" imgName="Styles-Font" imgSrc={styleFonts} imgWidth={598} imgHeight={265} />
                        <StyleSheetItem title="Buttons" imgName="Styles-Button" imgSrc={styleButtons} imgWidth={320} imgHeight={115} />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">메인페이지</h2>
                            <p className="f-normal"></p>
                        </div>
                        <img src={workDesignSoohan} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">서브페이지</h2>
                        </div>
                        <div className="grid-wrap clear-fix">
                            <ul className="l-row gap60">
                                <li className="l-col l-col-6-12 l-col-m-12-12">
                                    <img src={soohanSub01} alt="designimg" />
                                </li>
                                <li className="l-col l-col-6-12 l-col-m-12-12">
                                    <img src={soohanSub02} alt="designimg" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">인터뷰영상 제작</h2>
                            <p className="f-normal">촬영, 편집 작업 진행</p>
                        </div>
                        <iframe title="soo-interview" src="https://player.vimeo.com/video/292651398" width="100%" style={{ backgroundColor: '#222', height: '47vw' }} frameBorder="0" allowFullScreen="allowfullscreen" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Soohan;