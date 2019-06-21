import React, { Component } from 'react';

import bevl00 from '../../../images/work-detail/bevl-00.jpg';
import bevl01 from '../../../images/work-detail/bevl-01.jpg';
import bevl02 from '../../../images/work-detail/bevl-02.jpg';
import bevl03 from '../../../images/work-detail/bevl-03.jpg';
import bevl04 from '../../../images/work-detail/bevl-04.jpg';
import bevl05 from '../../../images/work-detail/bevl-05.jpg';

class Bevl extends Component {
    render() {
        return (
            <div className="detail-each">
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">디자인</h2>
                            <p className="f-normal"></p>
                        </div>
                        <img src={bevl05} alt="designimg" />
                        <img src={bevl00} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">플러그인 관리자페이지</h2>
                            <p className="f-normal"><strong>카테고리 관리</strong>아티스트 이름을 카테고리로 지정하여</p>
                        </div>
                        <img src={bevl01} alt="designimg" />
                        <div className="text-wrap">
                            <p className="f-normal"><strong>영상 추가하기</strong>지정해둔 카테고리들중 골라서<br />유튜브 / 비메오 / 네이버TV 영상의 링크를 가져옵니다.</p>
                        </div>
                        <img src={bevl02} alt="designimg" />
                        <div className="text-wrap">
                            <p className="f-normal"><strong>리스트 관리</strong>업로드한 영상들을 리스트로 한눈에 확인/관리할 수 있습니다.<br />메인페이지 슬라이더에는 가장 최신의 영상들을 뿌려줍니다.</p>
                        </div>
                        <img src={bevl03} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">비디오 라이트박스</h2>
                            <p className="f-normal">업로드한 영상을 클릭하면 라이트박스로 보여줍니다.<br />영상 밖의 공간으로 마우스를 옮기면 마우스가 X모양으로 바뀌고<br />클릭하면 페이드아웃 됩니다.</p>
                        </div>
                        <img src={bevl04} alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Bevl;