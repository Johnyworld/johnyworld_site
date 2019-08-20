import React, {Component} from 'react';
import { topBtnHandler } from '../../func/functions';
import './GoTop.scss';

export default class GoTop extends Component {
    componentDidMount() {
        const jsBtnTop = document.getElementById('jsBtnTop');
        jsBtnTop.addEventListener('click', topBtnHandler );
    }

    render() {
        return (
            <button className="header-buttons button-top is-hidden" id="jsBtnTop">
                <div className="icon"></div>
                <p className="f-subhead f-eng-title">Top</p>
            </button>
        )
    }
}
