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
        function pad(n, width) {
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
        }
        return(
            <div className="lab-slider-wrapper clear-fix">
                <div className="btn-wrap">
                    <div className="btn left" id="labSliderBtnLeft"></div>
                    <div className="btn right" id="labSliderBtnRight"></div>
                </div>
                <ul className="slider clear-fix">
                    { this.laboratories.map((item, key) => {
                        return(
                            <li className={"slider-item" + (key===labSliderIndex ? ' selected':'') } key={item.id}>
                                <div className="slider-inner">
                                    <div className="image-wrap"><div className="thumbnail" style={{backgroundImage : 'url(' + item.thumbnail + ')' }}></div></div>
                                    <div className="text-wrap">
                                        <p className="index f-eng">{ pad(key+1, 2) }<span> / { pad(this.laboratories.length, 2) }</span></p>
                                        <div className="title-wrap">
                                            <h2>{item.title}</h2>
                                            { item.url ? 
                                                <a href={item.url} target="blank" className="btn-more"><div className="bg"></div><p className="txt">새창보기</p></a>
                                                :
                                                <Link to={`/lab/${item.slug}`} className="btn-more"><div className="bg"></div><p className="txt">보러가기</p></Link>                                                
                                            }
                                            <p className="comment c-blue-bright">{item.comment}</p>
                                        </div>
                                        <div className="explain f-normal c-blue-dark">{ item.desc.map((desc, key) => (<p key={`desc${key}`}>{desc}</p>))}</div>
                                        {/* <p className="f-normal f-eng c-wine-dark">{item.date}</p> */}
                                        <div className="technics-wrap f-normal f-eng c-wine-bright">{ item.technics.map((desc, key) => (<span className="technic" key={`desc${key}`}>{desc}</span>))}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <ul className="navigator clear-fix" id="labSliderNavigator">
                    { this.laboratories.map((item, key) => {
                        return(
                            <li key={item.id} className={"nav-item" + (key===labSliderIndex ? ' selected':'') }>
                                <div className="bar"></div>
                                <div className="bar-hover">
                                    <img alt="thumbnail" src={item.thumbnail} />
                                    <p>{item.title}</p>
                                </div>
                            </li>
                        ) 
                    })}
                </ul>
            </div>            
        )
    }
}

export default LabSlider;