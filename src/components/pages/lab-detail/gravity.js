import React, { Component } from 'react';
import gravityScript from './gravity-script';

class Gravity extends Component {
    componentDidMount() {
        gravityScript();
    }
    render() {
        return (
            <canvas id="canvasGravity"></canvas>
        )
    }
}

export default Gravity;