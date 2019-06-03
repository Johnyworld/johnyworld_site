import React, { Component } from 'react';
import sMarioMain from './s-mario/js/main'

class SuperMario extends Component {
    componentDidMount() {
        sMarioMain();
    }

    render() {
        return (
            <canvas id="canvasSupermario" width="256" height="240"></canvas>
        )
    }
}

export default SuperMario;