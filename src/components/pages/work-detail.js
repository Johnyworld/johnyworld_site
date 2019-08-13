import React, { Component } from 'react';
import dataWorkReverse from '../data/data-work';
import './work-detail.css';
import { scrollFadeIn, 
    setMouseHover, 
    scrollParallaxImages,
    scrollFloating,
    setBeforeLoading,
    loadHeader,
    animInLoading, 
    animOutLoading, 
    animInAppear } from '../func/animates';
import { reloadRoute, reactRouteScrollTop } from '../func/functions';

import deviceMobileBg from '../../images/work-detail/devices-mobile.png';
import BigpictureEnt from './work-detail/bigpicture-ent';
import FanclubCoin from './work-detail/fanclub-coin';
import Soohan from './work-detail/soohan';
import Krx from './work-detail/krx';
import Pssd from './work-detail/pssd';
import Camping from './work-detail/camping';
import TheFocus from './work-detail/the-focus';

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            id: this.props.match.params.workid,
            isMobile : navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
            dataWork : dataWorkReverse
        }
    }    

    _getIndex(data) {
        let index;
        data.forEach((item, key) => {
            if (item.slug === this.state.id) {
                index = key;
            }
        });
        return index;
    }
    
    componentDidMount() {
        this._nowLoading();
    }

    _animates() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        const jsViewsiteBtn = document.getElementById('jsViewsiteBtn');
        const jsBtnNext = document.getElementById('jsBtnNext');
        const jsBtnPrev = document.getElementById('jsBtnPrev');
        const jsAppearBtT = document.getElementsByClassName('jsAppearBtT');
        const jsAppearSlideToR = document.getElementsByClassName('jsAppearSlideToR');
        const jsMobileMockup = document.getElementById('jsMobileMockup');
        const next = this.state.dataWork[this.state.index+1];
        const prev = this.state.dataWork[this.state.index-1];

        // HANDLER
        const handleClickPrev = () => {
            let prevUrl = '/work/' + prev.slug.toString();
            let history = this.props.history;

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
        
            setTimeout(function(){
                reloadRoute(history, prevUrl);
            }, 1300);
        }

        const handleClickNext = () => {
            let nextUrl = '/work/' + next.slug.toString();
            let history = this.props.history;

            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

            setTimeout(function(){
                reloadRoute(history, nextUrl);
            }, 1300);
        }
        
        // LISTENER
        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            if (jsMobileMockup) {
                scrollFloating( nowScroll, jsMobileMockup, -5 );
            }
            if (jsViewsiteBtn) {
                scrollFadeIn(nowScroll, jsViewsiteBtn, window.innerHeight+500 );
            }
        });   

        if ( jsBtnNext ) { jsBtnNext.addEventListener('click', handleClickNext); }
        if ( jsBtnPrev ) { jsBtnPrev.addEventListener('click', handleClickPrev); }

        // RUN  
        reactRouteScrollTop();
        setMouseHover();
        animInAppear(jsAppearBtT, 800);
        animInAppear(jsAppearSlideToR, 1500);
        scrollParallaxImages( jsAppearSlideToR );
    }

    _nowLoading() {
        const dataWork = this.state.dataWork;
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const headerButtons = document.getElementsByClassName('header-buttons');

        const handleLoaded = () => {
            setTimeout(() => {
                this.setState({
                    index: this._getIndex(dataWork),
                    loaded: true
                });
                animOutLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
                this._animates();
            }, 1000);
        }

        setBeforeLoading(jsFullScreenWrap01, jsFullScreenWrap02, jsLoading);
        handleLoaded();
        loadHeader(headerButtons);
    }

    _renderContent() {
        const { id } = this.state;
        const next = this.state.dataWork[this.state.index+1];
        const prev = this.state.dataWork[this.state.index-1];
        const presentData = this.state.dataWork[this.state.index];
        const { title, comment, summary, keywords, date, url, mobileScreen, screen, keyvisual } = presentData;
        
        // Get Detail Component.
        let workDetailContent = null;
        if (id === 'bigpicture-ent') { workDetailContent = <BigpictureEnt /> }
        if (id === 'fanclub-coin') { workDetailContent = <FanclubCoin /> }
        if (id === 'soo-clinic') { workDetailContent = <Soohan /> }
        if (id === 'krx') { workDetailContent = <Krx /> }
        if (id === 'samsung-pssd') { workDetailContent = <Pssd /> }
        if (id === 'camping-poster') { workDetailContent = <Camping /> }
        if (id === 'the-focus') { workDetailContent = <TheFocus /> }

        // Get Title splited for align.
        let splitTitle = title.split(' ');      

        return (
            <>
                {url
                ? <a href={url} target="blank" className="viewsite-btn is-hidden" id="jsViewsiteBtn"><p>사이트<br />보기</p></a>
                : ''}
                <div className="container">
                    <div className="detail-main">
                        {/* 제목 섹션 */}
                        {/* ----------------------------- */}
                        <section>
                            <div className="l-wrapper">
                                <div className="text-wrap title-area" id="jsTitleArea">
                                    <h1 className="f-bigtitle f-eng-title jsTitleChildren jsAppearBtT">
                                        { splitTitle.map((item, key) => {
                                            return (
                                                key === 0 
                                                ? <span key={`detail-title-${key}`}>{item}<br /></span> 
                                                : <span key={`detail-title-${key}`}>{item}&nbsp;</span> 
                                                )}
                                            )
                                        } 
                                    </h1>
                                    <p className="f-heading jsTitleChildren jsAppearBtT">{comment}</p>
                                    <div className="info jsTitleChildren jsAppearBtT">
                                        <ul className="keywords f-normal">
                                            <li>{date}</li>
                                            {keywords.map((item, key) => {
                                                return (<li key={`list-${key}`}>{item}</li>)
                                            })}
                                            {url ?
                                            <li><a href={url} target="blank" className="btn-viewsite">사이트 보기 ></a></li> 
                                            : ''}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>  

                        {/* 목업 섹션 */}
                        {/* ----------------------------- */}
                        <section>
                            <div className="l-wrapper">
                                <div className="mockup-wrap">
                                    <div className="mockup-img-wrap jsAppearSlideToR">
                                        <img className={'mockup-img' + (mobileScreen ? ' with-mobile' :'') } alt="목업" src={screen} />
                                    </div>
                                    {
                                        mobileScreen ?
                                        <div id="jsMobileMockup" >
                                            <div className="mobile-img jsAppearBtT" style={{ backgroundImage: 'url(' + deviceMobileBg + ')' }}>
                                                <img className="mobile-img-screen" alt="목업-모바일" src={mobileScreen} />
                                            </div>
                                        </div>
                                        : ''
                                    }
                                </div>
                            </div>
                        </section>

                        {/* 프로젝트 개요 섹션 */}
                        {/* ----------------------------- */}
                        <section className="sec-summary">
                            <div className="l-wrapper">
                                <div className="text-wrap">
                                    <ul className="l-row">
                                        <li className="l-col l-col-6-12 l-col-m-12-12"><h2 className="f-title jsAppearBtT">프로젝트 <br className="dis-m" />개요</h2></li>
                                        <li className="l-col l-col-6-12 l-col-m-12-12">
                                            { summary.map( (item, key) => {
                                                return (
                                                    <p key={`summary-item-${key}`} className="f-normal jsAppearBtT">
                                                        <strong>{item.title}</strong>
                                                        { item.desc.map( (descItem, key) => <span key={`${item.title}-${key}`}>{descItem}<br /></span> ) }
                                                    </p>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 키비주얼 섹션 */}
                        {/* ----------------------------- */}
                        <section className="sec-detail-keyvisual">
                            <div className="l-wrapper-full">
                                <div className="bgimg-wrap jsAppearSlideToR">
                                    <div className="bgimg jsScrollParallaxImage" style={{ backgroundImage: 'url(' + keyvisual + ')' }}></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {workDetailContent}
                </div>
                <NextAndPrevButtons next={next} prev={prev} />
            </>
        )
    }

    render() {
        return(
            <main className="subpage-content">
                {this.state.loaded ? this._renderContent() : 'loading...' }
            </main>
        )
    }
}

function NextAndPrevButtons({next, prev}) {
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

export default WorkDetail;