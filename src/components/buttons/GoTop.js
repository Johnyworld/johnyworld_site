import React from 'react';
import './GoTop.scss';

export default ({ func_goTop }) => {
    return (
        <button className="header-buttons button-top is-hidden" id="jsBtnTop" onClick={func_goTop}>
            <div className="icon"></div>
            <p className="f-subhead f-eng-title">Top</p>
        </button>
    )
}
