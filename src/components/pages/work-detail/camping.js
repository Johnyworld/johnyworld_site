import React, { Component } from 'react';

let camping01, camping02, camping03;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if (isMobile) {
    camping01 = require( '../../../mobile-images/work-detail-camping/camping-01.jpg' );
    camping02 = require( '../../../mobile-images/work-detail-camping/camping-02.jpg' );
    camping03 = require( '../../../mobile-images/work-detail-camping/camping-03.jpg' );
} else {
    camping01 = require( '../../../images/work-detail-camping/camping-01.jpg' );
    camping02 = require( '../../../images/work-detail-camping/camping-02.jpg' );
    camping03 = require( '../../../images/work-detail-camping/camping-03.jpg' );
}


class Camping extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">디바인 리조트</h2>
                            <p className="f-normal"><strong>홍천 디바인 리조트 주변을 재현.<br /></strong>캠핑장 주변을 일러스트레이션으로 재현하고 실제 '인력거크루'의 멤버들을<br />캐릭터화하여 곳곳에 배치했습니다.</p>
                        </div>
                    </div>
                    <img src={camping01} alt="designimg" className="krx-img-gap" />
                </section>
                <section className="sec-padded-end">
                    <div className="l-wrapper-center">
                        <img src={camping02} alt="designimg" />
                    </div>
                </section>
                <section className="sec-padded-end">
                    <div className="l-wrapper-center">
                        <img src={camping03} alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Camping;