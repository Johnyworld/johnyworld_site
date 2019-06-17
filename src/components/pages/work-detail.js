import React, { Component } from 'react';
import dataWorksReverse from '../data/data-works';
import './work-detail.css';
import { scrollFloating, scrollFadeIn, setMouseHover, animInLoading, animOutLoading } from '../func/animates';
import { reloadRoute, reactRouteScrollTop } from '../func/functions';

import BigpictureEnt from './works-detail/bigpicture-ent';
import Bevl from './works-detail/bevl';
import FanclubCoin from './works-detail/fanclub-coin';
import Soohan from './works-detail/soohan';
import Krx from './works-detail/krx';
import Pssd from './works-detail/pssd';
import Camping from './works-detail/camping';

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
        console.log(this.state);
    }

    _definePage() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        const jsWorksDetailKeyVisual = document.getElementById('jsWorksDetailKeyVisual');
        const jsWorksDetailTitle = document.getElementById('jsWorksDetailTitle');
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
            scrollFloating(nowScroll, jsWorksDetailTitle, 5);
            scrollFloating(nowScroll, jsWorksDetailKeyVisual, 2);
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
        document.body.style.overflow= 'hidden';
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
                console.log(this.state);
                animOutLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
                this._definePage();
            }, 1000);
        }

        handlePageLoaded();
        handleLoaded();
        // window.addEventListener( 'load', handleLoaded.bind(this));
    }

    _renderContent() {
        let worksDetailContent = null;
        if (this.state.id === 'bigpicture-ent') { worksDetailContent = <BigpictureEnt /> }
        if (this.state.id === 'bevl') { worksDetailContent = <Bevl /> }
        if (this.state.id === 'fanclub-coin') { worksDetailContent = <FanclubCoin /> }
        if (this.state.id === 'soo-clinic') { worksDetailContent = <Soohan /> }
        if (this.state.id === 'krx') { worksDetailContent = <Krx /> }
        if (this.state.id === 'samsung-pssd') { worksDetailContent = <Pssd /> }
        if (this.state.id === 'camping-poster') { worksDetailContent = <Camping /> }

        return (
            <>
                <div className="works-detail-wrapper">
                    {this.data.url
                    ? <a href={this.data.url} target="blank" className="viewsite-btn is-hidden" id="jsViewsiteBtn"><p>사이트<br />보기</p></a>
                    : ''}
                    <div className="content">
                        <div className="key-visual">
                            <div className="l-wrapper-wide">
                                <div className="bg-wrap">
                                    <div className="bg" id="jsWorksDetailKeyVisual" style={{ backgroundImage: 'url(' + this.data.keyvisual + ')' }}></div>
                                    <div className="textbox" id="jsWorksDetailTitle">
                                        <h1 className="f-title f-eng-title">{this.data.title}</h1>
                                        <p className="f-subhead c-blue-bright">{this.data.comment}</p>
                                    </div>
                                </div>
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
                        {worksDetailContent}
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
                </div>
            </>
        )
    }

    render() {
        return(
            <content>
                {this.state.loaded ? this._renderContent() : 'loading...' }
            </content>
        )
    }
}

export default WorkDetail;