import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../components/partials/Normal-section';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

const styleColors = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/pc/guide-color.png';
const styleFonts = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/pc/guide-fonts.png';

const workDesignFanclubCoin1 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/pc/landing-1.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/mobile/landing-1.jpg';

const workDesignFanclubCoin2 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/pc/landing-2.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/mobile/landing-2.jpg';

const workDesignFanclubCoin3 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/pc/landing-3.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/fancoin/mobile/landing-3.jpg';

class FanclubCoin extends Component {
  render() {
    return (
      <div className='detail-each'>
        <section className='sec-padded-end sec-style-guide'>
          <div className='l-wrapper'>
            <StyleSheetItem title='Colors' imgName='Styles-Color' imgSrc={styleColors} imgWidth={521} imgHeight={155} />
            <StyleSheetItem title='Fonts' imgName='Styles-Font' imgSrc={styleFonts} imgWidth={579} imgHeight={324} />
          </div>
        </section>
        <NormalSection
          title='랜딩페이지'
          content={[
            {
              wrapper: 'l-wrapper',
              grid: {
                column: 1,
                imgs: [
                  { title: 'Subpages', src: workDesignFanclubCoin1 },
                  { title: 'Subpages', src: workDesignFanclubCoin2 },
                  { title: 'Subpages', src: workDesignFanclubCoin3 },
                ],
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default FanclubCoin;
