import React, { Component } from 'react';
import dataLabslider from '../data/data-lab-slider';
import canvasCollision1Script from './lab-detail/canvas-collision1';
import canvasCollision2Script from './lab-detail/canvas-collision2';
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
    }

    componentDidMount() {
        if ( this.state.id === 'collision1' ) { canvasCollision1Script(); }
        if ( this.state.id === 'collision2' ) { canvasCollision2Script(); }
    }

    render() {
        let labDetailContent = null;
        if ( this.state.id === 'collision1' ) { labDetailContent = <canvas id="canvasCollision1"></canvas> }
        if ( this.state.id === 'collision2' ) { labDetailContent = <canvas id="canvasCollision2"></canvas> }
        

        return (
            <div className="lab-detail-wrapper">
                <div className="back-btn"></div>
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