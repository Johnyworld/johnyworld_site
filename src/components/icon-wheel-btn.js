import React, { Component } from 'react';
import './icon-wheel-btn.css';

class IconWheelBtn extends Component {
    render() {
        return (
            <div className="IconWheelBtn-wrap" id={this.props.tagId}>
                <p className="f-normal">{this.props.text}</p>
                <svg className="svgWheelbtn" id="svgWheelbtn" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" width="28px" height="47px" xml="preserve">
                <style>
                    { `.svgWheelbtn .st0 { }` }
                    { `.svgWheelbtn .st1 { }` }
                </style>
                <defs>
                </defs>
                <g className="st0-wrap">
                    <path className="st0" d="M14.5,46h-2c-6.6,0-12-5.4-12-12V12.5c0-6.6,5.4-12,12-12h2c6.6,0,12,5.4,12,12V34C26.5,40.6,21.1,46,14.5,46z"/>
                </g>
                <g className="st1-wrap">
                    <path className="st1" d="M13.7,22.2h-0.3c-1.1,0-2-0.9-2-2v-9c0-1.1,0.9-2,2-2h0.3c1.1,0,2,0.9,2,2v9C15.7,21.3,14.8,22.2,13.7,22.2z"/>
                </g>    
            </svg>
            </div>
        )
    }
};
export default IconWheelBtn;


