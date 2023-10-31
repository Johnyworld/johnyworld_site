import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../components/partials/Normal-section';

const styleColors = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/guide-color.png';
const styleFonts = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/guide-fonts.png';
const styleButtons = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/guide-buttons.png';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

const workDesignSoohan = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/main-1.png'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/mobile/main-1.png';

const soohanSub01 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/sub-1.png'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/mobile/sub-1.png';

const soohanSub02 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/pc/sub-2.png'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/soohan/mobile/sub-2.png';

class Soohan extends Component {
  render() {
    return (
      <div className='detail-each'>
        <section className='sec-padded-end sec-style-guide'>
          <div className='l-wrapper'>
            <StyleSheetItem title='Colors' imgName='Styles-Color' imgSrc={styleColors} imgWidth={521} imgHeight={155} />
            <StyleSheetItem title='Fonts' imgName='Styles-Font' imgSrc={styleFonts} imgWidth={598} imgHeight={265} />
            <StyleSheetItem
              title='Buttons'
              imgName='Styles-Button'
              imgSrc={styleButtons}
              imgWidth={320}
              imgHeight={115}
            />
          </div>
        </section>
        <NormalSection
          title='메인페이지'
          content={[
            {
              wrapper: 'l-wrapper',
              imgSrc: workDesignSoohan,
              imgTitle: 'Mainpage',
            },
          ]}
        />
        <NormalSection
          title='서브페이지'
          content={[
            {
              wrapper: 'l-wrapper',
              grid: {
                column: 2,
                tabletCol: 1,
                gap: 60,
                imgs: [
                  { title: 'Subpages', src: soohanSub01 },
                  { title: 'Subpages', src: soohanSub02 },
                ],
              },
            },
          ]}
        />
        <NormalSection
          title='인터뷰영상 제작'
          content={[
            {
              wrapper: 'l-wrapper',
              desc: '촬영, 편집 작업 진행',
              iframe: {
                title: 'soo-interview',
                src: 'https://player.vimeo.com/video/292651398',
                style: { background: '#222', width: '100%', height: '47vw' },
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default Soohan;
