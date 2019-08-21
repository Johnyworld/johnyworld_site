import React from 'react';

export default function StyleSheetItem({ title, imgName, imgSrc, imgWidth, imgHeight }) {
    return (
        <div className="text-wrap">
            <div className="l-row">
                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><p className="f-subhead f-bold">{title}</p></div>
                <div className="l-col l-col-6-12 l-col-m-12-12 jsAppearBtT"><img src={imgSrc} style={{ maxWidth: imgWidth, maxHeight: imgHeight }} alt={imgName} title={imgName} /></div>
            </div>
        </div>
    )
}