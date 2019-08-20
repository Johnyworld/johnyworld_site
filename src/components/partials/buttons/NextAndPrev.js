import React, {Component} from 'react';
import './NextAndPrev.scss';

import { animInLoading } from '../../func/animates';
import { reloadRoute } from '../../func/functions';

export default class NextAndPrev extends Component {

    componentDidMount() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        const jsBtnNext = document.getElementById('jsBtnNext');
        const jsBtnPrev = document.getElementById('jsBtnPrev');

        const { next, prev, history } = this.props;

        const handleClickPrev = () => {
            let prevUrl = '/work/' + prev.slug.toString();

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
        
            setTimeout(function(){
                reloadRoute(history, prevUrl);
            }, 1300);
        }

        const handleClickNext = () => {
            let nextUrl = '/work/' + next.slug.toString();

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

            setTimeout(function(){
                reloadRoute(history, nextUrl);
            }, 1300);
        }

        if ( jsBtnNext ) { jsBtnNext.addEventListener('click', handleClickNext); }
        if ( jsBtnPrev ) { jsBtnPrev.addEventListener('click', handleClickPrev); }
    }

    render(){
        const {next, prev} = this.props;
        return (
            <div className="next-and-prev clear-fix">
                <div className="l-wrapper">
                    {
                        next ? 
                            <button className="btn-wrap next clear-fix" id="jsBtnNext" >
                                <div className="stick"></div>
                                <div className="radius">
                                    <div className="bg" style={{ backgroundImage: 'url(' + next.thumbnail + ')' }}></div>
                                </div>
                                <div className="text-wrap">
                                    <p className="f-normal">NEXT</p>
                                    <p className="f-subhead">{next.title}</p>
                                </div>
                            </button>
                        : ''
                    }
                    {
                        prev ?
                            <button className="btn-wrap prev clear-fix" id="jsBtnPrev" >
                                <div className="stick"></div>
                                <div className="radius">
                                    <div className="bg" style={{ backgroundImage: 'url(' + prev.thumbnail + ')' }}></div>
                                </div>
                                <div className="text-wrap">
                                    <p className="f-normal">PREV</p>
                                    <p className="f-subhead">{prev.title}</p>
                                </div>
                            </button>
                        : ''
                    }
                </div>
            </div>
        )
    }
}