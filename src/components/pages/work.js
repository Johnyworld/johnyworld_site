import React, { Component } from 'react';
import { 
    animInCrossSlide, 
    animInScale, 
    animOutFade,
    // animInWidth,
    animOutLoading,
    // animOutWidth,
    scrollFloating, 
    setMouseHover, 
    getAbsoluteTop } from '../func/animates';
import { reactRouteScrollTop } from '../func/functions';
import dataWorkReverse from '../data/data-work';
import './work.css';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
        }
        this.linkTo = null;
        this.workReverse = dataWorkReverse;
        this.history = this.props.history;
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

    _definePage() {
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsBigmenuTitleString = jsBigmenuTitle.getElementsByTagName('p');
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');

        // FUNCTIONS
        const showWorkItemWhenScrolling = (nowScroll) => {
            for (let i=0; i<workItems.length; i++) {
                if ( nowScroll+window.innerHeight > getAbsoluteTop(workItems[i]) && !workItems[i].classList.contains("show") ) {
                    workItems[i].classList.add("show");
                    animInScale(workItems[i]);
                }
            }
        }   

        const showWorkItemWhenLoaded = () => {
            for (let i=0; i<workItems.length; i++) {
                if ( window.innerHeight > getAbsoluteTop(workItems[i]) && !workItems[i].classList.contains("show") ) {
                    workItems[i].classList.add("show");
                    setTimeout( function() {
                        animInScale(workItems[i]);
                    }, (i * 150)+1300)
                }
            }

            jsBigmenuBigtitle.classList.remove('centered');

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
            showWorkItemWhenScrolling(nowScroll);
        });

        // Run
        showWorkItemWhenLoaded();
        setMouseHover();
        reactRouteScrollTop();
    }
    
    _noLoadingScreen() {
        this.setState({
            loaded: true
        });
        setTimeout(() => {
            this._definePage();
        }, 0)
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

    goToDetail(linkTo) {
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsLoading = document.getElementById('jsLoading');
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');
        const headerButtons = document.getElementsByClassName('header-buttons');
        const jsBtnBack = document.getElementById('jsBtnBack');
        const jsBtnGnb = document.getElementById('jsBtnGnb');
        const jsHamberger = document.getElementById('jsHamberger');
        
        animOutFade(jsBigmenuBigtitle, 500);
        animOutFade(jsBigmenuTitle, 500);

        for( let i=0; i<workItems.length; i++ ) {
            setTimeout( function() { 
                animOutFade(workItems[i], 500);
            }, i*100)
        }

        for( let i=0; i<headerButtons.length; i++ ) {
            headerButtons[i].classList.add('is-hidden');
        }
        
        jsLoading.style.display = "block";
        

        setTimeout(() => {
            let propsHistory = this.props.history;
            propsHistory.push('/work/' + linkTo);
        }, 1300);
        
        // 
        setTimeout(() => {
            jsLoading.style.display = "none";
            jsBtnBack.classList.remove('is-hidden');
            jsBtnGnb.classList.remove('is-hidden');
            jsHamberger.classList.remove('is-hidden');
        }, 2100);
    }

    _renderContent() {
        return (
            <>
                <div className="bigmenu-title-wrapper centered" id="jsBigmenuBigtitle">
                    <h1 className="f-hugetitle">WORK</h1>
                    <div className="f-title" id="jsBigmenuTitle">
                        <p>고</p>
                        <p>객</p>
                        <p>을</p>
                        <p>&nbsp;</p>
                        <p>위</p>
                        <p>한</p>
                        <p>&nbsp;</p>
                        <p>하</p>
                        <p>나</p>
                        <p>의</p>
                        <p>&nbsp;</p>
                        <p>생</p>
                        <p>각</p>
                        <p>들</p>
                        <p>.</p>
                    </div>
                </div>
                <div className="work-items clear-fix" id="workItemWrap">
                    <ul className="l-row gap90 clear-fix">
                        { this.workReverse.map( item => {
                            // this.linkTo = `/work/${item.slug}`;
                            return (
                                <li key={`griditem-${item.id}`} className='l-col l-col-6-12'>
                                    <div className="item">
                                        <button className="grid-item" onClick={this.goToDetail.bind(this, item.slug)}>
                                            <div className="background" style={{backgroundImage: 'url(' + item.thumbnail + ')'}}></div>
                                            <div className="textbox">
                                                <div className="top">
                                                </div>
                                                <div className="bottom">
                                                    <h3 className="f-subhead f-eng-title">{item.title}</h3>
                                                    <p className="f-normal f-eng category">{item.category2}</p>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }

    render() {
        return(
            <content className="subpage-content">
                {this.state.loaded ? this._renderContent() : '' }
            </content>
        )
    }
}

export default Work;