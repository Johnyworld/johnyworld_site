/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './lab-slider.css';
import dataLabSliderReverse from '../data/data-lab-slider';
import labSliderScript from './lab-slider-script';
import { labSliderIndex } from './lab-slider-script';
class LabSlider extends Component {
    constructor(props) {
        super(props);
        this.laboratories = dataLabSliderReverse;
    }

    componentDidMount() {
        labSliderScript();
    }

    render() {
        
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
                                    <div className="image-wrap">
                                        <div className="thumbnail" style={{backgroundImage : 'url(' + item.thumbnail + ')' }}></div>
                                    </div>
                                    <div className="text-wrap">
                                        { item.url 
                                            ? <a className="title-wrap" href={item.url}>
                                                {labTitleRender}
                                            </a>
                                            : <Link to={`/lab/${item.slug}`} className="title-wrap">
                                                {labTitleRender}
                                            </Link>
                                        }
                                        <div className="explain f-normal c-gray-dark">
                                            <p className="comment c-gray-bright">{item.comment}</p>
                                            { item.desc.map((desc, key) => (<p className="explain-p" key={`desc${key}`}>{desc}</p>))}
                                        </div>
                                        {/* <p className="f-normal f-eng c-wine-dark">{item.date}</p> */}
                                        <div className="technics-wrap f-normal f-eng c-blue-bright">{ item.technics.map((desc, key) => (<span className="technic" key={`desc${key}`}>{desc}</span>))}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <p className="index f-eng" id="jsLabSliderIndex">02</p>
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