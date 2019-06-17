import React, { Component } from 'react';

import worksDevicesPssd from '../../../images/works-detail/pssd-devises.jpg';
import pssd01 from '../../../images/works-detail/pssd-01.jpg';
import pssd02 from '../../../images/works-detail/pssd-02.jpg';
import pssd03 from '../../../images/works-detail/pssd-03.jpg';

class Pssd extends Component {
    render() {
        return (
            <>
                <div className="detail-section key-section">
                    <div className="l-wrapper-wide">
                        <img src={worksDevicesPssd} alt="deviceimg" className="device-image" />
                    </div>
                </div>
                <div className="detail-section info-section">
                    <div className="l-wrapper">
                        <div className="detail-heading">
                            <h2 className="f-title">프로젝트<br />개요</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>참여인원</strong>UX/UI 디자인팀 4명</p>
                                <p className="f-normal"><strong>내 업무범위</strong>기획 - 25%<br />UX/UI 디자인 - 50%</p>
                                <p className="f-normal"><strong>사용자 경험</strong>기존 프로그램의 복잡한 기능들은 다 빼고, 최소화하여 사용하기 쉽도록 모든 페이지간의 상호작용 확립.</p>
                                <p className="f-normal"><strong>그래픽 인터페이스</strong>실 제품의 외관과 동일한 패턴을 이용하여 일관성 유지하고 반짝이는 화려한 애니메이션으로 특징을 강화</p>
                                <p className="f-normal"><strong>보안</strong>모든 과정을 단순, 직관화하고 보안성을 강화함</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper-wide">
                        <div className="detail-center">
                            <h2 className="f-title">쉽고 차분한 진행 과정</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>한 스텝, 한 스텝. 다루기 쉬운 프로세스.</strong>컴퓨터를 잘 모르는 사람이라도 쉽게 다룰 수 있도록<br />차근차근 한단계씩 진행합니다.</p>
                                <img src={pssd01} alt="designimg" className="krx-img-gap" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section full bc-black">
                    <div className="l-wrapper-narrow">
                        <div className="detail-center">
                            <h2 className="f-title">손쉬운 사용자 관리 프로세스</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>손쉬운 관리창. 최대 4명의 사용자. 철저한 보안.</strong></p>
                                <img src={pssd02} alt="designimg" className="krx-img-gap" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper-narrow">
                        <div className="detail-center">
                            <h2 className="f-title">일관된 사용성, 일관된 디자인</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>가장 기본적인 퀄리티를 유지합니다.</strong>모든 사용이 쉬울 수 있도록 이전 버전에 비해 많은 불필요한 과정들을 생략했습니다.<br />정말 쉬운 사용성과 아름다운 디자인으로 일관됩니다.</p>
                                <img src={pssd03} alt="designimg" className="krx-img-gap" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Pssd;