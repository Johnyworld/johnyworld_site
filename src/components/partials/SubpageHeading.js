import React from 'react';
import './SubpageHeading.scss';

export default function({hugetitle, subtext}) {
    const subtextSplit = subtext.split('')
    return(
        <div className="bigmenu-title-wrapper centered" id="jsBigmenuBigtitle">
            <h1 className="f-hugetitle">{hugetitle}</h1>
            <div className="f-title" id="jsBigmenuTitle">
                { subtextSplit.map((item, key) => {
                    let string;
                    item === ' '
                    ? string = <p key={`sub-${key}`}>&nbsp;</p>
                    : string = <p key={`sub-${key}`}>{item}</p>
                    return(string)
                })}
            </div>
        </div>
    )
}