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
        const sliderItemGap = 20;
        const sliderItemWidth = mobileSliderItems[0].clientWidth + sliderItemGap;

        let sliderLength = 0;
        for ( let i=0; i<this.laboratories.length; i++ ) { if(this.laboratories[i].forMobile) sliderLength += 1}
        let toySliderWidth = sliderItemWidth * sliderLength;

        jsMobileToySlider.style.width = toySliderWidth + 'px';
    }

    render() {
        return(
            <div className="mobile-toy-slider-wrap">
                <ul className="mobile-toy-slider" id="jsMobileToySlider">
                    { this.laboratories.map((item, key) => {
                        return (
                            item.forMobile ?
                            <li key={'slider-item-'+key} className="slider-item" style={{ backgroundImage: 'url('+item.thumbnail+')' }}>
                                <a href={item.url} target="blank" className="link" >
                                    <h3 className="f-heading f-eng-title c-white">{item.title}</h3>
                                </a>
                                <a className="git f-normal c-white" href={item.git} target="blank">View GitHub</a>
                            </li>
                            : null
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToySliderMobile;