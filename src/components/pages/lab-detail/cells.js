import React, { Component } from 'react';
import cellsScript from './cells-script';

class Gravity extends Component {
    componentDidMount() {
        cellsScript();
    }
    render() {
        return (
            <canvas id="canvasCells"></canvas>
        )
    }
}

export default Gravity;