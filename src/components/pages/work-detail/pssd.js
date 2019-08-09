import React, { Component } from 'react';
import StyleSheetItem from '../work-detail-stylesheet';

import styleColors from '../../../images/work-detail-pssd/pssd-style-color.png';
import stylePattern from '../../../images/work-detail-pssd/pssd-style-pattern.jpg';
import styleIcons from '../../../images/work-detail-pssd/pssd-style-icons.png';

let pssd01, pssd02, pssd03;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    pssd01 = require( '../../../mobile-images/work-detail-pssd/pssd-01.jpg' );
    pssd02 = require( '../../../mobile-images/work-detail-pssd/pssd-02.jpg' );
    pssd03 = require( '../../../mobile-images/work-detail-pssd/pssd-03.jpg' );
} else {
    pssd01 = require( '../../../images/work-detail-pssd/pssd-01.jpg' );
    pssd02 = require( '../../../images/work-detail-pssd/pssd-02.jpg' );
    pssd03 = require( '../../../images/work-detail-pssd/pssd-03.jpg' );
}

class Pssd extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={323} imgHeight={155} />
                        <StyleSheetItem title="Pattern" imgName="Styles-Pattern" imgSrc={stylePattern} imgWidth={349} imgHeight={62} />
                        <StyleSheetItem title="Icons" imgName="Styles-Icon" imgSrc={styleIcons} imgWidth={252} imgHeight={94} />
                    </div>
                </section>
                <section className="sec-padded-end">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">쉽고 차분한 진행 과정</h2>
                            <p className="f-normal"><strong>한 스텝, 한 스텝. 다루기 쉬운 프로세스.</strong>컴퓨터를 잘 모르는 사람이라도 쉽게 다룰 수 있도록<br />차근차근 한단계씩 진행합니다.</p>
                        </div>
                        <img src={pssd01} alt="designimg" />
                    </div>
                </section>
                <section className="sec-padded-end">
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">손쉬운 사용자 관리 프로세스</h2>
                            <p className="f-normal"><strong>손쉬운 관리창. 최대 4명의 사용자. 철저한 보안.</strong></p>
                        </div>
                    </div>
                    <div className="l-wrapper-center">
                        <img src={pssd02} alt="designimg" style={{ maxWidth: 912 }} />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">일관된 사용성, 일관된 디자인</h2>
                            <p className="f-normal"><strong>가장 기본적인 퀄리티를 유지합니다.</strong>모든 사용이 쉬울 수 있도록 이전 버전에 비해 많은 불필요한 과정들을 생략했습니다.<br />정말 쉬운 사용성과 아름다운 디자인으로 일관됩니다.</p>
                        </div>
                    </div>
                    <div className="l-wrapper-center">
                        <img src={pssd03} alt="designimg" style={{ maxWidth: 790 }} />
                    </div>
                </section>
            </div>                
        )
    }
}

export default Pssd;