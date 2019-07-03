import React, {Component} from 'react';
import Axios from 'axios';

import SubpageHeading from '../partials/subpage-heading';
import {
    animOutLoading, 
    animInCrossSlide, 
    setMouseHover, 
    scrollFloating, 
    getAbsoluteTop, 
    animInWidthByTurnHandler,
    animInAllOfTexts,
    animInTextGradientByTurnHandler } from '../func/animates';
import dataAboutSkills from '../data/data-aboutskills';
import './about.css';
import skillSprites from '../../images/about-skill-logos.png';
import imgAboutKey from '../../images/about-key.jpg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            instaImages : []
        }
        this.wasHome = true;

        if ( this.props.location.hash === "#home" ) {
            this.props.history.replace('/about');
            
        } else if ( this.props.location.hash !== "#home" ) {
            this.wasHome = false;
        }
    }

    componentDidMount() {
        if ( this.wasHome ) {
            this._noLoadingScreen();
        } else {
            this._nowLoading();
        }
        
        const token = process.env.REACT_APP_INSTA_TOKEN;
        Axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token)
            .then(res => {
                console.log(res.data.data);
                this.setState({ instaImages: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })
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
                this._animates();
            }, 1000);
        }
        handlePageLoaded();
        handleLoaded();
    }

    _animates() {
        // DEFINES
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsBigmenuTitleString = jsBigmenuTitle.getElementsByTagName('p');
        const jsBtnGnbAbout = document.getElementById('jsBtnGnbAbout');
        const jsSecInstagram = document.getElementById('jsSecInstagram');
        const InstaImagesWrap = document.getElementsByClassName('insta-image-wrap');
        const InstaImages = document.getElementsByClassName('insta-image');
        const floatingImagesWrap = document.getElementsByClassName('floating-image-wrap');
        const jsSectionSkills = document.getElementById('jsSectionSkills');
        const jsSectionSkillsColumns = jsSectionSkills.getElementsByClassName('l-col');
        const jsTextAppear = document.getElementsByClassName('jsTextAppear');
        const skillLevelBar = document.getElementsByClassName('skill-level-bar');

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

        const scrollFloatingImages = ( nowScroll, elements ) => {
            // 부모 자식 엘리먼트의 비율과 윈도우 높이에 대한 비율에 맞에 페럴렉스 되는 함수입니다.
            // 사용법 : elements는 wrap의 className을 보내고, 그 안에 img 태그가 있어야 함.
            for ( let i=0; i<elements.length; i++ ) {
                let elementImage = elements[i].getElementsByTagName('img');
                let min = window.pageYOffset + elements[i].getBoundingClientRect().top - window.innerHeight + elements[i].offsetHeight;

                for ( let j=0; j<elementImage.length; j++ ) {
                    let gap = elements[i].offsetHeight - elementImage[j].offsetHeight;
                    let wrapperTop = window.pageYOffset + elements[i].getBoundingClientRect().top;
                    let elementTop = wrapperTop + gap;
                    let moveRatio = (wrapperTop-min) / (elementTop-min); 
                    let trans = nowScroll - min - ((nowScroll-min) / moveRatio);

                    elementImage[j].style.marginTop = gap + 'px';
                    elementImage[j].style.transform = "translateY("+ trans +"px)"
                }
            }
        }

        const skillLevelBarShow = (nowScroll, elements) => {
            for ( let i=0; i<elements.length; i++ ) {
                if ( nowScroll + window.innerHeight > getAbsoluteTop(elements[i]) ) {
                    setTimeout( function() {
                        elements[i].classList.remove('is-disabled');
                    }, 800)
                }
            }
        }

        // LISTENERS
        window.addEventListener('scroll', function(event) {
            let nowScroll = window.scrollY;
            for ( let i=0; i<InstaImagesWrap.length; i++ ) {
                let absoluteTop = getAbsoluteTop(jsSecInstagram) - window.innerHeight/4;
                if ( i % 3 === 0 ) {
                    scrollFloating(nowScroll-absoluteTop, InstaImagesWrap[i], 4);
                }
                if ( i % 3 === 1 ) {
                    scrollFloating(nowScroll-absoluteTop, InstaImagesWrap[i], 6);
                }
                if ( i % 3 === 2 ) {
                    scrollFloating(nowScroll-absoluteTop, InstaImagesWrap[i], 12);
                }
            }
            scrollFloatingImages( nowScroll, floatingImagesWrap );
            skillLevelBarShow( nowScroll, skillLevelBar )
        })

        // RUN
        jsBtnGnbAbout.classList.add('is-disabled');
        showSubpageHeading();
        setMouseHover(); 
        animInAllOfTexts(jsTextAppear, 1500);
        setTimeout( function() {
            animInWidthByTurnHandler( floatingImagesWrap );
            animInWidthByTurnHandler( InstaImages );
        }, 1500)

        setTimeout( function() {
            animInTextGradientByTurnHandler( jsSectionSkillsColumns );   
        }, 2000)        

        setTimeout( function() {
            scrollFloatingImages( window.scrollY, floatingImagesWrap );
        },10)
    }

    _renderContent() {
        let skillCategories = [];
        skillCategories.push(dataAboutSkills[0].category)
        for ( let i=1; i<dataAboutSkills.length; i++ ) {
            
            if ( skillCategories.indexOf(dataAboutSkills[i].category) === -1 ) {
                skillCategories.push(dataAboutSkills[i].category);
            }
        }
        return(
            <>
                <div className="l-wrapper-wide">
                    <SubpageHeading hugetitle="ABOUT" subtext="꿈은 크고, 그것을 실행하는 사람." />
                </div>
                <div className="about-wrapper">
                    <section className="sec-keyvisual">
                        <div className="l-wrapper">
                            <div className="text-wrap">
                                <p className="f-normal jsTextAppear">
                                    세상을, 생활을 더 낫게 만들고 싶은 꿈은 결코 낡지 않습니다.<br />
                                    나를 필요로 하는 곳에서, 생각하고, 스케치하고, 설계하고, 만들어냅니다.
                                </p>
                            </div>
                        </div>
                        <div className="l-wrapper-full">
                            <div className="floating-image-wrap">
                                <img className="floating-image" src={imgAboutKey} alt="어바웃키비주얼" />
                            </div>
                        </div>
                    </section>
                    <section className="sec-skills" id="jsSectionSkills">
                        <div className="l-wrapper">
                            <div className="text-wrap">
                                {skillCategories.map((category) => {
                                    return (
                                    <div className="skill-category-container">
                                        <ul className="l-row">
                                            <li className="l-col l-col-6-12"> 
                                                <h3 className="f-heading jsTextAppear">{category}</h3>
                                            </li>
                                            <li className="l-col l-col-6-12"> 
                                                {dataAboutSkills.map((item, key) => {
                                                    return (
                                                        item.category === category ?
                                                        <div className={`category-${item.category} skill-item-container`}>
                                                            <div className="skill-part _title">
                                                                <div className="skill-logo jsTextAppear" style={{ backgroundImage: 'url('+skillSprites+')', backgroundPosition: item.bgPosition }}></div>
                                                                <h3 className="f-subhead jsTextAppear" style={{color: item.color }}>{item.skillName}</h3>
                                                                <div className="skill-level-wrap jsTextAppear">
                                                                    <div className="skill-level-bar is-disabled" style={{ width: item.skillLevel * 10 + '%' , backgroundColor: item.color }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="skill-part _text">
                                                                <p className="f-normal jsTextAppear">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                        : ''
                                                    )})
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="sec-instagram" id="jsSecInstagram">
                        <div className="l-wrapper">
                            <ul className="l-row gap90 clear-fix">
                                { this.state.instaImages.map((item, key) => {
                                    return (
                                        key < 6 ? <li className="l-col l-col-4-12 insta-image-li">
                                            <a href={item.link} target="blank">
                                                <div className="insta-image-wrap">
                                                    <div className="insta-image" style={{backgroundImage: 'url('+item.images.standard_resolution.url+')', paddingTop: '100%'}}></div>
                                                    <p className="insta-caption f-normal">{item.caption.text}</p>
                                                </div>
                                            </a>
                                        </li>
                                        : ''
                                    )}
                                )}
                            </ul>
                        </div>
                    </section>
                    <section className="sec-contact">
                        <div className="l-wrapper">
                            <div className="text-wrap">
                                <ul className="l-row">
                                    <li className="l-col l-col-6-12">
                                        <h3 className="f-heading">
                                            함께<br />특별한 경험들을<br />만들어요.
                                        </h3>
                                    </li>
                                    <li className="l-col l-col-6-12">
                                        <p className="f-subhead">
                                            johnyworld@naver.com<br />
                                            +82 10 4806 3340<br />
                                            Seoul, Korea
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
    render() {
        return(
            <main className="subpage-content">
                {this.state.loaded ? this._renderContent() : 'Loading...' }
            </main>   
        )
    }
}

export default About;