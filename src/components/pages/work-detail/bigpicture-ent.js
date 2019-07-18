import React, { Component } from 'react';
import BigpictureLogoSVG from './bigpicture-ent-svglogo';

import workDesignBigpictureEnt from '../../../images/work-detail-bigpic/bigpic-design.jpg';
import sub01 from '../../../images/work-detail-bigpic/bigpic-sub-01.jpg';
import sub02 from '../../../images/work-detail-bigpic/bigpic-sub-02.jpg';
import styleColors from '../../../images/work-detail-bigpic/bigpic-style-color.png';
import styleFonts from '../../../images/work-detail-bigpic/bigpic-style-fonts.png';
import styleIcons from '../../../images/work-detail-bigpic/bigpic-style-icons.jpg';
import styleButtons from '../../../images/work-detail-bigpic/bigpic-style-buttons.png';
import bevl00 from '../../../images/work-detail-bigpic/bevl-00.jpg';
import bevl01 from '../../../images/work-detail-bigpic/bevl-01.jpg';
import bevl02 from '../../../images/work-detail-bigpic/bevl-02.jpg';
import bevl03 from '../../../images/work-detail-bigpic/bevl-03.jpg';
import bevl04 from '../../../images/work-detail-bigpic/bevl-04.jpg';
import bevl05 from '../../../images/work-detail-bigpic/bevl-05.jpg';

class BigpictureEnt extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Colors</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleColors} style={{ maxWidth: 521, maxHeight: 155 }} alt="스타일-색상" /></div>
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
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Icons</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleIcons} style={{ maxWidth: 210, maxHeight: 34 }} alt="스타일-아이콘" /></div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="l-row">
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">Buttons</p></div>
                                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={styleButtons} style={{ maxWidth: 498, maxHeight: 155 }} alt="스타일-버튼" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">메인페이지</h2>
                            <p className="f-normal jsAppearBtT">트렌드를 따르는 디자인 레이아웃 적용. <br className="dis-m" />컨텐츠에 집중 할 수 있는 가벼운 배경 이미지 사용.</p>
                        </div>
                        <img className="jsAppearBtT" src={workDesignBigpictureEnt} alt="designimg" />
                    </div>
                </section>
                <section> 
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">서브페이지</h2>
                            <p className="f-normal"></p>
                        </div>
                        <div className="l-row gap60">
                            <div className="l-col l-col-6-12 l-col-t-12-12">
                                <img className="jsAppearBtT" src={sub01} alt="designimg" />
                            </div>
                            <div className="l-col l-col-6-12 l-col-t-12-12">
                                <img className="jsAppearBtT" src={sub02} alt="designimg" />
                            </div>
                        </div>
                        <div className="text-wrap">
                            <p className="f-normal"><strong>SVG 애니메이션</strong>벡터방식의 이미지인 SVG를 사용하여, 색상이 차차 변하는 그라데이션 애니메이션을 부여하여 홈페이지에 생동감을 주었습니다.</p>
                        </div>
                        <div className="biglogo-svg-wrap">
                            <div className="text-wrap c-wine-bright">텍스트의 색상이 변합니다.</div>
                            <BigpictureLogoSVG />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">플러그인 개발</h2>
                            <p className="f-normal jsAppearBtT"><strong>각 아티스트별 미디어 관리 플러그인</strong>기존 워드프레스 플러그인중에는 네이버TV의 영상을 임포트 하고, <br className="dis-m" />한번에 관리할 수 있는 플러그인의 부재로, 필요에 따라 개발 시작. <br className="dis-m" />메인페이지는 슬라이더, 상세페이지는 그리드. 클라이언트를 위한 관리자페이지 구성.</p>
                        </div>
                        <ul className="l-row gap60">
                            <li className="l-col l-col-6-12 l-col-t-12-12">
                                <img src={bevl05} className="jsAppearBtT" alt="designimg" />
                            </li>
                            <li className="l-col l-col-6-12 l-col-t-12-12">
                                <img src={bevl00} className="jsAppearBtT" alt="designimg" />
                            </li>
                        </ul>
                        <div className="text-wrap">
                            <p className="f-normal jsAppearBtT"><strong>관리자페이지</strong>아티스트 이름을 카테고리로 지정하여 <br className="dis-m" />유튜브 / 비메오 / 네이버TV 링크를 가져와, <br className="dis-m" />iframe으로 보여줍니다.</p>
                        </div>
                        <img src={bevl03} className="jsAppearBtT" alt="designimg" />
                        <img src={bevl02} className="jsAppearBtT" alt="designimg" />
                        <img src={bevl01} className="jsAppearBtT" alt="designimg" />
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">비디오 라이트박스</h2>
                            <p className="f-normal jsAppearBtT">업로드한 영상을 클릭하면 라이트박스로 재생.<br className="dis-m" />영상 밖의 공간으로 마우스를 옮기면 마우스가 X모양으로 바뀌고<br className="dis-m" />클릭하면 페이드아웃.</p>
                        </div>
                        <img src={bevl04} className="jsAppearBtT" alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default BigpictureEnt;