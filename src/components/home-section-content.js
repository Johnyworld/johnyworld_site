import React, { Component } from 'react';
import CanvasPirates from './canvas-pirates';
import LabSlider from '../components/lab-slider';
import WorksGrid from '../components/works-grid';
import './home-section-content.css';

class HomeSectionContent extends Component {
    render() {
        if ( this.props.content === "Javascript" ) {
            return (
                <div className="content">
                    <CanvasPirates />
                </div>
            )
        }

        if ( this.props.content === "Laboratory" ) {
            return (
                <div className="content">
                    <LabSlider />
                </div>
            )
        }

        if ( this.props.content === "Works" ) {
            return (
                <div className="content">
                    <WorksGrid />
                </div>
            )
        }

        if ( this.props.content === "Portfolio History" ) {
            return (
                <div className="content">
                    Hello Portfolio
                </div>
            )
        }
    }
}

export default HomeSectionContent;