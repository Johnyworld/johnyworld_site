import React, { Component } from 'react';
import dataWorkReverse from '../Data/data-work';
import { scrollFadeIn, 
    setMouseHover, 
    scrollParallaxImages,
    scrollFloating,
    animInAppear } from '../Funcs/animates';
import { reactRouteScrollTop } from '../Funcs/functions';

// Page Comps
import BigpictureEnt from './work-detail/bigpicture-ent';
import FanclubCoin from './work-detail/fanclub-coin';
import Soohan from './work-detail/soohan';
import Krx from './work-detail/krx';
import Pssd from './work-detail/pssd';
import Camping from './work-detail/camping';
import TheFocus from './work-detail/the-focus';

// Button Comps
import ViewSite from '../Components/buttons/ViewSite';
import NextAndPrev from '../Components/buttons/NextAndPrev';

// Etc.
import deviceMobileBg from '../Images/work-detail/devices-mobile.png';
import './WorkDetail.scss';
import Daylog from './work-detail/daylog';

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            id: window.location.pathname.split("/", 3)[2],
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

    _nowLoading() {
        const dataWork = this.state.dataWork;
        const { anim_loadingScreenOut, 
                anim_loadingScreenSetFull, 
                anim_headerIn } = this.props;

        anim_loadingScreenSetFull();
        setTimeout(() => {
            this.setState({
                index: this._getIndex(dataWork),
                loaded: true
            });
            anim_loadingScreenOut();
            this._componentDidLoading();
        }, 1000);
        anim_headerIn();
    }

    _componentDidLoading() {
        const jsViewsiteBtn = document.getElementById('jsViewsiteBtn');
        const jsAppearBtT = document.getElementsByClassName('jsAppearBtT');
        const jsAppearSlideToR = document.getElementsByClassName('jsAppearSlideToR');
        const jsMobileMockup = document.getElementById('jsMobileMockup');

        // Scroll Event
        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            if (jsMobileMockup) scrollFloating( nowScroll, jsMobileMockup, -5 );
            if (jsViewsiteBtn) scrollFadeIn(nowScroll, jsViewsiteBtn, window.innerHeight+500 );
        });   

        // RUN  
        reactRouteScrollTop();
        setMouseHover();
        animInAppear(jsAppearBtT, 800);
        animInAppear(jsAppearSlideToR, 1500);
        scrollParallaxImages( jsAppearSlideToR );
    }

    _renderContent() {
        const { id } = this.state;
        const next = this.state.dataWork[this.state.index+1];
        const prev = this.state.dataWork[this.state.index-1];
        const presentData = this.state.dataWork[this.state.index];
        const { title, comment, summary, keywords, date, url, mobileScreen, screen, keyvisual } = presentData;
        const { func_moveToRoute } = this.props;
        
        // Get Detail Component.
        let workDetailContent = null;
        if (id === 'bigpicture-ent') { workDetailContent = <BigpictureEnt /> }
        if (id === 'fanclub-coin') { workDetailContent = <FanclubCoin /> }
        if (id === 'soo-clinic') { workDetailContent = <Soohan /> }
        if (id === 'krx') { workDetailContent = <Krx /> }
        if (id === 'samsung-pssd') { workDetailContent = <Pssd /> }
        if (id === 'camping-poster') { workDetailContent = <Camping /> }
        if (id === 'the-focus') { workDetailContent = <TheFocus /> }
        if (id === 'daylog') { workDetailContent = <Daylog /> }

        let splitTitle = title.split(' ');      

        return (
            <>
                {url ? <ViewSite url={url} /> : ''}
                <div className="container">
                    <div className="detail-main">
                        <WorkDetailTitle splitTitle={splitTitle} comment={comment} keywords={keywords} url={url} date={date} />  
                        <WorkDetailMockup screen={screen}mobileScreen={mobileScreen} />
                        <WorkDetailSummary summary={summary} />
                        <WorkDetailKeyVisual keyvisual={keyvisual} />
                    </div>
                    {workDetailContent}
                </div>
                <NextAndPrev next={next} prev={prev} history={this.props.history} func_moveToRoute={func_moveToRoute} />
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

function WorkDetailTitle({splitTitle, comment, keywords, url, date }) {
    return (
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
                    <div className="project-info jsTitleChildren jsAppearBtT">
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
    )
}

function WorkDetailMockup({screen, mobileScreen}) {
    return (
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
    )
}

function WorkDetailSummary({summary}) {
    return (
        <section className="sec-summary">
            <div className="l-wrapper">
                <div className="text-wrap">
                    <ul className="l-row">
                        <li className="l-col l-col-6-12 l-col-m-12-12"><h2 className="f-title jsAppearBtT">프로젝트 <br className="dis-m" />개요</h2></li>
                        <li className="l-col l-col-6-12 l-col-m-12-12">
                            { summary.map( (item, key) => {
                                return (
                                    <p key={`summary-item-${key}`} className="f-normal jsAppearBtT">
                                        <strong>{item.title}</strong><br />
                                        { item.desc.map( (descItem, key) => <span key={`${item.title}-${key}`}>{descItem}<br /></span> ) }
                                    </p>
                                )
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

function WorkDetailKeyVisual({keyvisual}) {
    return (
        <section className="sec-detail-keyvisual">
            <div className="l-wrapper-full">
                <div className="bgimg-wrap jsAppearSlideToR">
                    <div className="bgimg jsScrollParallaxImage" style={{ backgroundImage: 'url(' + keyvisual + ')' }}></div>
                </div>
            </div>
        </section>
    )
}

export default WorkDetail;