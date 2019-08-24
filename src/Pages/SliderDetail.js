import React, { Component } from 'react';
import { reactRouteScrollTop } from '../Funcs/functions';
import { setMouseHover } from '../Funcs/animates';
import dataLabslider from '../Data/data-lab-slider';

import canvasCollision2Script from './slider-detail/canvas-collision2';
import MarioKart from './slider-detail/mariokart';

import './SliderDetail.scss';

class SliderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : window.location.pathname.split("/", 3)[2],
            loaded : false,
            dataSlider : dataLabslider
        }
        dataLabslider.forEach( item => {
            if ( item.slug === this.state.id ) {
                this.data = item;
            }
        });
    }

    _getCurrent(data) {
        let current;
        data.forEach(item => {
            if (item.slug === this.state.id) {
                current = item;
            }
        });
        return current;
    }

    componentDidMount() {
        this._nowLoading();
    }

    _nowLoading() {
        const { dataSlider } = this.state;
        const { anim_loadingScreenOut } = this.props;
        setTimeout(() => {
            this.setState({
                currentItem: this._getCurrent(dataSlider),
                loaded: true
            });
            anim_loadingScreenOut();
            this._componentDidLoading();
        }, 1000);
    }

    _componentDidLoading() {
        reactRouteScrollTop();
        if ( this.state.id === 'collision2' ) { canvasCollision2Script(); }
        setMouseHover();
    }

    _renderContent() {
        const { currentItem } = this.state;
        let labDetailContent = null;
        if ( this.state.id === 'collision2' ) { labDetailContent = <canvas id="canvasCollision2"></canvas> }
        if ( this.state.id === 'mariojump') { labDetailContent = <MarioKart /> }

        return (
            <>
                <main className="slider-detail">
                    <h1 className="slider-detail-title f-title f-eng-title">{currentItem.title}</h1>
                    {labDetailContent}
                </main>
            </>
        )
    }

    render() {
        return(
            <>
                {this.state.loaded ? this._renderContent() : '' }
            </>
        )
    }
}

export default SliderDetail;