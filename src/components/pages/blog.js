import React, {Component} from 'react';
import SubpageHeading from '../partials/subpage-heading';
import { animInCrossSlide, animOutLoading, animInAppear, setBeforeLoading } from '../func/animates';
import dataBlogReverse from '../data/data-blog';
import './blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loded: false
        }
        this.wasHome = true;
        this.dataBlogReverse = dataBlogReverse;

        if ( this.props.location.hash === "#home" ) {
            this.props.history.replace('/blog');
            
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
        }, 10)
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
        const jsBtnGnbBlog = document.getElementById('jsBtnGnbBlog');
        const blogContents = document.getElementsByClassName('blog-content');
        const jsAppearBtT = document.getElementsByClassName('jsAppearBtT');
        const jsAppearFadein = document.getElementsByClassName('jsAppearFadein');
        
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

        const blogDataInit = () => {
            for ( let i=0; i<this.dataBlogReverse.length; i++ ) {
                blogContents[i].innerHTML = this.dataBlogReverse[i].desc;
            }
        }

        // RUN
        animInAppear(jsAppearBtT, 1500);
        animInAppear(jsAppearFadein, 1500);
        jsBtnGnbBlog.classList.add('is-disabled');
        showSubpageHeading();
        blogDataInit();
    }

    _renderContent() {
        return(
            <>
                <SubpageHeading hugetitle="BLOG" subtext="자유롭게 써내려가는 개발 일지." />
                <section className="blog-items">
                    <div className="l-wrapper">
                        {this.dataBlogReverse.map((item, key) => {
                            return (
                                <div className="text-wrap blog-item jsAppearFadein">
                                    <ul className="l-row">
                                        <li className="l-col l-col-4-12 l-col-m-12-12 jsAppearBtT">
                                            <h2 className="f-subhead title">{item.title}</h2>
                                            <p className="f-normal f-eng c-blue-bright category">{item.category}</p>
                                            <p className="f-normal date">{item.date}</p>
                                        </li>
                                        <li className="l-col l-col-8-12 l-col-m-12-12 jsAppearBtT">
                                            <p className="f-normal c-wine-bright">{item.hash.map((hashitem) => `#${hashitem} `)}</p>
                                            <div className="f-normal blog-content"></div>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </section>
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

export default Blog;