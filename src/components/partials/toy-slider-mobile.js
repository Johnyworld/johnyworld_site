/* eslint-disable no-loop-func */
import React, { Component } from 'react';

import dataLabSliderReverse from '../data/data-lab-slider';

class ToySliderMobile extends Component {
    constructor(props) {
        super(props);
        this.laboratories = dataLabSliderReverse;
    }

    componentDidMount() {
        const jsMobileToySlider = document.getElementById('jsMobileToySlider');
        const mobileSliderItems = jsMobileToySlider.getElementsByClassName('slider-item');
        const sliderItemWidth = mobileSliderItems[0].clientWidth;
        jsMobileToySlider.style.width = (sliderItemWidth + 20) * this.laboratories.length + 'px';
    }

    render() {
        return(
            <div className="mobile-toy-slider-wrap">
                <ul className="mobile-toy-slider" id="jsMobileToySlider">
                    { this.laboratories.map((item, key) => {
                        return (
                            <li key={'slider-item-'+key} className="slider-item" style={{ backgroundImage: 'url('+item.thumbnail+')' }}>
                                <a href={item.url} target="blank" className="link" >
                                    <h3 className="f-heading f-eng-title c-white">{item.title}</h3>
                                </a>
                                <a className="git f-normal c-white" href={item.git} target="blank">View GitHub</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToySliderMobile;