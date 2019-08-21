import React, { Component } from 'react';
import SubpageHeading from '../Components/partials/SubpageHeading';
import { 
    animInCrossSlide, 
    animOutFade,
    animOutLoading,
    scrollFloating, 
    animInAppear,
    loadHeader,
    setBeforeLoading,
    setMouseHover } from '../Funcs/animates';
import { reactRouteScrollTop } from '../Funcs/functions';
import dataWorkReverse from '../Data/data-work';
import './Work.scss';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            dataWork : dataWorkReverse,
            subtext : '고객을 위한 하나의 생각들.',
            portfolioHistory : [
                {
                    year: '2019',
                    title: '"The FOCUS" 지금 보고계십니다.'
                },
                {
                    year: '2018',
                    title: `"Hello I'm Johny" 보기`,
                    url: 'http://johnyworld.com/2018/index.html'
                },
                {
                    year: '2013',
                    title: '"The Grand Launching" 보기',
                    url: 'http://johnyworld.com/2013/grandlaunching_web.pdf'
                }
            ]
        }
        this.linkTo = null;
        this.wasHome = true;

        if ( this.props.location.hash === "#home" ) {
            this.props.history.replace('/work');
            
        } else if ( this.props.location.hash !== "#home" ) {
            this.wasHome = false;
        }
    }

    componentDidMount() {
        if (this.wasHome) {
            this._noLoadingScreen();
        } else {
            this._nowLoading();
        }
    }
   
    _noLoadingScreen() {
        this.setState({
            loaded: true
        });
        setTimeout(() => {
            this._animates();
        }, 0)
    }

    _nowLoading() {
        const jsLoading = document.getElementById('jsLoading');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const headerButtons = document.getElementsByClassName('jsAnimButtons');
        
        const handleLoaded = () => {
            setTimeout(() => {
                this.setState({
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

    _animates() {
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsBigmenuTitleString = jsBigmenuTitle.getElementsByTagName('p');
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');
        const jsBtnGnbWork = document.getElementById('jsBtnGnbWork');
        const jsAppearSlideToR = document.getElementsByClassName('jsAppearSlideToR');

        // FUNCTIONS
        const showSubpageHeading = () => {
            jsBigmenuBigtitle.classList.add('centered');
            setTimeout(() => {
                jsBigmenuBigtitle.classList.remove('centered');
            }, 10)
            setTimeout( function() {
                animInCrossSlide(jsBigmenuTitleString);
            }, 800);
        }

        // Listener
        window.addEventListener('scroll', function () {
            let nowScroll = window.scrollY;
            for (let i=0; i<workItems.length; i++) {
                if ( i%2 === 1 ) {
                    scrollFloating( nowScroll, workItems[i], -10 );
                } else {
                    scrollFloating( nowScroll, workItems[i], -3 );
                }
            }
        });

        // Run
        animInAppear(jsAppearSlideToR, 1800);
        jsBtnGnbWork.classList.add('is-disabled');
        showSubpageHeading();
        setMouseHover();
        reactRouteScrollTop();
    }

    goToDetail(linkTo) {
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsLoading = document.getElementById('jsLoading');
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');
        const headerButtons = document.getElementsByClassName('jsAnimButtons');
        const jsBtnBack = document.getElementById('jsBtnBack');
        const jsBtnGnb = document.getElementById('jsBtnHamburger');
        const jsHamburgerMenu = document.getElementById('jsHamburgerMenu');
        
        animOutFade(jsBigmenuBigtitle, 500);
        animOutFade(jsBigmenuTitle, 500);

        for( let i=0; i<workItems.length; i++ ) {
            setTimeout( function() { 
                animOutFade(workItems[i], 500);
            }, i*100)
        }
        
        jsLoading.style.display = "block";

        for( let i=0; i<headerButtons.length; i++ ) {
            headerButtons[i].classList.add('is-hidden');
        }

        setTimeout(() => {
            let propsHistory = this.props.history;
            propsHistory.push('/work/' + linkTo);
        }, 1300);
        
        // 
        setTimeout(() => {
            // jsLoading.style.display = "none";
            jsBtnBack.classList.remove('is-hidden');
            jsBtnGnb.classList.remove('is-hidden');
            jsHamburgerMenu.classList.remove('is-hidden');
        }, 2100);
    }

    _renderContent() {
        const { dataWork, subtext, portfolioHistory } = this.state;
        return (
            <>
                <SubpageHeading hugetitle="WORK" subtext={subtext} />
                <div className="l-wrapper-sticked">
                    <WorkItems dataWork={dataWork} goToDetail={this.goToDetail.bind(this)} />
                </div>
                <PortfolioHistory portfolioHistory={portfolioHistory} />
            </>
        )
    }

    render() {
        return(
            <main className="subpage-content">
                {this.state.loaded ? this._renderContent() : '' }
            </main>
        )
    }
}

function WorkItems({dataWork, goToDetail}) {
    return (
        <div className="work-items clear-fix" id="workItemWrap">
            <ul className="l-row gap90 clear-fix">
                { dataWork.map( (item, key) => {
                    return (
                        <WorkItem 
                            title={item.title}
                            category={item.category2}
                            slug={item.slug}
                            thumbnail={item.thumbnail}
                            goToDetail={goToDetail.bind(this)} 
                            key={'work-item-'+key} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}

function WorkItem({title, category, slug, thumbnail, goToDetail}) {
    return (
        <li className='l-col l-col-6-12'>
            <div className="item">
                <button className="grid-item jsAppearSlideToR" onClick={goToDetail.bind(this, slug)}>
                    <div className="background" style={{backgroundImage: 'url(' + thumbnail + ')'}}></div>
                    <div className="textbox">
                        <div className="top">
                        </div>
                        <div className="bottom">
                            <h3 className="f-heading f-eng-title">{title}</h3>
                            <p className="f-normal f-eng category">{category}</p>
                        </div>
                    </div>
                </button>
            </div>
        </li>
    )
}

function PortfolioHistory({portfolioHistory}) {
    return (
        <div className="portfolio-history">
            <section>
                <div className="l-wrapper">
                    <div className="text-wrap">
                        <h3 className="f-heading f-eng-title">Portfolio History</h3>
                        { portfolioHistory.map( (item, key) => {
                            return (
                                <p className="f-normal link" key={`portfolio-history-${key}`}>
                                    {item.url
                                        ? <a href={item.url} target="blank" ><strong>{item.year}</strong> | {item.title}</a>
                                        : <><strong>{item.year}</strong> | {item.title}</> }
                                </p>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work;