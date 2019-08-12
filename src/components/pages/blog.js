import React, {Component} from 'react';
import SubpageHeading from '../partials/subpage-heading';
import { animInCrossSlide, animOutLoading, animInAppear, setBeforeLoading } from '../func/animates';
import jsonFile from '../data/data-blog.json';
import './blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loded: false,
            dataBlog : jsonFile
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

        // RUN
        animInAppear(jsAppearBtT, 1500);
        animInAppear(jsAppearFadein, 1500);
        jsBtnGnbBlog.classList.add('is-disabled');
        showSubpageHeading();
    }

    _renderContent() {
        const dataBlog = this.state.dataBlog.reverse();
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
                                    content={item.content}
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

function BlogItems({ title, category, date, hash, content }) {
    return (
        <div className="text-wrap blog-item jsAppearFadein">
            <ul className="l-row">
                <li className="l-col l-col-4-12 l-col-m-12-12 jsAppearBtT">
                    <h2 className="f-subhead title">{title}</h2>
                    <p className="f-normal f-eng c-blue-bright category">{category}</p>
                    <p className="f-normal date">{date}</p>
                </li>
                <li className="l-col l-col-8-12 l-col-m-12-12 jsAppearBtT">
                    <div className="f-normal blog-content">
                        <p className="c-wine-bright">{hash.map((hashitem) => `#${hashitem} `)}</p>
                        { content.map( item => {
                            if(item.type === 'code') {
                                return (
                                    <div className="blog-inner-paragraph blog-code">{item.content}</div>
                                ) 
                            } else {
                                const codeOpen = () => '<span class="blog-code">';
                                const codeClose = () => '</span>';
                                const strongOpen = () => '<strong>'
                                const strongClose = () => '</strong>'
                                let string = item;
                                let string01 = string.replace(/</g, '&#60;' );
                                let string02 = string01.replace(/>/g, '&#62;' );
                                let string03 = string02.replace(/{b-/g, strongOpen() );
                                let string04 = string03.replace(/-b}/g, strongClose() );
                                let string05 = string04.replace(/{-/g, codeOpen() );
                                let stringFinal = string05.replace(/-}/g, codeClose() );
                                
                                return (
                                    <p className="blog-inner-paragraph" dangerouslySetInnerHTML={{__html: stringFinal}}></p>
                                )
                            }
                            
                        })}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Blog;