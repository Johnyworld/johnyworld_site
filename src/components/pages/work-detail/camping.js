import React, { Component } from 'react';
import NormalSection from './sections/normal-section';

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
                <NormalSection 
                    title="디바인 리조트" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "홍천 디바인 리조트 주변을 재현.",
                            desc: "캠핑장 주변을 일러스트레이션으로 재현하고 실제 '인력거크루'의 멤버들을 캐릭터화하여 곳곳에 배치했습니다.",
                        }, 
                        {
                            wrapper: null,
                            imgSrc: camping01,
                            imgTitle: "Devine Resort"
                        }
                        
                    ]}
                    addClassName="sec-padded-end"
                />
                <NormalSection 
                    content={[
                        {
                            wrapper: 'l-wrapper-center',
                            imgSrc: camping02,
                            imgTitle: "Devine Resort"
                        }
                    ]}
                    addClassName="sec-padded-end"
                />
                <NormalSection 
                    content={[
                        {
                            wrapper: 'l-wrapper-center',
                            imgSrc: camping03,
                            imgTitle: "Devine Resort"
                        }
                    ]}
                    addClassName="sec-padded-end"
                />
            </div>
        )
    }
}

export default Camping;