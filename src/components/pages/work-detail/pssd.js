import React, { Component } from 'react';

import pssd01 from '../../../images/work-detail/pssd-01.jpg';
import pssd02 from '../../../images/work-detail/pssd-02.jpg';
import pssd03 from '../../../images/work-detail/pssd-03.jpg';

class Pssd extends Component {
    render() {
        return (
            <div className="detail-each">
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">쉽고 차분한 진행 과정</h2>
                            <p className="f-normal"><strong>한 스텝, 한 스텝. 다루기 쉬운 프로세스.</strong>컴퓨터를 잘 모르는 사람이라도 쉽게 다룰 수 있도록<br />차근차근 한단계씩 진행합니다.</p>
                        </div>
                        <img src={pssd01} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">손쉬운 사용자 관리 프로세스</h2>
                            <p className="f-normal"><strong>손쉬운 관리창. 최대 4명의 사용자. 철저한 보안.</strong></p>
                        </div>
                        <img src={pssd02} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">일관된 사용성, 일관된 디자인</h2>
                            <p className="f-normal"><strong>가장 기본적인 퀄리티를 유지합니다.</strong>모든 사용이 쉬울 수 있도록 이전 버전에 비해 많은 불필요한 과정들을 생략했습니다.<br />정말 쉬운 사용성과 아름다운 디자인으로 일관됩니다.</p>
                        </div>
                        <img src={pssd03} alt="designimg" />
                    </div>
                </section>
            </div>                
        )
    }
}

export default Pssd;