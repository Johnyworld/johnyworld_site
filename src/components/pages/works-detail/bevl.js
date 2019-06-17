import React, { Component } from 'react';

import worksDevicesBevl from '../../../images/works-detail/bevl-devices.jpg';
import bevl00 from '../../../images/works-detail/bevl-00.jpg';
import bevl01 from '../../../images/works-detail/bevl-01.jpg';
import bevl02 from '../../../images/works-detail/bevl-02.jpg';
import bevl03 from '../../../images/works-detail/bevl-03.jpg';
import bevl04 from '../../../images/works-detail/bevl-04.jpg';
import bevl05 from '../../../images/works-detail/bevl-05.jpg';

class Bevl extends Component {
    render() {
        return (
            <>
                <div className="detail-section key-section">
                    <div className="l-wrapper-wide">
                        <img src={worksDevicesBevl} alt="deviceimg" className="device-image" />
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-heading">
                            <h2 className="f-title">플러그인 개발<br />개요</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>참여인원</strong>1명</p>
                                <p className="f-normal"><strong>내 업무범위</strong>기획, 디자인, 개발 - 100%</p>
                                <p className="f-normal"><strong>플러그인 개발</strong>클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 기존의 비디오 재생 플러그인들은 디자인과 인터페이스도 맞지 않았고 특히나 네이버TV를 재생하게 해주는 플러그인이 존재하지 않았습니다. 그래서 직접 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. </p>
                                <p className="f-normal"><strong>관리자페이지</strong>클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지를 구성하였습니다. 영상을 추가, 삭제하고 순서 변경이 가능합니다.</p>
                                <p className="f-normal"><strong>반응형</strong>디바이스와 창 크기에 따라 메인페이지의 슬라이드와 상세페이지의 그리드는 각각 한 라인에서 보여주는 컨텐츠 수가 달라집니다.</p>
                                <p className="f-normal"><strong>사용자 인터페이스</strong>무한 루핑되는 슬라이드. 마우스는 물론 모바일에서 터치로도 슬라이딩이 가능하여 사용하는데에 이질감이 없도록 제작했습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section design-image-section">
                    <div className="l-wrapper">
                        <img src={bevl05} alt="designimg" className="design-image" />
                        <img src={bevl00} alt="designimg" className="design-image krx-img-gap" />
                    </div>
                </div>

                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-center">
                            <h2 className="f-title">플러그인 관리자페이지</h2>
                            <p className="f-normal"><strong>카테고리 관리</strong>아티스트 이름을 카테고리로 지정하여<br />각 카테고리별로 나눠서 데이터를 뿌려줄 수 있습니다.</p>
                        </div>
                        <img src={bevl01} alt="designimg" className="krx-img-gap img-not-wrapped" />
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-center">
                            <p className="f-normal"><strong>영상 링크걸기</strong>지정해둔 카테고리들중 골라서<br />유튜브 / 비메오 / 네이버TV 영상의 링크를 가져옵니다.</p>
                        </div>
                        <img src={bevl02} alt="designimg" className="krx-img-gap img-not-wrapped" />
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-center">
                            <p className="f-normal"><strong>리스트 관리</strong>업로드한 영상들을 리스트로 한눈에 확인/관리할 수 있습니다.<br />메인페이지 슬라이더에는 가장 최신의 영상들을 뿌려줍니다.</p>
                        </div>
                        <img src={bevl03} alt="designimg" className="krx-img-gap img-not-wrapped" />
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-center">
                            <h2 className="f-title">비디오 라이트박스</h2>
                            <p className="f-normal">업로드한 영상을 클릭하면 라이트박스로 보여줍니다.<br />영상 밖의 공간으로 마우스를 옮기면 마우스가 X모양으로 바뀌고<br />클릭하면 페이드아웃 됩니다.</p>
                        </div>
                        <img src={bevl04} alt="designimg" className="krx-img-gap img-not-wrapped" />
                    </div>
                </div>
            </>
        )
    }
}

export default Bevl;