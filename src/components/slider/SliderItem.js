import React from 'react';
import './SliderItem.scss';

export default function({ isSelected, sliderItem, handleViewLabDetail, propsHistory }) {
    const { id } = sliderItem;
    return (
        <li className={"slider-item" + (isSelected ? ' selected':'') } key={id}>
            <div className="slider-inner clear-fix">
                <SliderImage sliderItem={sliderItem} />
                <SliderText sliderItem={sliderItem} handleViewLabDetail={handleViewLabDetail} propsHistory={propsHistory}/>
            </div>
        </li>
    )
}

function SliderImage({ sliderItem }) {
    const { thumbnail } = sliderItem;
    return (
        <div className={"image-wrap" + ( window.location.hash === "#study" ? "" : " slide-hide" )}>
            <div className="thumbnail" style={{backgroundImage : 'url(' + thumbnail + ')' }}></div>
        </div>
    )
}

function SliderText({ sliderItem, handleViewLabDetail, propsHistory }) {
    const { title, slug, comment, desc, technics, git, url } = sliderItem;

    let splitTitleEach = title.split(' ');
    let splitTitleExceptFirstOne = [];
    for ( let i=1; i<splitTitleEach.length; i++) { 
        splitTitleExceptFirstOne += ' '+splitTitleEach[i];
    }
    let splitTitle = [ splitTitleEach[0], splitTitleExceptFirstOne ];

    const labTitleRender = splitTitle.map((splitTitleItem, key) => {
        return ( 
            <h2 className="f-eng-title f-bigtitle lab-title" key={`labtitle-${key}`}>{splitTitleItem}</h2> 
        )
    });

    return (
        <div className="text-wrap">
            { url 
                ? <a className="title-wrap" href={url} target="blank">
                    {labTitleRender}
                </a>
                : <button className="title-wrap" onClick={ handleViewLabDetail.bind(this, `${slug}`, propsHistory) }>
                    {labTitleRender}
                </button>
            }
            <div className="explain f-normal c-gray-dark">
                <p className="comment c-gray-bright">{comment}</p>
                <p className="explain-p f-keep-break">{desc}</p>
            </div>
            <div className="technics-wrap f-normal f-eng c-blue-bright">
                { git ? <a href={git} target="blank"><span className="git technic">GitHub</span></a> : '' }
                { technics.map((line, key) => (<span className="technic" key={`desc${key}`}>{line}</span>))}
            </div>
        </div>
    )
}
