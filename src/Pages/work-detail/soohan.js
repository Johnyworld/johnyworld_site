import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../Components/partials/Normal-section';

import styleColors from '../../Images/work-detail-soohan/soohan-style-color.png';
import styleFonts from '../../Images/work-detail-soohan/soohan-style-fonts.png';
import styleButtons from '../../Images/work-detail-soohan/soohan-style-buttons.png';

let workDesignSoohan, soohanSub01, soohanSub02;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    workDesignSoohan = require( '../../Mobile-images/work-detail-soohan/soohan-design.jpg' );
    soohanSub01 = require( '../../Mobile-images/work-detail-soohan/soohan-sub01.jpg' );
    soohanSub02 = require( '../../Mobile-images/work-detail-soohan/soohan-sub02.jpg' );
} else {
    workDesignSoohan = require( '../../Images/work-detail-soohan/soohan-design.jpg' );
    soohanSub01 = require( '../../Images/work-detail-soohan/soohan-sub01.jpg' );
    soohanSub02 = require( '../../Images/work-detail-soohan/soohan-sub02.jpg' );
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
                <NormalSection 
                    title="메인페이지" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            imgSrc: workDesignSoohan,
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
                                    { title: 'Subpages', src: soohanSub01 },
                                    { title: 'Subpages', src: soohanSub02 }
                                ]
                            }
                        }
                    ]}
                />
                <NormalSection 
                    title="인터뷰영상 제작" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: "촬영, 편집 작업 진행",
                            iframe: {
                                title: 'soo-interview',
                                src: 'https://player.vimeo.com/video/292651398',
                                style: { background: '#222', width: '100%', height: '47vw' },
                            }
                        }
                    ]}
                />
            </div>
        )
    }
}

export default Soohan;