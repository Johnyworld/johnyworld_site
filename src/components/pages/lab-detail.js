import React, { Component } from 'react';
import { reactRouteScrollTop } from '../func/functions';
import { setMouseHover, animOutLoading, setBeforeLoading } from '../func/animates';
import dataLabslider from '../data/data-lab-slider';

import canvasCollision1Script from './lab-detail/canvas-collision1';
import canvasCollision2Script from './lab-detail/canvas-collision2';
import Conv250 from './lab-detail/conv250';
import ModernPiratesDetail from './lab-detail/modern-pirates';
import BangCard from './lab-detail/bangcard';
import Gravity from './lab-detail/gravity';
import Cells from './lab-detail/cells';
import RpgMoving from './lab-detail/rpg-moving';
import MarioKart from './lab-detail/mariokart';


import './lab-detail.css';

class LabDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            loaded : false,
        }
        this.data = null;
        dataLabslider.forEach( item => {
            if ( item.slug === this.state.id ) {
                this.data = item;
            }
        });
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        this._nowLoading();
    }

    _nowLoading() {
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');

        const handleLoaded = () => {
            setTimeout(() => {
                this.setState({
                    loaded: true
                });
                animOutLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
                this._animates();
            }, 1000);
        }

        setBeforeLoading(jsFullScreenWrap01, jsFullScreenWrap02, jsLoading);
        handleLoaded();
        
        // window.addEventListener( 'load', handleLoaded.bind(this));
    }

    _animates() {
        reactRouteScrollTop();
        if ( this.state.id === 'collision1' ) { canvasCollision1Script(); }
        if ( this.state.id === 'collision2' ) { canvasCollision2Script(); }
        setMouseHover();
    }

    _renderContent() {
        let labDetailContent = null;
        if ( this.state.id === 'collision1' ) { labDetailContent = <canvas id="canvasCollision1"></canvas> }
        if ( this.state.id === 'collision2' ) { labDetailContent = <canvas id="canvasCollision2"></canvas> }
        if ( this.state.id === 'conv250' ) { labDetailContent = <Conv250 /> }
        if ( this.state.id === 'modern-pirates' ) { labDetailContent = <ModernPiratesDetail /> }
        if ( this.state.id === 'bangcard' ) { labDetailContent = <BangCard /> }
        if ( this.state.id === 'rpg-moving') { labDetailContent = <RpgMoving /> }
        if ( this.state.id === 'gravity') { labDetailContent = <Gravity /> }
        if ( this.state.id === 'cells') { labDetailContent = <Cells /> }
        if ( this.state.id === 'mariojump') { labDetailContent = <MarioKart /> }

        return (
            <>
                <content className="lab-detail">
                    <h1 className="lab-detail-title f-title f-eng-title">{this.data.title}</h1>
                    {labDetailContent}
                </content>
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

export default LabDetail;