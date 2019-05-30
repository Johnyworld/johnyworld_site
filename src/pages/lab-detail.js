import React, { Component } from 'react';
import dataLabslider from '../data/data-lab-slider';
import canvasCollision1Script from './lab-detail/canvas-collision1';
import canvasCollision2Script from './lab-detail/canvas-collision2';
import Conv250 from './lab-detail/conv250';
import ModernPiratesDetail from './lab-detail/modern-pirates';
import BangCard from './lab-detail/bangcard';
import RpgMoving from './lab-detail/rpg-moving';
// import MarioKart from './lab-detail/mariokart';
import './lab-detail.css';

class LabDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id
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
        if ( this.state.id === 'collision1' ) { canvasCollision1Script(); }
        if ( this.state.id === 'collision2' ) { canvasCollision2Script(); }
    }

    render() {
        let labDetailContent = null;
        if ( this.state.id === 'collision1' ) { labDetailContent = <canvas id="canvasCollision1"></canvas> }
        if ( this.state.id === 'collision2' ) { labDetailContent = <canvas id="canvasCollision2"></canvas> }
        if ( this.state.id === 'conv250' ) { labDetailContent = <Conv250 /> }
        if ( this.state.id === 'modern-pirates' ) { labDetailContent = <ModernPiratesDetail /> }
        if ( this.state.id === 'bangcard' ) { labDetailContent = <BangCard /> }
        if ( this.state.id === 'rpg-moving') { labDetailContent = <RpgMoving /> }
        // if ( this.state.id === 'mariojump') { labDetailContent = <MarioKart /> }

        return (
            <div className="lab-detail-wrapper">
                <button onClick={this.goBack} className="back-btn">
                    <div className="arrow"></div>
                </button>
                <div className="head">
                    <h1>{this.data.title}</h1>
                </div>
                <div className="lab-detail-content">
                    {labDetailContent}
                </div>
            </div>
        )
    }
}


// const LabDetail = ({match}) => {
//     return (
//         <div style={{background: 'white'}}>
//             {match.params.id}
//             LabDetail
//         </div>
//     )
// }

export default LabDetail;