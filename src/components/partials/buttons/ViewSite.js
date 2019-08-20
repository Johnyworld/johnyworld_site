import React from 'react';
import './ViewSite.scss';

export default function({url}) {
    return (
        <a href={url} target="blank" className="viewsite-btn is-hidden" id="jsViewsiteBtn">
            <p>사이트<br />보기</p>
        </a>
    )
}