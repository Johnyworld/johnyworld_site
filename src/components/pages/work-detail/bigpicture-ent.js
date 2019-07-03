import React, { Component } from 'react';

import workDesignBigpictureEnt from '../../../images/work-detail/bigpic-design.jpg';

class BigpictureEnt extends Component {
    render() {
        return (
            <div className="detail-each">
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsTextAppear">스타일가이드</h2>
                            <p className="f-normal"></p>
                        </div>
                        <img className="jsTextAppear" src={workDesignBigpictureEnt} alt="designimg" />
                    </div>
                </section>
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title jsTextAppear">디자인</h2>
                            <p className="f-normal"></p>
                        </div>
                        <img className="jsTextAppear" src={workDesignBigpictureEnt} alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default BigpictureEnt;