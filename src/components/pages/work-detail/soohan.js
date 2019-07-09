import React, { Component } from 'react';

import workDesignSoohan from '../../../images/work-detail-soohan/soohan-design.jpg';

class Soohan extends Component {
    render() {
        return (
            <div className="detail-each">
                <section>
                    <div className="l-wrapper">
                        <div className="text-wrap">
                            <h2 className="f-title">디자인</h2>
                            <p className="f-normal"></p>
                        </div>
                        <img src={workDesignSoohan} alt="designimg" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Soohan;