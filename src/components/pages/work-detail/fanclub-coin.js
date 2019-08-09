import React, { Component } from 'react';
import StyleSheetItem from '../work-detail-stylesheet';

import styleColors from '../../../images/work-detail-fancoin/fancoin-style-color.png';
import styleFonts from '../../../images/work-detail-fancoin/fancoin-style-fonts.png';

let workDesignFanclubCoin1, workDesignFanclubCoin2, workDesignFanclubCoin3;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if (isMobile) {
    workDesignFanclubCoin1 = require( '../../../mobile-images/work-detail-fancoin/fancoin-design-1.jpg' );
    workDesignFanclubCoin2 = require( '../../../mobile-images/work-detail-fancoin/fancoin-design-2.jpg' );
    workDesignFanclubCoin3 = require( '../../../mobile-images/work-detail-fancoin/fancoin-design-3.jpg' );
} else {
    workDesignFanclubCoin1 = require( '../../../images/work-detail-fancoin/fancoin-design-1.jpg' );
    workDesignFanclubCoin2 = require( '../../../images/work-detail-fancoin/fancoin-design-2.jpg' );
    workDesignFanclubCoin3 = require( '../../../images/work-detail-fancoin/fancoin-design-3.jpg' );
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
                <section className="sec-bright">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsAppearBtT">랜딩페이지</h2>
                            {/* <p className="f-normal jsAppearBtT"><strong>뭐시기<br /></strong>거시기</p> */}
                        </div>
                        <img className="jsAppearBtT" src={workDesignFanclubCoin1} alt="designimg" />
                        <img className="jsAppearBtT" src={workDesignFanclubCoin2} alt="designimg" />
                        <img className="jsAppearBtT" src={workDesignFanclubCoin3} alt="designimg" />
                    </div>
                </section>
            </div>

        )
    }
}

export default FanclubCoin;