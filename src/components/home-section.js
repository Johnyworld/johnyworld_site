import React, { Component } from 'react';
import './home-section.css';

class HomeSectionTextBox extends Component {
    render() {
        return (
            <div className="textbox">
                <h2 className="f-title">{this.props.title}</h2>
                <p className="f-normal"><strong>{this.props.strong}</strong></p>
                <div className="f-normal">
                    {this.props.desc.map((element, key) => {
                        return (
                            <p key={`desc${key}`}>
                                {element}
                                <br />
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomeSectionTextBox;