import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../Components/partials/Normal-section';

import styleColors from '../../Images/work-detail-focus/focus-style-color.png';
import styleFonts from '../../Images/work-detail-focus/focus-style-fonts.png';
import styleTypo from '../../Images/work-detail-focus/focus-style-typography.png';
import styleLayout from '../../Images/work-detail-focus/focus-style-layout.png';

let focusHome1, focusHome2, sub01, sub02;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    focusHome1 = require( '../../Mobile-images/work-detail-focus/focus-main-1.jpg' );
    focusHome2 = require( '../../Mobile-images/work-detail-focus/focus-main-2.jpg' );
    sub01 = require( '../../Mobile-images/work-detail-focus/focus-sub-01.jpg' );
    sub02 = require( '../../Mobile-images/work-detail-focus/focus-sub-02.jpg' );
} else {
    focusHome1 = require( '../../Images/work-detail-focus/focus-main-1.jpg' );
    focusHome2 = require( '../../Images/work-detail-focus/focus-main-2.jpg' );
    sub01 = require( '../../Images/work-detail-focus/focus-sub-01.jpg' );
    sub02 = require( '../../Images/work-detail-focus/focus-sub-02.jpg' );
}

class TheFocus extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={422} imgHeight={155} />
                        <StyleSheetItem title="Fonts" imgName="Styles-Font" imgSrc={styleFonts} imgWidth={513} imgHeight={354} />
                        <StyleSheetItem title="Typography" imgName="Styles-Typography" imgSrc={styleTypo} imgWidth={684} imgHeight={638} />
                        <StyleSheetItem title="Layout" imgName="Styles-Layout" imgSrc={styleLayout} imgWidth={514} imgHeight={953} />
                    </div>
                </section>
                <NormalSection 
                    title="홈" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "홈 메인메뉴 페이지",
                            desc: "마우스 움직임에 따른 인터렉션으로 각 오브젝트간의 공간감을 표현하여 깔끔하면서도 재미있는 홈 화면을 보여줍니다. 중앙에는 가장 중요한 3가지 메뉴를 배치하고 상단에는 외부링크, 하단에는 토이프로젝트를 볼 수 있는 버튼을 배치했습니다.",
                            imgSrc: focusHome1,
                            imgTitle: "Mainpage"
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "홈 토이프로젝트 페이지",
                            desc: "직접 사용하거나 스터디의 목적으로 작업한 가벼운 프로젝트들의 모음입니다. 시차를 부여한 슬라이더 애니메이션으로 슬라이더 자체에도 재미를 느낄 수 있습니다. 대부분 프로젝트들의 코드가 GitHub에 공개돼있습니다.",
                            imgSrc: focusHome2,
                            imgTitle: "Toy Project"
                        }
                    ]}
                    addClassName="sec-padded-end sec-bright"
                />
                <NormalSection 
                    title="서브페이지" 
                    content={[{
                        wrapper: 'l-wrapper',
                        grid: {
                            column: 2,
                            mobileCol: 1,
                            gap: 60,
                            imgs: [ 
                                { title: 'Subpages', src: sub01 },
                                { title: 'Subpages', src: sub02 }
                            ]
                        }
                    }]}
                />
            </div>
        )
    }
}

export default TheFocus;