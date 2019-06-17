import React, { Component } from 'react';

import worksDevicesCamping from '../../../images/works-detail/camping-devices.jpg';
import camping01 from '../../../images/works-detail/camping-01.jpg';
import camping02 from '../../../images/works-detail/camping-02.jpg';
import camping03 from '../../../images/works-detail/camping-03.jpg';

class Camping extends Component {
    render() {
        return (
            <>
                <div className="detail-section key-section">
                    <div className="l-wrapper-wide">
                        <img src={worksDevicesCamping} alt="deviceimg" className="device-image" />
                    </div>
                </div>
                <div className="detail-section info-section">
                    <div className="l-wrapper">
                        <div className="detail-heading">
                            <h2 className="f-title">프로젝트<br />개요</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>참여인원</strong>1명</p>
                                <p className="f-normal"><strong>내 업무범위</strong>기획 - 100%<br />일러스트레이션 - 100%</p>
                                <p className="f-normal"><strong>디자인</strong>아이소메트리 기법을 사용한 배경과, 아기자기한 캐릭터들을 꼼꼼히 배치하여 귀여움과 재미를 느낄 수 있음</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="detail-center">
                        <h2 className="f-title">디바인 리조트</h2>
                        <div className="textbox">
                            <p className="f-normal"><strong>홍천 디바인 리조트 주변을 재현.</strong>캠핑장 주변을 일러스트레이션으로 재현하고 실제 '인력거크루'의 멤버들을<br />캐릭터화하여 곳곳에 배치했습니다.</p>
                            <img src={camping01} alt="designimg" className="krx-img-gap" />
                            <div className="l-wrapper">
                                <img src={camping02} alt="designimg" className="krx-img-gap" />
                                <img src={camping03} alt="designimg" className="krx-img-gap" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Camping;