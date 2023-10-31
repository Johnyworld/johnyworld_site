import React, { Component } from 'react';
import SubpageHeading from '../components/partials/SubpageHeading';
import { scrollFloating, animInAppear, setMouseHover } from '../Funcs/animates';
import { reactRouteScrollTop } from '../Funcs/functions';
import dataWorkReverse from '../Data/data-work';
import './Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      wasHome: window.location.hash === '#home',
      dataWork: dataWorkReverse,
      subtext: '고객을 위한 하나의 생각들.',
      portfolioHistory: [
        {
          year: '2019',
          title: '"The FOCUS" 지금 보고계십니다.',
        },
        {
          year: '2018',
          title: `"Hello I'm Johny" 보기`,
          url: 'http://johnyworld.com/2018/index.html',
        },
        {
          year: '2013',
          title: '"The Grand Launching" 보기',
          url: 'http://johnyworld.com/2013/grandlaunching_web.pdf',
        },
      ],
    };
    this.linkTo = null;
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
    const workItemWrap = document.getElementById('workItemWrap');
    const workItems = workItemWrap.getElementsByClassName('item');
    const jsAppearSlideToR = document.getElementsByClassName('jsAppearSlideToR');

    window.addEventListener('scroll', function () {
      let nowScroll = window.scrollY;
      for (let i = 0; i < workItems.length; i++) {
        if (i % 2 === 1) {
          scrollFloating(nowScroll, workItems[i], -10);
        } else {
          scrollFloating(nowScroll, workItems[i], -3);
        }
      }
    });

    // Run
    animInAppear(jsAppearSlideToR, 1800);
    setMouseHover();
    reactRouteScrollTop();
  }

  componentDidUpdate() {
    if (this.state.loaded === true) this._componentDidLoading();
  }

  _renderContent() {
    const { dataWork, subtext, portfolioHistory } = this.state;
    const { func_moveToRoute, anim_titleIn } = this.props;
    return (
      <>
        <SubpageHeading hugetitle='WORK' subtext={subtext} anim_titleIn={anim_titleIn} />
        <div className='l-wrapper-sticked'>
          <WorkItems dataWork={dataWork} func_moveToRoute={func_moveToRoute} />
        </div>
        <PortfolioHistory portfolioHistory={portfolioHistory} />
      </>
    );
  }

  render() {
    return <main className='subpage-content'>{this.state.loaded ? this._renderContent() : ''}</main>;
  }
}

function WorkItems({ dataWork, func_moveToRoute }) {
  return (
    <div className='work-items clear-fix' id='workItemWrap'>
      <ul className='l-row gap90 clear-fix'>
        {dataWork.map((item, key) => {
          return (
            <WorkItem
              title={item.title}
              category={item.category2}
              slug={item.slug}
              thumbnail={item.thumbnail}
              func_moveToRoute={func_moveToRoute}
              key={'work-item-' + key}
            />
          );
        })}
      </ul>
    </div>
  );
}

function WorkItem({ title, category, slug, thumbnail, func_moveToRoute }) {
  return (
    <li className='l-col l-col-6-12'>
      <div className='item'>
        <button className='grid-item jsAppearSlideToR' data-goto={'/work/' + slug} onClick={func_moveToRoute}>
          <div className='background' style={{ backgroundImage: 'url(' + thumbnail + ')' }}></div>
          <div className='textbox'>
            <div className='top'></div>
            <div className='bottom'>
              <h3 className='f-heading f-eng-title'>{title}</h3>
              <p className='f-normal f-eng category'>{category}</p>
            </div>
          </div>
        </button>
      </div>
    </li>
  );
}

function PortfolioHistory({ portfolioHistory }) {
  return (
    <div className='portfolio-history'>
      <section>
        <div className='l-wrapper'>
          <div className='text-wrap'>
            <h3 className='f-heading f-eng-title'>Portfolio History</h3>
            {portfolioHistory.map((item, key) => {
              return (
                <p className='f-normal link' key={`portfolio-history-${key}`}>
                  {item.url ? (
                    <a href={item.url} target='blank'>
                      <strong>{item.year}</strong> | {item.title}
                    </a>
                  ) : (
                    <>
                      <strong>{item.year}</strong> | {item.title}
                    </>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
