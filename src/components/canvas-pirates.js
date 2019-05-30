import React, { Component } from 'react';
import canvasPiratesScript from './canvas-pirates-script';
import './canvas-pirates.css';

class CanvasPirates extends Component {
    componentDidMount() {
        canvasPiratesScript();
    }
    render() {
        return (
            <div className="canvas-pirates-wrap">
                <canvas id="jsCanvasPirates"></canvas>
            </div>
        )
    }
}

export default CanvasPirates;