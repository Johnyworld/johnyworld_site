import React, { Component } from 'react';
import canvasPiratesScript from '../../components/canvas-pirates-script';
import '../../components/canvas-pirates.css';

class ModernPiratesDetail extends Component { 
    componentDidMount() {
        canvasPiratesScript();
    }
    render() {
        return (
            <div className="canvas-pirates-wrap canvas-pirates-detail">
                <canvas id="jsCanvasPirates"></canvas>
            </div>
        )
    }
}

export default ModernPiratesDetail;