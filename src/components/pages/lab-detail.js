import React, { Component } from 'react';
import { reactRouteScrollTop } from '../func/functions';
import { setMouseHover, animOutLoading, setBeforeLoading } from '../func/animates';
import dataLabslider from '../data/data-lab-slider';

import canvasCollision2Script from './lab-detail/canvas-collision2';
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
        if ( this.state.id === 'collision2' ) { canvasCollision2Script(); }
        setMouseHover();
    }

    _renderContent() {
        let labDetailContent = null;
        if ( this.state.id === 'collision2' ) { labDetailContent = <canvas id="canvasCollision2"></canvas> }
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