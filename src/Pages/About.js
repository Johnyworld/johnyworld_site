import React, {Component} from 'react';
import Axios from 'axios';

import SubpageHeading from '../Components/partials/SubpageHeading';
import {
    animOutLoading, 
    animInCrossSlide, 
    setMouseHover, 
    scrollFloating, 
    scrollParallaxImages,
    setBeforeLoading,
    animInAppear } from '../Funcs/animates';
import { getAbsoluteTop } from '../Funcs/functions';
import './About.scss';
import skillSprites from '../Images/about-skill-logos.png';
import jsonFile from '../Data/data-aboutskills.json';

let imgAboutKey;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    imgAboutKey = require('../Mobile-images/about-key.jpg');
} else {
    imgAboutKey = require('../Images/about-key.jpg');
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            instaImages : [],
            dataSkills : jsonFile,
            subtext: "꿈은 크고, 그것을 실행하는 사람.",
            keyText: "세상을, 생활을 더 낫게 만들고 싶은 꿈은 결코 낡지 않습니다.\n나를 필요로 하는 곳에서, 생각하고, 스케치하고, 설계하고, 만들어냅니다.",
            contactText: {
                comment : "함께\n특별한 경험들을\n만들어요.",
                email : "johnyworld@naver.com",
                mobile : "+82 10 4806 3340",
                address : "Seoul, Korea"
            }
        }
        this.wasHome = true;
        this.skillCategories = this._getSkillCategories(this.state.dataSkills);

        if ( this.props.location.hash === "#home" ) {
            this.props.history.replace('/about');
        } else if ( this.props.location.hash !== "#home" ) {
            this.wasHome = false;
        }
    }

    _getSkillCategories(dataSkills) {
        let skillCategories = [];
        for ( let i=1; i<dataSkills.length; i++ ) {
            if ( skillCategories.indexOf(dataSkills[i].category) === -1 ) {
                skillCategories.push(dataSkills[i].category);
            }
        }
        return skillCategories;
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
                this.setState({ instaImages: res.data.data });
            })
            .catch(err => {
                console.log(err);
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
    }

    _animates() {
        // DEFINES
        const jsBigmenuBigtitle = document.getElementById('jsBigmenuBigtitle');
        const jsBigmenuTitle = document.getElementById('jsBigmenuTitle');
        const jsBigmenuTitleString = jsBigmenuTitle.getElementsByTagName('p');
        const jsBtnGnbAbout = document.getElementById('jsBtnGnbAbout');
        const jsSecInstagram = document.getElementById('jsSecInstagram');
        const InstaImagesWrap = document.getElementsByClassName('insta-image-wrap');
        const jsAppearBtT = document.getElementsByClassName('jsAppearBtT');
        const jsAppearSlideToR = document.getElementsByClassName('jsAppearSlideToR');
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
            if ( window.innerWidth >= 1024 )
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
            skillLevelBarShow( nowScroll, skillLevelBar )
        })

        window.addEventListener( 'resize', () => {
            for ( let i=0; i<InstaImagesWrap.length; i++ ) {
                InstaImagesWrap[i].style.transform = 'translateY(0)'
            }
        })

        // RUN
        jsBtnGnbAbout.classList.add('is-disabled');
        showSubpageHeading();
        setMouseHover(); 
        animInAppear(jsAppearBtT, 2000);
        animInAppear(jsAppearSlideToR, 1500);
        scrollParallaxImages( jsAppearSlideToR );
    }

    _renderContent() {
        const { dataSkills, subtext, keyText, instaImages, contactText } = this.state;
        const skillCategories = this.skillCategories;
        return(
            <>
                <SubpageHeading hugetitle="ABOUT" subtext={subtext} />
                <div className="about-wrapper">
                    <AboutKeyVisual keyText={keyText} />
                    <AboutSkills skillCategories={skillCategories} dataSkills={dataSkills} />
                    <AboutInstagram instaImages={instaImages} />
                    <AboutContact contactText={contactText} />
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

function AboutKeyVisual({keyText}){
    return (
        <section className="sec-keyvisual">
            <div className="l-wrapper">
                <div className="text-wrap">
                    <p className="f-normal jsAppearBtT">{keyText}</p>
                </div>
            </div>
            <div className="l-wrapper-full">
                <div className="bgimg-wrap jsAppearSlideToR">
                    <div className="bgimg jsScrollParallaxImage" style={{ backgroundImage: 'url(' + imgAboutKey + ')' }} />
                </div>
            </div>
        </section>
    )
}

function AboutSkills({skillCategories, dataSkills}){
    return (
        <section className="sec-skills" id="jsSectionSkills">
            <div className="l-wrapper">
                <div className="text-wrap">
                    {skillCategories.map((category, key) => {
                        return (
                            <SkillCategories category={category} skillData={dataSkills} key={'skill-category-'+key} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function SkillCategories({category, skillData}) {
    return (
        <div className="skill-category-container">
            <ul className="l-row">
                <li className="l-col l-col-6-12 l-col-m-12-12"> 
                    <h3 className="f-heading jsAppearBtT">{category}</h3>
                </li>
                <li className="l-col l-col-6-12 l-col-m-12-12"> 
                    {skillData.map((item, key) => {
                        return (
                            item.category === category ?
                                <SkillItems 
                                    title={item.skillName}
                                    skillLevel={item.skillLevel}
                                    desc={item.desc}
                                    category={item.category}
                                    color={item.color}
                                    bgPosition={item.bgPosition}
                                    key={'skill-item-'+key} 
                                />
                            : ''
                        )})
                    }
                </li>
            </ul>
        </div>
    )
}

function SkillItems({title, skillLevel, desc, color, bgPosition, category}) {
    return (
        <div className={`category-${category} skill-item-container`}>
            <div className="skill-part _title">
                <div className="skill-logo jsAppearBtT" style={{ backgroundImage: 'url('+skillSprites+')', backgroundPosition: bgPosition }}></div>
                <h3 className="f-subhead jsAppearBtT" style={{ color: color }}>{title}</h3>
                <div className="skill-level-wrap jsAppearBtT">
                    <div className="skill-level-bar is-disabled" style={{ width: skillLevel * 10 + '%' , backgroundColor: color }}></div>
                </div>
            </div>
            <div className="skill-part _text">
                <p className="f-normal jsAppearBtT">{desc}</p>
            </div>
        </div>
    )
}

function AboutInstagram({instaImages}) {
    return (
        <section className="sec-instagram" id="jsSecInstagram">
            <div className="l-wrapper">
                <ul className="l-row gap90 clear-fix">
                    { instaImages.map((item, key) => {
                        return (
                            key < 6 ? 
                                <InstagramItems 
                                    link={item.link}
                                    caption={item.caption}
                                    images={item.images}
                                    key={'instagram-'+key} 
                                />
                            : ''
                        )}
                    )}
                </ul>
            </div>
        </section>
    )
}

function InstagramItems({link, caption, images}) {
    return (
        <li className="l-col l-col-4-12 l-col-m-6-12 insta-image-li">
            <a href={link} target="blank">
                <div className="insta-image-wrap">
                    <div className="insta-image jsAppearSlideToR" style={{backgroundImage: 'url('+images.standard_resolution.url+')', paddingTop: '100%'}}></div>
                    <p className="insta-caption f-normal">{caption.text}</p>
                </div>
            </a>
        </li>
    )
}

function AboutContact({contactText}) {
    const { comment, email, mobile, address } = contactText;
    return (
        <section className="sec-contact">
            <div className="l-wrapper">
                <div className="text-wrap">
                    <ul className="l-row">
                        <li className="l-col l-col-6-12 l-col-m-12-12">
                            <h3 className="f-heading">{comment}</h3>
                        </li>
                        <li className="l-col l-col-6-12 l-col-m-12-12">
                            <p className="f-subhead">
                                {email}<br />
                                {mobile}<br />
                                {address}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;