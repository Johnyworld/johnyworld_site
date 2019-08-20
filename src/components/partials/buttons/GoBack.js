import React, {Component} from 'react';
import { animInLoading } from '../../func/animates';
import './GoBack.scss';

export default class GoBack extends Component {
    componentDidMount() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        const jsBtnBack = document.getElementById('jsBtnBack');

        const handleBtnGoBack = () => {
            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
            setTimeout(()=>{
                this.props.goBack();
            }, 1300);
        }

        jsBtnBack.addEventListener('click', handleBtnGoBack);
    }

    render() {
        return (
            <button className="jsAnimButtons back-btn" id="jsBtnBack">
                <div className="arrow"></div>
            </button>
        )
    }
}