import React, { Component } from 'react';
import rpgMovingScript from './rpg-moving-script';

import './rpg-moving.css';

class RpgMoving extends Component {
    componentDidMount() {
        rpgMovingScript();
    }

    render() {
        return (
            <div className="rpg-moving-wrapper">
                <canvas id="rpgMovingScreen" width="480" height="320"></canvas>
                <canvas id="rpgMovingScreen2" width="480" height="320"></canvas>
            </div>
        )
    }
}

export default RpgMoving;