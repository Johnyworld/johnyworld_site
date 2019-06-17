import React, { Component } from 'react';

import worksDevicesSoohan from '../../../images/works-detail/soohan-devices.jpg';
import worksDesignSoohan from '../../../images/works-detail/soohan-design.jpg';

class Soohan extends Component {
    render() {
        return (
            <>
                <div className="detail-section key-section">
                    <div className="l-wrapper-wide">
                        <img src={worksDevicesSoohan} alt="deviceimg" className="device-image" />
                    </div>
                </div>
                <div className="detail-section">
                    <div className="l-wrapper">
                        <div className="detail-heading">
                            <h2 className="f-title">프로젝트<br />개요</h2>
                            <div className="textbox">
                                <p className="f-normal"><strong>참여인원</strong>2명</p>
                                <p className="f-normal"><strong>내 업무범위</strong>기획 - 80%<br />디자인 - 50%<br />워드프레스 개발 - 100%</p>
                                <p className="f-normal"><strong>디자인</strong>기존의 많은 엔터테인먼트 사이트들은 일관된 유행을 따르고 있었는데, 현시점의 트렌드와는 맞지 않는 디자인이라 판단하고, 좀 더 트렌디하고 차별된 디자인 레이아웃을 적용했습니다. 다양하게 사진을 배치하기보다는 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지들을 적용하여 제작했습니다.</p>
                                <p className="f-normal"><strong>사용자 인터페이스</strong>팬들이 사이트를 방문했을때 원하는 아티스트의 정보를 빠르게 찾을 수 있고, 지루한 정보들 보다는 재미있고 다양한 미디어들을 볼 수 있습니다.</p>
                                <p className="f-normal"><strong>워드프레스 플러그인 개발</strong>클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. 클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지도 구성하였습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-section design-image-section">
                    <div className="l-wrapper">
                        <img src={worksDesignSoohan} alt="designimg" className="design-image" />
                    </div>
                </div>
            </>
        )
    }
}

export default Soohan;