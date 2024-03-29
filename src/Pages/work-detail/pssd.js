import React, { Component } from 'react';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../components/partials/Normal-section';

const styleColors = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/guide-color.png';
const stylePattern = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/guide-pattern.png';
const styleIcons = 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/guide-icons.png';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
const pssd01 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/pssd-01.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/mobile/pssd-01.jpg';

const pssd02 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/pssd-02.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/mobile/pssd-02.jpg';

const pssd03 = !isMobile
  ? 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/pc/pssd-03.jpg'
  : 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/pssd/mobile/pssd-03.jpg';

class Pssd extends Component {
  render() {
    return (
      <div className='detail-each'>
        <section className='sec-padded-end sec-style-guide'>
          <div className='l-wrapper'>
            <StyleSheetItem title='Colors' imgName='Styles-Color' imgSrc={styleColors} imgWidth={323} imgHeight={155} />
            <StyleSheetItem
              title='Pattern'
              imgName='Styles-Pattern'
              imgSrc={stylePattern}
              imgWidth={349}
              imgHeight={62}
            />
            <StyleSheetItem title='Icons' imgName='Styles-Icon' imgSrc={styleIcons} imgWidth={252} imgHeight={94} />
          </div>
        </section>
        <NormalSection
          title='쉽고 차분한 진행 과정'
          content={[
            {
              wrapper: 'l-wrapper',
              subtitle: '한 스텝, 한 스텝. 다루기 쉬운 프로세스.',
              desc: '컴퓨터를 잘 모르는 사람이라도 쉽게 다룰 수 있도록 차근차근 한단계씩 진행합니다.',
              imgSrc: pssd01,
              imgTitle: 'PSSD Process',
            },
          ]}
          addClassName='sec-padded-end'
        />
        <NormalSection
          title='손쉬운 사용자 관리 프로세스'
          content={[
            {
              wrapper: 'l-wrapper',
              subtitle: '손쉬운 관리창. 최대 4명의 사용자. 철저한 보안.',
            },
            {
              wrapper: 'l-wrapper-center',
              imgSrc: pssd02,
              imgTitle: 'PSSD Admin Process',
              style: {
                maxWidth: 912,
              },
            },
          ]}
          addClassName='sec-padded-end'
        />
        <NormalSection
          title='일관된 사용성, 일관된 디자인'
          content={[
            {
              wrapper: 'l-wrapper',
              subtitle: '가장 기본적인 퀄리티를 유지합니다.',
              desc: '모든 사용이 쉬울 수 있도록 이전 버전에 비해 많은 불필요한 과정들을 생략했습니다. 정말 쉬운 사용성과 아름다운 디자인으로 일관됩니다.',
            },
            {
              wrapper: 'l-wrapper-center',
              imgSrc: pssd03,
              imgTitle: 'PSSD Design',
              style: {
                maxWidth: 790,
              },
            },
          ]}
          addClassName='sec-padded-end'
        />
      </div>
    );
  }
}

export default Pssd;
