import React, { Component } from 'react';
import SubpageHeading from '../components/partials/SubpageHeading';
import { animInAppear } from '../Funcs/animates';
import jsonFile from '../Data/data-blog.json';
import './Blog.scss';
const jsonFileRev = jsonFile.reverse();

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loded: false,
      wasHome: window.location.hash === '#home',
      dataBlog: jsonFileRev,
      subtext: '자유롭게 써내려가는 개발 일지.',
    };
    if (!this.state.wasHome) {
      this.isLodingScreen = true;
    } else {
      this.isLodingScreen = false;
      window.history.replaceState('', document.title, window.location.pathname);
    }
  }

  componentDidMount() {
    if (!this.isLodingScreen) {
      this._noLoadingScreen();
    } else {
      this._nowLoading();
    }
  }

  _noLoadingScreen() {
    this.setState({
      loaded: true,
    });
    setTimeout(() => {
      this._componentDidLoading();
    }, 10);
  }

  _nowLoading() {
    const { anim_loadingScreenOut } = this.props;
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
      anim_loadingScreenOut();
      this._componentDidLoading();
    }, 1000);
  }

  _componentDidLoading() {
    // DEFINES
    const jsAppearBtT = document.getElementsByClassName('jsAppearBtT');
    const jsAppearFadein = document.getElementsByClassName('jsAppearFadein');

    // RUN
    animInAppear(jsAppearBtT, 1500);
    animInAppear(jsAppearFadein, 1500);
  }

  _renderContent() {
    const { subtext, dataBlog } = this.state;
    const { anim_titleIn } = this.props;
    return (
      <>
        <SubpageHeading hugetitle='BLOG' subtext={subtext} anim_titleIn={anim_titleIn} />
        <BlogItems dataBlog={dataBlog} />
      </>
    );
  }

  render() {
    return <main className='subpage-content'>{this.state.loaded ? this._renderContent() : ''}</main>;
  }
}

function BlogItems({ dataBlog }) {
  return (
    <section className='sec-blog-items'>
      <div className='l-wrapper'>
        {dataBlog.map((item, key) => {
          return (
            <BlogItem
              title={item.title}
              category={item.category}
              date={item.date}
              hash={item.hash}
              content={item.content}
              key={'blog-item-' + key}
            />
          );
        })}
      </div>
    </section>
  );
}

function BlogItem({ title, category, date, hash, content }) {
  return (
    <div className='text-wrap blog-item jsAppearFadein'>
      <ul className='l-row'>
        <li className='l-col l-col-4-12 l-col-m-12-12 jsAppearBtT'>
          <h2 className='f-subhead title'>{title}</h2>
          {/* <p className="f-normal f-eng c-blue-bright category">{category}</p> */}
          <p className='f-normal date'>{date}</p>
        </li>
        <li className='l-col l-col-8-12 l-col-m-12-12 jsAppearBtT'>
          <div className='f-normal blog-content'>
            <p className='hash-items c-wine-bright'>
              {hash.map((hashitem, key) => (
                <span className='hash-item' key={`hash-item-${key}`}>
                  #{hashitem}
                </span>
              ))}
            </p>
            {content.map((item, key) => {
              if (item.type === 'code') {
                return (
                  <div className='blog-inner-paragraph blog-code' key={`blog-${key}`}>
                    {item.content}
                  </div>
                );
              } else {
                const codeOpen = () => '<span class="blog-code">';
                const codeClose = () => '</span>';
                const strongOpen = () => '<strong>';
                const strongClose = () => '</strong>';
                let string = item;
                let string01 = string.replace(/</g, '&#60;');
                let string02 = string01.replace(/>/g, '&#62;');
                let string03 = string02.replace(/{b-/g, strongOpen());
                let string04 = string03.replace(/-b}/g, strongClose());
                let string05 = string04.replace(/{-/g, codeOpen());
                let stringFinal = string05.replace(/-}/g, codeClose());

                return (
                  <p
                    className='blog-inner-paragraph'
                    dangerouslySetInnerHTML={{ __html: stringFinal }}
                    key={`blog-${key}`}
                  ></p>
                );
              }
            })}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
