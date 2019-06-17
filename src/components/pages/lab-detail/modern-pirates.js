import React, { Component } from 'react';
import canvasPiratesScript from './modern-pirates-script';
import modernPiratesKeyMap2 from '../../../images/keymap2.png';

class ModernPiratesDetail extends Component { 
    componentDidMount() {
        canvasPiratesScript();
    }
    render() {
        return (
            <div className="lab-center modern-pirates-wrap modern-pirates-detail">
                <canvas id="jsCanvasPirates"></canvas>
                <img className="modern-pirates-keymap2" src={modernPiratesKeyMap2} alt="modern-pirates-keymap2" />
            </div>
        )
    }
}

export default ModernPiratesDetail;