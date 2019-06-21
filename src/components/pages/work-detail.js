import React, { Component } from 'react';
import dataWorkReverse from '../data/data-work';
import './work-detail.css';
import { scrollFadeIn, setMouseHover, animInLoading, animOutLoading } from '../func/animates';
import { reloadRoute, reactRouteScrollTop } from '../func/functions';

import BigpictureEnt from './work-detail/bigpicture-ent';
import Bevl from './work-detail/bevl';
import FanclubCoin from './work-detail/fanclub-coin';
import Soohan from './work-detail/soohan';
import Krx from './work-detail/krx';
import Pssd from './work-detail/pssd';
import Camping from './work-detail/camping';

class WorkDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded : false
        }

        this.getState = () => {
            this.state = {
                id: this.props.match.params.workid
            }
        }

        this.getKey = () => {
            dataWorkReverse.forEach((item, key) => {
                if (item.slug === this.state.id) {
                    this.key = key;
                }
            });
        }

        this.init = () => {
            this.data = dataWorkReverse[this.key];

            if (this.key < dataWorkReverse.length) {
                this.prev = dataWorkReverse[this.key + 1];
            }

            if (this.key > 0) {
                this.next = dataWorkReverse[this.key - 1];
            }
        }

        this.loadRoute = () => {
            this.getState();
            this.getKey();
            this.init();
            this.render();
        }

        // this.clickPrev = () => {
        //     const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        //     const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        //     const jsLoading = document.getElementById('jsLoading');
        //     let prevUrl = '/work/' + this.prev.slug.toString();
        //     let history = this.props.history;

        //     animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
        
        //     setTimeout(function(){
        //         reloadRoute(history, prevUrl);
        //     }, 2300);
        // }

        // this.clickNext = () => {
        //     const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        //     const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        //     const jsLoading = document.getElementById('jsLoading');
        //     let nextUrl = '/work/' + this.next.slug.toString();
        //     let history = this.props.history;

        //     animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

        //     setTimeout(function(){
        //         reloadRoute(history, nextUrl);
        //     }, 2100);
        // }
            
        this.loadRoute();
    }    


    componentDidMount() {
        this._nowLoading();
    }

    _definePage() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        const jsViewsiteBtn = document.getElementById('jsViewsiteBtn');
        const jsBtnNext = document.getElementById('jsBtnNext');
        const jsBtnPrev = document.getElementById('jsBtnPrev');

        // HANDLER
        const handleClickPrev = () => {
            let prevUrl = '/work/' + this.prev.slug.toString();
            let history = this.props.history;

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
        
            setTimeout(function(){
                reloadRoute(history, prevUrl);
            }, 2300);
        }

        const handleClickNext = () => {
            let nextUrl = '/work/' + this.next.slug.toString();
            let history = this.props.history;

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

            setTimeout(function(){
                reloadRoute(history, nextUrl);
            }, 2100);
        }

        const handlePageLoaded = () => {
            jsFullScreenWrap01.style.width = '100%';
            jsFullScreenWrap02.style.width = '100%';
            jsLoading.style.display = 'block';
            animOutLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );    
        }
        
        // LISTENER
        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            if (jsViewsiteBtn) {
                scrollFadeIn(nowScroll, jsViewsiteBtn, window.innerHeight+500 );
            }
        });   

        if ( jsBtnNext ) { jsBtnNext.addEventListener('click', handleClickNext); }
        if ( jsBtnPrev ) { jsBtnPrev.addEventListener('click', handleClickPrev); }

        // RUN
        handlePageLoaded();
        reactRouteScrollTop();
        setMouseHover();
    }

    _nowLoading() {
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');

        const handlePageLoaded = () => {
            jsFullScreenWrap01.style.width = '100%';
            jsFullScreenWrap02.style.width = '100%';
            jsLoading.style.display = 'block';
        }

        const handleLoaded = () => {
            setTimeout(() => {
                this.setState({
                    loaded: true
                });
                animOutLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
                this._definePage();
            }, 1000);
        }

        handlePageLoaded();
        handleLoaded();
        // window.addEventListener( 'load', handleLoaded.bind(this));
    }

    _renderContent() {
        let workDetailContent = null;
        if (this.state.id === 'bigpicture-ent') { workDetailContent = <BigpictureEnt /> }
        if (this.state.id === 'bevl') { workDetailContent = <Bevl /> }
        if (this.state.id === 'fanclub-coin') { workDetailContent = <FanclubCoin /> }
        if (this.state.id === 'soo-clinic') { workDetailContent = <Soohan /> }
        if (this.state.id === 'krx') { workDetailContent = <Krx /> }
        if (this.state.id === 'samsung-pssd') { workDetailContent = <Pssd /> }
        if (this.state.id === 'camping-poster') { workDetailContent = <Camping /> }

        return (
            <>
                {this.data.url
                ? <a href={this.data.url} target="blank" className="viewsite-btn is-hidden" id="jsViewsiteBtn"><p>사이트<br />보기</p></a>
                : ''}
                <div className="container">
                    <div className="detail-main">
                        <section>
                            <div className="l-wrapper">
                                <div className="text-wrap title-area">
                                    <h1 className="f-bigtitle f-eng-title">{this.data.title}</h1>
                                    <p className="f-subhead">{this.data.comment}</p>
                                    <div className="info">
                                        <ul className="keywords f-normal">
                                            {this.data.keywords.map((item, index) => {
                                                return (<li key={`list-${index}`}>{item}</li>)
                                            })}
                                            {this.data.url ?
                                            <li><a href={this.data.url} target="blank" className="btn-viewsite">사이트 보기 ></a></li> 
                                            : ''}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>  
                        <section className="sct-mockup-image">
                            <div className="l-wrapper">
                                <div className="bgimg-wrap">
                                    <div className="bgimg" style={{ backgroundColor: '#333', height: 628 }}></div>
                                    {/* <div className="bgimg" style={{ backgroundImage: 'url(' + this.data.keyvisual + ')' }}></div> */}
                                </div>
                            </div>
                        </section>
                        <section className="summary">
                            <div className="l-wrapper">
                                <div className="text-wrap">
                                    <ul className="l-row">
                                        <li className="l-col l-col-6-12"><h2 className="f-title">프로젝트<br />개요</h2></li>
                                        <li className="l-col l-col-6-12">
                                            { this.data.summary.map( (item, key) => {
                                                return (
                                                    <p key={'summary-item'+{key}} className="f-normal">
                                                        <strong>{item.title}</strong>
                                                        { item.desc.map( (descItem, key) => <>{descItem}<br /></> ) }
                                                    </p>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="l-wrapper-full">
                                <div className="bgimg-wrap">
                                    <div className="bgimg" style={{ backgroundColor: '#333', height: 485 }}></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {workDetailContent}
                </div>
                <div className="next-and-prev clear-fix">
                    <div className="l-wrapper-wide">
                        {
                            this.next ? 
                                <div className="btn-wrap next" id="jsBtnNext" /*onClick={this.clickNext}*/>
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
                                <div className="btn-wrap prev" id="jsBtnPrev" /*onClick={this.clickPrev}*/>
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
            </>
        )
    }

    render() {
        return(
            <main className="work-detail-wrapper">
                {this.state.loaded ? this._renderContent() : 'loading...' }
            </main>
        )
    }
}

export default WorkDetail;