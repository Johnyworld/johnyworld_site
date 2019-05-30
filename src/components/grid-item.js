import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './grid-item.css';

class GridItem extends Component {
    render() {
        return (
            <Link to={`/works/${this.props.link}`} className="grid-item">
                <div className="background" style={{backgroundImage: 'url(' + this.props.bg + ')'}}></div>
                <div className="textbox">
                    <div className="top">
                        <h3 className="f-subhead f-eng">{this.props.title}</h3>
                        <p className="f-normal">{this.props.comment}</p>
                    </div>
                    <div className="bottom">
                        <p className="f-normal f-eng date">{this.props.date}</p>
                        <p className="f-normal f-eng category">{this.props.category}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default GridItem;