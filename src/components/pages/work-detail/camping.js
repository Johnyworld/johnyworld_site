import React, { Component } from 'react';

import camping01 from '../../../images/work-detail/camping-01.jpg';
import camping02 from '../../../images/work-detail/camping-02.jpg';
import camping03 from '../../../images/work-detail/camping-03.jpg';

class Camping extends Component {
    render() {
        return (
            <div className="detail-each">
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">디바인 리조트</h2>
                            <p className="f-normal"><strong>홍천 디바인 리조트 주변을 재현.</strong>캠핑장 주변을 일러스트레이션으로 재현하고 실제 '인력거크루'의 멤버들을<br />캐릭터화하여 곳곳에 배치했습니다.</p>
                        </div>
                    </div>
                    <img src={camping01} alt="designimg" className="krx-img-gap" />
                    <div className="l-wrapper">
                        <img src={camping02} alt="designimg" />
                        <img src={camping03} alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Camping;