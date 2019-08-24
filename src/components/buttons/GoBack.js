import React, {Component} from 'react';
import './GoBack.scss';

export default class GoBack extends Component {
    render() {
        const { func_goBack } = this.props;
        return (
            <button className="jsAnimButtons back-btn" id="jsBtnBack" onClick={func_goBack}>
                <div className="arrow"></div>
            </button>
        )
    }
}