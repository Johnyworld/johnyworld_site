import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../Components/partials/Normal-section';

import styleColors from '../../Images/work-detail-fancoin/fancoin-style-color.png';
import styleFonts from '../../Images/work-detail-fancoin/fancoin-style-fonts.png';

let workDesignFanclubCoin1, workDesignFanclubCoin2, workDesignFanclubCoin3;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if (isMobile) {
    workDesignFanclubCoin1 = require( '../../Mobile-images/work-detail-fancoin/fancoin-design-1.jpg' );
    workDesignFanclubCoin2 = require( '../../Mobile-images/work-detail-fancoin/fancoin-design-2.jpg' );
    workDesignFanclubCoin3 = require( '../../Mobile-images/work-detail-fancoin/fancoin-design-3.jpg' );
} else {
    workDesignFanclubCoin1 = require( '../../Images/work-detail-fancoin/fancoin-design-1.jpg' );
    workDesignFanclubCoin2 = require( '../../Images/work-detail-fancoin/fancoin-design-2.jpg' );
    workDesignFanclubCoin3 = require( '../../Images/work-detail-fancoin/fancoin-design-3.jpg' );
}

class FanclubCoin extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={521} imgHeight={155} />
                        <StyleSheetItem title="Fonts" imgName="Styles-Font" imgSrc={styleFonts} imgWidth={579} imgHeight={324} />
                    </div>
                </section>
                <NormalSection 
                    title="랜딩페이지" 
                    content={[{
                        wrapper: 'l-wrapper',
                        grid: {
                            column: 1,
                            imgs: [ 
                                { title: 'Subpages', src: workDesignFanclubCoin1 },
                                { title: 'Subpages', src: workDesignFanclubCoin2 },
                                { title: 'Subpages', src: workDesignFanclubCoin3 }
                            ]
                        }
                    }]}
                />
            </div>

        )
    }
}

export default FanclubCoin;