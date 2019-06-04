import React, { Component } from 'react';
import dataWorksReverse from '../data/data-works';
import './works-detail.css';
// import iconScope from '../images/icon-scope.png';
import { scrollFloating, scrollFadeIn, reactRouteScrollTop, reloadRoute } from '../js/animate';

import BigpictureEnt from './works-detail/bigpicture-ent';

class WorksDetail extends Component {
    constructor(props) {
        super(props);
        
        this.getState = () => {
            this.state = {
                id: this.props.match.params.id
            }
        }

        this.getKey = () => {
            dataWorksReverse.forEach((item, key) => {
                if (item.slug === this.state.id) {
                    this.key = key;
                }
            });
        }

        this.init = () => {
            this.data = dataWorksReverse[this.key];

            if (this.key < dataWorksReverse.length) {
                this.prev = dataWorksReverse[this.key + 1];
            }

            if (this.key > 0) {
                this.next = dataWorksReverse[this.key - 1];
            }
        }

        this.loadRoute = () => {
            this.getState();
            this.getKey();
            this.init();
            this.render();
        }

        this.clickPrev = () => {
            let prevUrl = '/works/' + this.prev.slug.toString()
            reloadRoute(this.props.history, prevUrl);
        }

        this.clickNext = () => {
            let nextUrl = '/works/' + this.next.slug.toString()
            reloadRoute(this.props.history, nextUrl);
        }
            
        this.goBack = this.goBack.bind(this);

        this.loadRoute();
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        const jsWorksDetailKeyVisual = document.getElementById('jsWorksDetailKeyVisual');
        const jsWorksDetailTitle = document.getElementById('jsWorksDetailTitle');
        const jsViewsiteBtn = document.getElementById('jsViewsiteBtn');
        
        reactRouteScrollTop();

        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            scrollFloating(nowScroll, jsWorksDetailTitle, 5);
            scrollFloating(nowScroll, jsWorksDetailKeyVisual, 2);
            scrollFadeIn(nowScroll, jsViewsiteBtn, window.innerHeight );
        });   
    }

    render() {
        let worksDetailContent = null;
        if (this.state.id === 'bigpicture-ent') { worksDetailContent = <BigpictureEnt /> }

        return (
            <div className="works-detail-wrapper">
                <button onClick={this.goBack} className="back-btn">
                    <div className="arrow"></div>
                </button>
                <a href={this.data.url} target="blank" className="viewsite-btn is-hidden" id="jsViewsiteBtn"><p>사이트<br />보기</p></a>
                {/* <div className="head">
                    <h1>{this.data.title}</h1>
                </div> */}
                <div className="content">
                    <div className="key-visual">
                        <div className="l-wrapper-wide">
                            <div className="bg-wrap">
                                <div className="bg" id="jsWorksDetailKeyVisual" style={{ backgroundImage: 'url(' + this.data.keyvisual + ')' }}></div>
                                <div className="textbox" id="jsWorksDetailTitle">
                                    <h1 className="f-title">{this.data.title}</h1>
                                    <h2 className="f-subhead">{this.data.comment}</h2>
                                </div>
                            </div>
                            <div className="info">
                                <ul className="keywords f-normal">
                                    {this.data.keywords.map((item, index) => {
                                        return (<li key={`list-${index}`}>{item}</li>)
                                    })}
                                    {this.data.url ?
                                    <li><a href={this.data.url} target="blank" className="btn-viewsite">사이트 보기 ></a></li> : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {worksDetailContent}
                </div>
                <div className="next-and-prev clear-fix">
                    <div className="l-wrapper-wide">
                        {
                            this.next ? 
                                <div className="btn-wrap next" onClick={this.clickNext}>
                                    <div className="stick"></div>
                                    <div className="radius">
                                        <div className="bg" style={{ backgroundImage: 'url(' + this.next.thumbnail + ')' }}></div>
                                    </div>
                                    <div className="text-wrap">
                                        <p className="f-normal">NEXT</p>
                                        <p className="f-subhead">{this.next.title}</p>
                                    </div>
                                </div>
                            : ''
                        }
                        {
                            this.prev ?
                                <div className="btn-wrap prev" onClick={this.clickPrev}>
                                    <div className="stick"></div>
                                    <div className="radius">
                                        <div className="bg" style={{ backgroundImage: 'url(' + this.prev.thumbnail + ')' }}></div>
                                    </div>
                                    <div className="text-wrap">
                                        <p className="f-normal">PREV</p>
                                        <p className="f-subhead">{this.prev.title}</p>
                                    </div>
                                </div>
                                : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default WorksDetail;