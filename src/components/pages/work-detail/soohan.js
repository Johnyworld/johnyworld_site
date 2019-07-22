import React, { Component } from 'react';

import styleColors from '../../../images/work-detail-soohan/soohan-style-color.png';
import styleFonts from '../../../images/work-detail-soohan/soohan-style-fonts.png';
import styleButtons from '../../../images/work-detail-soohan/soohan-style-buttons.png';
import workDesignSoohan from '../../../images/work-detail-soohan/soohan-design.jpg';
import soohanSub01 from '../../../images/work-detail-soohan/soohan-sub01.jpg';
import soohanSub02 from '../../../images/work-detail-soohan/soohan-sub02.jpg';

class Soohan extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 jsAppearBtT"><p className="f-subhead f-bold">Colors</p></div>
                                <div className="l-col l-col-6-12 jsAppearBtT"><img src={styleColors} style={{ maxWidth: 521, maxHeight: 155 }} alt="스타일-색상" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 jsAppearBtT"><p className="f-subhead f-bold">Fonts</p></div>
                                <div className="l-col l-col-6-12 jsAppearBtT"><img src={styleFonts} style={{ maxWidth: 598, maxHeight: 265 }} alt="스타일-폰트" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 jsAppearBtT"><p className="f-subhead f-bold">Buttons</p></div>
                                <div className="l-col l-col-6-12 jsAppearBtT"><img src={styleButtons} style={{ maxWidth: 320, maxHeight: 115 }} alt="스타일-버튼" /></div>
                            </div>
                        </div>
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
                        <ul className="l-row gap60">
                            <li className="l-col l-col-6-12">
                                <img src={soohanSub01} alt="designimg" />
                            </li>
                            <li className="l-col l-col-6-12">
                                <img src={soohanSub02} alt="designimg" />
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">인터뷰영상 제작</h2>
                            <p className="f-normal">촬영, 편집 작업 진행</p>
                        </div>
                        <iframe title="soo-interview" src="https://player.vimeo.com/video/292651398" width="100%" style={{ backgroundColor: '#222', height: 550 }} frameborder="0" allowfullscreen="allowfullscreen" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Soohan;