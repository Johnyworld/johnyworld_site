/* eslint-disable no-loop-func */
import React, { Component } from 'react';

import './lab-slider.css';
import dataLabSliderReverse from '../data/data-lab-slider';
import labSliderScript from './lab-slider-script';
import { labSliderIndex } from './lab-slider-script';
import { animInLoading, smoothScroll } from '../func/animates';

class LabSlider extends Component {
    constructor(props) {
        super(props);
        this.laboratories = dataLabSliderReverse;
    }

    labSliderResize () {
        console.log(window.location.hash);
        if ( window.location.hash === '#study' ) {
            smoothScroll('#home-Laboratory', 1000);
        }
    }

    componentDidMount() {
        labSliderScript();
        window.addEventListener( 'resize', this.labSliderResize );
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.labSliderResize );
    }

    handleViewLabDetail(linkTo) {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');

        animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

        setTimeout(() => {
            let propsHistory = this.props.history;
            propsHistory.push('/lab/' + linkTo);
        }, 1300);
    }

    render() {
        console.log(window.location.hash)
        return(
            <div className="lab-slider-wrapper clear-fix">
                <div className="btn-wrap">
                    <button className="btn left" id="labSliderBtnLeft"></button>
                    <button className="btn right" id="labSliderBtnRight"></button>
                </div>
                <ul className="slider clear-fix">
                    { this.laboratories.map((item, key) => {
                        let splitTitleEach = item.title.split(' ');
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
                        return(
                            <li className={"slider-item" + (key===labSliderIndex ? ' selected':'') } key={item.id}>
                                <div className="slider-inner">
                                    <div className={"image-wrap" + ( window.location.hash === "#study" ? "" : " slide-hide" )}>
                                        <div className="thumbnail" style={{backgroundImage : 'url(' + item.thumbnail + ')' }}></div>
                                    </div>
                                    <div className="text-wrap">
                                        { item.url 
                                            ? <a className="title-wrap" href={item.url} target="blank">
                                                {labTitleRender}
                                            </a>
                                            : <button className="title-wrap" onClick={ this.handleViewLabDetail.bind(this, `${item.slug}`) }>
                                                {labTitleRender}
                                            </button>
                                            // : <Link to={`/lab/${item.slug}`} className="title-wrap">
                                            //     {labTitleRender}
                                            // </Link>
                                        }
                                        <div className="explain f-normal c-gray-dark">
                                            <p className="comment c-gray-bright">{item.comment}</p>
                                            { item.desc.map((desc, key) => (<p className="explain-p" key={`desc${key}`}>{desc}</p>))}
                                        </div>
                                        {/* <p className="f-normal f-eng c-wine-dark">{item.date}</p> */}
                                        <div className="technics-wrap f-normal f-eng c-blue-bright">
                                            { item.git ? <a href={item.git} target="blank"><span className="git technic">GitHub</span></a> : '' }
                                            { item.technics.map((desc, key) => (<span className="technic" key={`desc${key}`}>{desc}</span>))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className={"index-wrap" + ( window.location.hash === "#study" ? "" : " slide-hide" )} id="jsLabSliderIndex">
                    <div className="index tens f-eng" id="jsLabSliderIndexTens">
                        <p>0</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                    </div>
                    <div className="index units f-eng" id="jsLabSliderIndexUnits">
                        <p>0</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                    </div>
                </div>
                <ul className="navigator clear-fix" id="labSliderNavigator">
                    { this.laboratories.map((item, key) => {
                        return(
                            <li key={item.id} className={"nav-item" + (key===labSliderIndex ? ' selected':'') }>
                                <button>
                                    <div className="bar"></div>
                                    <div className="bar-hover">
                                        <img alt="thumbnail" src={item.thumbnail} />
                                        <p className="f-eng">{item.title}</p>
                                    </div>
                                </button>
                            </li>
                        ) 
                    })}
                </ul>
            </div>            
        )
    }
}

export default LabSlider;