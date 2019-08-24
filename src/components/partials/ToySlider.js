import React, { Component } from 'react';

import './ToySlider.scss';
import dataLabSliderReverse from '../../Data/data-lab-slider';
import labSliderScript, { labSliderIndex } from './ToySliderScript';
import { animInLoading, smoothScroll } from '../../Funcs/animates';
import SliderItem from '../slider/SliderItem';

class LabSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSlider : dataLabSliderReverse,
            history :this.props.history
        }
    }

    labSliderResize () {
        if ( window.location.hash === '#study' ) {
            smoothScroll('#homeToySlider', 1000);
        }
    }

    componentDidMount() {
        labSliderScript();
        window.addEventListener( 'resize', this.labSliderResize );
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.labSliderResize );
    }

    handleViewLabDetail(linkTo, propsHistory) {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');

        animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
        
        setTimeout(() => {
            propsHistory.push('/lab/' + linkTo);
        }, 1300);
    }

    render() {
        const {dataSlider} = this.state;
        return(
            <div className="lab-slider-wrapper clear-fix">
                <SliderButtons />
                <SliderMain dataSlider={dataSlider} handleViewLabDetail={this.handleViewLabDetail} propsHistory={this.state.history} />
                <SliderIndex />
                <SliderNav dataSlider={dataSlider} />
            </div>            
        )
    }
}

function SliderButtons() {
    return (
        <div className="btn-wrap">
            <button className="btn left" id="labSliderBtnLeft"></button>
            <button className="btn right" id="labSliderBtnRight"></button>
        </div>
    )
}

function SliderMain({dataSlider, handleViewLabDetail, propsHistory}) {
    return (
        <ul className="slider clear-fix">
            { dataSlider.map((item, key) => {
                let isSelected = false;
                if ( key===labSliderIndex ) isSelected = true;
                return(
                    <SliderItem 
                        key={key} 
                        isSelected={isSelected} 
                        sliderItem={item} 
                        handleViewLabDetail={handleViewLabDetail} 
                        propsHistory={propsHistory}
                    />
                )
            })}
        </ul>
    )
}

function SliderIndex() {
    return (
        <div className={"index-wrap" + ( window.location.hash === "#study" ? "" : " slide-hide" )} id="jsLabSliderIndex">
            <div className="index tens f-eng" id="jsLabSliderIndexTens">
                <ZeroToNine />
            </div>
            <div className="index units f-eng" id="jsLabSliderIndexUnits">
                <ZeroToNine />
            </div>
        </div>
    )
}

function ZeroToNine() {
    return (
        <>
            <p>0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p>
        </>
    )
}

function SliderNav({dataSlider}) {
    return (
        <ul className="navigator clear-fix" id="labSliderNavigator">
            { dataSlider.map((item, key) => {
                let isSelected = false;
                if ( key===labSliderIndex ) isSelected = true;
                return(
                    <li key={item.id} className={"nav-item" + (isSelected ? ' selected':'') }>
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
    )
}

export default LabSlider;