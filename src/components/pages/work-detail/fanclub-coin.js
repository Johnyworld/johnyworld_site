import React, { Component } from 'react';

import workDesignFanclubCoin1 from '../../../images/work-detail/fancoin-design-1.jpg';
import workDesignFanclubCoin2 from '../../../images/work-detail/fancoin-design-2.jpg';
import workDesignFanclubCoin3 from '../../../images/work-detail/fancoin-design-3.jpg';

class FanclubCoin extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-bright">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">디자인</h2>
                            <p className="f-normal"><strong>뭐시기</strong>거시기</p>
                        </div>
                        <img src={workDesignFanclubCoin1} alt="designimg" />
                        <img src={workDesignFanclubCoin2} alt="designimg" />
                        <img src={workDesignFanclubCoin3} alt="designimg" />
                    </div>
                </section>
            </div>

        )
    }
}

export default FanclubCoin;