import React, { Component } from 'react';

import styleColors from '../../../images/work-detail-fancoin/fancoin-style-color.png';
import styleFonts from '../../../images/work-detail-fancoin/fancoin-style-fonts.png';
import workDesignFanclubCoin1 from '../../../images/work-detail-fancoin/fancoin-design-1.jpg';
import workDesignFanclubCoin2 from '../../../images/work-detail-fancoin/fancoin-design-2.jpg';
import workDesignFanclubCoin3 from '../../../images/work-detail-fancoin/fancoin-design-3.jpg';

class FanclubCoin extends Component {
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
                                <div className="l-col l-col-6-12 jsAppearBtT"><img src={styleFonts} style={{ maxWidth: 579, maxHeight: 324 }} alt="스타일-폰트" /></div>
                            </div>
                        </div>
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