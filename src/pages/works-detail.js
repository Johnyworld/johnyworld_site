import React, { Component } from 'react';
import dataWorksReverse from '../data/data-works';
import './works-detail.css';
import iconScope from '../images/icon-scope.png';

import BigpictureEnt from './works-detail/bigpicture-ent';

class WorksDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
        this.data = null;
        dataWorksReverse.forEach(item => {
            if (item.slug === this.state.id) {
                this.data = item;
            }
        });
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        let worksDetailContent = null;
        if (this.state.id === 'bigpicture-ent') { worksDetailContent = <BigpictureEnt /> }

        return (
            <div className="works-detail-wrapper">
                <button onClick={this.goBack} className="back-btn">
                    <div className="arrow"></div>
                </button>
                {/* <div className="head">
                    <h1>{this.data.title}</h1>
                </div> */}
                <div className="content">
                    <div className="key-visual">
                        <div className="l-wrapper-wide">
                            <div className="bg" style={{ backgroundImage: 'url(' + this.data.keyvisual + ')' }}></div>
                            <div className="info">
                                <div className="textbox">
                                    <h1 className="f-title">{this.data.title}</h1>
                                    <h2 className="f-subhead">{this.data.comment}</h2>
                                    <p className="f-normal">{
                                        this.data.desc.map(desc => (<p>{desc}</p>))
                                    }</p>
                                </div>
                                <ul className="keywords f-normal">
                                    {this.data.keywords.map( item => {
                                        return (<li>{item}</li> )
                                    })}
                                </ul>
                                {this.data.url ? 
                                    <a href={this.data.url} target="blank" className="btn-wrapper">
                                        <div className="btn">
                                            <img alt="btn-icon" classNam="btn-icon" src={iconScope} />
                                            <p className="btn-text f-subhead">사이트 보기</p>
                                        </div>
                                    </a> : '' }
                            </div>
                        </div>
                    </div>
                    {worksDetailContent}
                </div>
            </div>
        )
    }
}

export default WorksDetail;