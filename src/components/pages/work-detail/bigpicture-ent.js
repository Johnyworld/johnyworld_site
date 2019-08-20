import React, { Component } from 'react';
import BigpictureLogoSVG from './bigpicture-ent-svglogo';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from './sections/normal-section';

import styleColors from '../../../images/work-detail-bigpic/bigpic-style-color.png';
import styleFonts from '../../../images/work-detail-bigpic/bigpic-style-fonts.png';
import styleIcons from '../../../images/work-detail-bigpic/bigpic-style-icons.jpg';
import styleButtons from '../../../images/work-detail-bigpic/bigpic-style-buttons.png';

let workDesignBigpictureEnt, sub01, sub02, bevl00, bevl01, bevl02, bevl03, bevl04, bevl05;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    workDesignBigpictureEnt = require( '../../../mobile-images/work-detail-bigpic/bigpic-design.jpg' );
    sub01 = require( '../../../mobile-images/work-detail-bigpic/bigpic-sub-01.jpg' );
    sub02 = require( '../../../mobile-images/work-detail-bigpic/bigpic-sub-02.jpg' );
    bevl00 = require( '../../../mobile-images/work-detail-bigpic/bevl-00.jpg' );
    bevl01 = require( '../../../mobile-images/work-detail-bigpic/bevl-01.jpg' );
    bevl02 = require( '../../../mobile-images/work-detail-bigpic/bevl-02.jpg' );
    bevl03 = require( '../../../mobile-images/work-detail-bigpic/bevl-03.jpg' );
    bevl04 = require( '../../../mobile-images/work-detail-bigpic/bevl-04.jpg' );
    bevl05 = require( '../../../mobile-images/work-detail-bigpic/bevl-05.jpg' );
} else {
    workDesignBigpictureEnt = require( '../../../images/work-detail-bigpic/bigpic-design.jpg' );
    sub01 = require( '../../../images/work-detail-bigpic/bigpic-sub-01.jpg' );
    sub02 = require( '../../../images/work-detail-bigpic/bigpic-sub-02.jpg' );
    bevl00 = require( '../../../images/work-detail-bigpic/bevl-00.jpg' );
    bevl01 = require( '../../../images/work-detail-bigpic/bevl-01.jpg' );
    bevl02 = require( '../../../images/work-detail-bigpic/bevl-02.jpg' );
    bevl03 = require( '../../../images/work-detail-bigpic/bevl-03.jpg' );
    bevl04 = require( '../../../images/work-detail-bigpic/bevl-04.jpg' );
    bevl05 = require( '../../../images/work-detail-bigpic/bevl-05.jpg' );
}

class BigpictureEnt extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={521} imgHeight={155} />
                        <StyleSheetItem title="Fonts" imgName="Styles-Font" imgSrc={styleFonts} imgWidth={513} imgHeight={354} />
                        <StyleSheetItem title="Icons" imgName="Styles-Icon" imgSrc={styleIcons} imgWidth={210} imgHeight={34} />
                        <StyleSheetItem title="Buttons" imgName="Styles-Button" imgSrc={styleButtons} imgWidth={498} imgHeight={155} />
                    </div>
                </section>
                <NormalSection 
                    title="메인페이지" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: "트렌드를 따르는 디자인 레이아웃과 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지 사용.",
                            imgSrc: workDesignBigpictureEnt,
                            imgTitle: "Mainpage"
                        }
                    ]}
                />
                <NormalSection 
                    title="서브페이지" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            grid: {
                                column: 2,
                                tabletCol: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Subpages', src: sub01 },
                                    { title: 'Subpages', src: sub02 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: 'SVG 애니메이션',
                            desc: '벡터방식의 이미지인 SVG를 사용하여, 색상이 차차 변하는 그라데이션 애니메이션을 부여하여 홈페이지에 생동감을 주었습니다.',
                            svgComponent: <BigpictureLogoSVG />,
                            svgComponentDesc: '텍스트의 색상이 변합니다.'

                        }
                    ]}
                />
                <NormalSection 
                    title="플러그인 개발" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '각 아티스트별 미디어 관리 플러그인',
                            desc: '기존 워드프레스 플러그인중에는 네이버TV의 영상을 임포트 하고, 한번에 관리할 수 있는 플러그인의 부재로, 필요에 따라 개발 시작. 메인페이지는 슬라이더, 상세페이지는 그리드. 클라이언트를 위한 관리자페이지 구성.',
                            grid: {
                                column: 2,
                                tabletCol: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Plugin', src: bevl05 },
                                    { title: 'Plugin', src: bevl00 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '관리자페이지',
                            desc: '아티스트 이름을 카테고리로 지정하여 유튜브 / 비메오 / 네이버TV 링크를 가져와, iframe으로 보여줍니다.',
                            grid: {
                                column: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Plugin : Admin Page', src: bevl03 },
                                    { title: 'Plugin : Admin Page', src: bevl02 },
                                    { title: 'Plugin : Admin Page', src: bevl01 }
                                ]
                            }
                        },
                    ]}
                />
                <NormalSection 
                    title="비디오 라이트박스" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: '업로드한 영상을 클릭하면 라이트박스로 재생. 영상 밖의 공간으로 마우스를 옮기면 마우스가 X모양으로 바뀌고 클릭하면 페이드 아웃 됩니다.',
                            imgSrc: bevl04,
                            imgTitle: "Video Lightbox"
                        }
                    ]}
                />
            </div>
        )
    }
}

export default BigpictureEnt;