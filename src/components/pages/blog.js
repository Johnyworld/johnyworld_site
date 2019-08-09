import React, {Component} from 'react';
import SubpageHeading from '../partials/subpage-heading';
import { animInCrossSlide, animOutLoading, animInAppear, setBeforeLoading } from '../func/animates';
import dataBlogReverse from '../data/data-blog';
import './blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loded: false,
            dataBlog : dataBlogReverse
        }
        this.wasHome = true;

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
            const { dataBlog } = this.state
            for ( let i=0; i<dataBlog.length; i++ ) {
                blogContents[i].innerHTML = dataBlog[i].desc;
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
        const { dataBlog } = this.state
        return(
            <>
                <SubpageHeading hugetitle="BLOG" subtext="자유롭게 써내려가는 개발 일지." />
                <section className="blog-items">
                    <div className="l-wrapper">
                        {dataBlog.map((item, key) => {
                            return (
                                <BlogItems
                                    title={item.title}
                                    category={item.category}
                                    date={item.date}
                                    hash={item.hash}
                                    key={'blog-item-'+key} 
                                />
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

function BlogItems({ title, category, date, hash }) {
    return (
        <div className="text-wrap blog-item jsAppearFadein">
            <ul className="l-row">
                <li className="l-col l-col-4-12 l-col-m-12-12 jsAppearBtT">
                    <h2 className="f-subhead title">{title}</h2>
                    <p className="f-normal f-eng c-blue-bright category">{category}</p>
                    <p className="f-normal date">{date}</p>
                </li>
                <li className="l-col l-col-8-12 l-col-m-12-12 jsAppearBtT">
                    <p className="f-normal c-wine-bright">{hash.map((hashitem) => `#${hashitem} `)}</p>
                    <div className="f-normal blog-content"></div>
                </li>
            </ul>
        </div>
    )
}

export default Blog;