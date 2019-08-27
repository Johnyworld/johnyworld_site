import React, {Component} from 'react';
import './NextAndPrev.scss';

export default class NextAndPrev extends Component {
    render(){
        const {next, prev, func_moveToRoute} = this.props;
        return (
            <div className="next-and-prev clear-fix">
                <div className="l-wrapper">
                    {
                        next ? 
                            <button className="btn-wrap next clear-fix" id="jsBtnNext" data-goto={'/work/'+next.slug} onClick={func_moveToRoute}>
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
                            <button className="btn-wrap prev clear-fix" id="jsBtnPrev" data-goto={'/work/'+prev.slug} onClick={func_moveToRoute}>
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