import React, { Component } from 'react';
import NormalSection from './sections/normal-section';

let krxDream, krxStoryboard, krxO2o, krxIntro, krxPast, krxTutorial01, krxTutorial02, krxTutorial03, krxTutorial04, krxTradingTut01, krxTradingTut02, krxTradingInvestor00, krxTradingInvestor01, krxTradingInvestor02, krxTradingInvestor03, krxTradingInvestor04, krxTradingKrx00, krxTradingKrx02, krxTradingKrx03, krxTradingKrx04, krxPublic01, krxPublic02, krxPublic03, krxPublic04, krxPublic05, krxPublic06, krxPublic07, krxDerivativesTut, krxDerivativesSeed, krxDerivativesSeed01, krxDerivativesSeed02, krxDerivativesSeed03, krxDerivativesSeed04, krxDerivativesSeedTablet, krxBig701, krxBig702;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    krxDream = require( '../../../mobile-images/work-detail-krx/krx-dream.png' );
    krxStoryboard = require( '../../../mobile-images/work-detail-krx/krx-storyboard.jpg' );
    krxO2o = require( '../../../mobile-images/work-detail-krx/krx-o2o.png' );
    krxIntro = require( '../../../mobile-images/work-detail-krx/krx-intro.jpg' );
    krxPast = require( '../../../mobile-images/work-detail-krx/krx-past.jpg' );
    krxTutorial01 = require( '../../../mobile-images/work-detail-krx/krx-tutorial-01.jpg' );
    krxTutorial02 = require( '../../../mobile-images/work-detail-krx/krx-tutorial-02.jpg' );
    krxTutorial03 = require( '../../../mobile-images/work-detail-krx/krx-tutorial-03.jpg' );
    krxTutorial04 = require( '../../../mobile-images/work-detail-krx/krx-tutorial-04.jpg' );
    krxTradingTut01 = require( '../../../mobile-images/work-detail-krx/krx-trading-tut-01.jpg' );
    krxTradingTut02 = require( '../../../mobile-images/work-detail-krx/krx-trading-tut-02.jpg' );
    krxTradingInvestor00 = require( '../../../mobile-images/work-detail-krx/krx-trading-investor-00.jpg' );
    krxTradingInvestor01 = require( '../../../mobile-images/work-detail-krx/krx-trading-investor-01.jpg' );
    krxTradingInvestor02 = require( '../../../mobile-images/work-detail-krx/krx-trading-investor-02.jpg' );
    krxTradingInvestor03 = require( '../../../mobile-images/work-detail-krx/krx-trading-investor-03.jpg' );
    krxTradingInvestor04 = require( '../../../mobile-images/work-detail-krx/krx-trading-investor-04.jpg' );
    krxTradingKrx00 = require( '../../../mobile-images/work-detail-krx/krx-trading-krx-00.jpg' );
    krxTradingKrx02 = require( '../../../mobile-images/work-detail-krx/krx-trading-krx-02.jpg' );
    krxTradingKrx03 = require( '../../../mobile-images/work-detail-krx/krx-trading-krx-03.jpg' );
    krxTradingKrx04 = require( '../../../mobile-images/work-detail-krx/krx-trading-krx-04.jpg' );
    krxPublic01 = require( '../../../mobile-images/work-detail-krx/krx-public-01.jpg' );
    krxPublic02 = require( '../../../mobile-images/work-detail-krx/krx-public-02.jpg' );
    krxPublic03 = require( '../../../mobile-images/work-detail-krx/krx-public-03.jpg' );
    krxPublic04 = require( '../../../mobile-images/work-detail-krx/krx-public-04.jpg' );
    krxPublic05 = require( '../../../mobile-images/work-detail-krx/krx-public-05.jpg' );
    krxPublic06 = require( '../../../mobile-images/work-detail-krx/krx-public-06.jpg' );
    krxPublic07 = require( '../../../mobile-images/work-detail-krx/krx-public-07.jpg' );
    krxDerivativesTut = require( '../../../mobile-images/work-detail-krx/krx-derivatives-tutorial.jpg' );
    krxDerivativesSeed = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds.jpg' );
    krxDerivativesSeed01 = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds-01.jpg' );
    krxDerivativesSeed02 = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds-02.jpg' );
    krxDerivativesSeed03 = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds-03.jpg' );
    krxDerivativesSeed04 = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds-04.jpg' );
    krxDerivativesSeedTablet = require( '../../../mobile-images/work-detail-krx/krx-derivatives-seeds-tablet.jpg' );
    krxBig701 = require( '../../../mobile-images/work-detail-krx/krx-big7-01.jpg' );
    krxBig702 = require( '../../../mobile-images/work-detail-krx/krx-big7-02.jpg' );
} else {
    krxDream = require( '../../../images/work-detail-krx/krx-dream.png' );
    krxStoryboard = require( '../../../images/work-detail-krx/krx-storyboard.jpg' );
    krxO2o = require( '../../../images/work-detail-krx/krx-o2o.png' );
    krxIntro = require( '../../../images/work-detail-krx/krx-intro.jpg' );
    krxPast = require( '../../../images/work-detail-krx/krx-past.jpg' );
    krxTutorial01 = require( '../../../images/work-detail-krx/krx-tutorial-01.jpg' );
    krxTutorial02 = require( '../../../images/work-detail-krx/krx-tutorial-02.jpg' );
    krxTutorial03 = require( '../../../images/work-detail-krx/krx-tutorial-03.jpg' );
    krxTutorial04 = require( '../../../images/work-detail-krx/krx-tutorial-04.jpg' );
    krxTradingTut01 = require( '../../../images/work-detail-krx/krx-trading-tut-01.jpg' );
    krxTradingTut02 = require( '../../../images/work-detail-krx/krx-trading-tut-02.jpg' );
    krxTradingInvestor00 = require( '../../../images/work-detail-krx/krx-trading-investor-00.jpg' );
    krxTradingInvestor01 = require( '../../../images/work-detail-krx/krx-trading-investor-01.jpg' );
    krxTradingInvestor02 = require( '../../../images/work-detail-krx/krx-trading-investor-02.jpg' );
    krxTradingInvestor03 = require( '../../../images/work-detail-krx/krx-trading-investor-03.jpg' );
    krxTradingInvestor04 = require( '../../../images/work-detail-krx/krx-trading-investor-04.jpg' );
    krxTradingKrx00 = require( '../../../images/work-detail-krx/krx-trading-krx-00.jpg' );
    krxTradingKrx02 = require( '../../../images/work-detail-krx/krx-trading-krx-02.jpg' );
    krxTradingKrx03 = require( '../../../images/work-detail-krx/krx-trading-krx-03.jpg' );
    krxTradingKrx04 = require( '../../../images/work-detail-krx/krx-trading-krx-04.jpg' );
    krxPublic01 = require( '../../../images/work-detail-krx/krx-public-01.jpg' );
    krxPublic02 = require( '../../../images/work-detail-krx/krx-public-02.jpg' );
    krxPublic03 = require( '../../../images/work-detail-krx/krx-public-03.jpg' );
    krxPublic04 = require( '../../../images/work-detail-krx/krx-public-04.jpg' );
    krxPublic05 = require( '../../../images/work-detail-krx/krx-public-05.jpg' );
    krxPublic06 = require( '../../../images/work-detail-krx/krx-public-06.jpg' );
    krxPublic07 = require( '../../../images/work-detail-krx/krx-public-07.jpg' );
    krxDerivativesTut = require( '../../../images/work-detail-krx/krx-derivatives-tutorial.jpg' );
    krxDerivativesSeed = require( '../../../images/work-detail-krx/krx-derivatives-seeds.jpg' );
    krxDerivativesSeed01 = require( '../../../images/work-detail-krx/krx-derivatives-seeds-01.jpg' );
    krxDerivativesSeed02 = require( '../../../images/work-detail-krx/krx-derivatives-seeds-02.jpg' );
    krxDerivativesSeed03 = require( '../../../images/work-detail-krx/krx-derivatives-seeds-03.jpg' );
    krxDerivativesSeed04 = require( '../../../images/work-detail-krx/krx-derivatives-seeds-04.jpg' );
    krxDerivativesSeedTablet = require( '../../../images/work-detail-krx/krx-derivatives-seeds-tablet.jpg' );
    krxBig701 = require( '../../../images/work-detail-krx/krx-big7-01.jpg' );
    krxBig702 = require( '../../../images/work-detail-krx/krx-big7-02.jpg' );
}


class Krx extends Component {
    render() {
        return (
            <div className="detail-each">
                 <NormalSection 
                    title="O2O Exhivision" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "오프라인 전시의 시/공간적 한계를 극복하기 위한 새로운 형태의 전시방법론.",
                            desc: "1. 오프라인 전시의 한계(공간,시간)를 극복하여 효율적인 전시운영 2. 정보 예습을 통한 집중력 향상과 자기주도적 관람 3. 관람객의 지속적인 관심을 유도하여 재방문율 증가",
                            imgSrc: krxO2o,
                            imgTitle: "KRX o2o Exhivision",
                            style : {
                                maxWidth: 1100,
                                maxHeight: 431
                            }
                        }
                    ]}
                    addClassName="sec-padded-end"
                />
                <NormalSection 
                    title="12개의 씨앗을 든 시간여행자" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "12개의 씨앗은 12개의 최초 상장 기업을 상징합니다.",
                            desc: "12개의 씨앗이 자라는 과정을 통해 KRX의 60년 역사와 미래를 체험합니다. 한손에 쥐어진 씨앗을 보며 한국 경제성장의 주인공이 되어보길 꿈꿉니다.",
                            imgSrc: krxDream,
                            imgTitle: "KRX Dream",
                            style : {
                                maxWidth: 1100,
                                maxHeight: 678
                            }
                        }
                    ]}
                    addClassName="sec-padded-end"
                />
                <NormalSection 
                    title="스토리보드" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "12개의 씨앗은 12개의 최초 상장 기업을 상징합니다.",
                            desc: "KRX의 과거부터 미래까지 꿈속 여행. 이야기로 이루어진 그 여정을 더 알기 쉽게 이해하고 공유하기 위해 스토리보드는 만화 콘티로 제작하였습니다.",
                            imgSrc: krxStoryboard,
                            imgTitle: "KRX Storyboard",
                        }
                    ]}
                />
                <NormalSection 
                    title="12개의 씨앗, 증권거래소의 시작" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "성장하는 한국거래소",
                            desc: "12개의 씨앗을 뿌리면, 한국거래소의 성장 과정의 영상을 바닥에 보여줍니다. 그리고 그 길 끝에서 과거로의 시간여행을 떠납니다.",
                            imgSrc: krxIntro,
                            imgTitle: "KRX Intro",
                        }
                    ]}
                />
                <NormalSection 
                    title="과거 : 1960's" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "명동거래소 풍경속에 관람객을 실시간 합성으로 참여형 전시",
                            desc: "격탁 후 에는 그때 당시의 소개영상으로 마치 과거로 온듯 한 체험 제공합니다. 거래소에서의 합성된 자신의 모습을 찍으며 단순히 보고 가는것이 아닌 그 이상의 가치를 제공합니다.",
                            imgSrc: krxPast,
                            imgTitle: "KRX Past",
                        },
                        {
                            wrapper: 'l-wrapper',
                            iframe: {
                                title: '60s',
                                src: 'https://www.youtube.com/embed/XawoQWU2h0Y',
                                style: { background: '#222', width: '100%', height: '25vw' },
                            }
                        }
                    ]}
                />
                <NormalSection 
                    title="매매거래 체험하기"
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "과거를 지나, 현재로.",
                            desc: "현재에는 키오스크를 통해 매매거래를 체험하고, 나의 기업을 상장해보는 체험이 가능합니다.",
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "매매거래 튜토리얼",
                            desc: "투자자, 기업, KRX간의 거래 과정의 튜토리얼을 애니메이션으로 보여줍니다. 화면은 전면 스크린에 크게 보여집니다.",
                        },
                        {
                            wrapper: 'l-wrapper',
                            grid: {
                                column: 1,
                                imgs: [ 
                                    { title: 'KRX Tutorial', src: krxTradingTut01 },
                                    { title: 'KRX Tutorial', src: krxTradingTut02 }
                                ]
                            },
                            iframe: {
                                title: 'krx-tutorial',
                                src: 'https://www.youtube.com/embed/iwAna8HFayA',
                                style: { width: '100%', height: '25vw' }
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            desc: '도슨트의 진행에 따라 고객들은 매매거래 체험을 위한 설명을 듣고, 실제로 체험해 볼 수 있습니다.',
                            grid: {
                                column: 2,
                                gap: 60,
                                imgs: [ 
                                    { title: 'KRX Tutorial', src: krxTutorial01 },
                                    { title: 'KRX Tutorial', src: krxTutorial04 },
                                    { title: 'KRX Tutorial', src: krxTutorial02 },
                                    { title: 'KRX Tutorial', src: krxTutorial03 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: "매매거래 / 불공정거래 적발 체험 (키오스크)",
                            desc: "증권 매매거래를 해보지 않은 어린 학생부터 남녀노소 관계 없이 게임을 즐기듯 쉽게 증권 매매거래를 체험할 수 있습니다. 한쪽에서는 투자자의 역할로 매매거래를 체험하고, 다른 한쪽에서는 거래소의 입장에서 불공정거래를 감시하는 역할을 체험합니다.",
                            grid : {
                                column: 3,
                                mobileCol: 2,
                                gap: 60,
                                imgs: [
                                    { title: 'KRX Trading Investor', src: krxTradingInvestor00 },
                                    { title: 'KRX Trading Investor', src: krxTradingInvestor02 },
                                    { title: 'KRX Trading Investor', src: krxTradingInvestor03 },
                                    { title: 'KRX Trading Investor', src: krxTradingInvestor04 },
                                    { title: 'KRX Trading Investor', src: krxTradingInvestor01 },
                                    { title: 'KRX Trading', src: krxTradingKrx00 },
                                    { title: 'KRX Trading', src: krxTradingKrx02 },
                                    { title: 'KRX Trading', src: krxTradingKrx03 },
                                    { title: 'KRX Trading', src: krxTradingKrx04 }
                                ]
                            },
                            iframe: {
                                title: 'krx-market-tutorial',
                                src: 'https://www.youtube.com/embed/yZ_UaCLNuTk',
                                style: { width: '100%', height: '47vw' }
                            }
                        }
                    ]}
                />
                <NormalSection 
                    title='나의 기업 상장하기'
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: "두 개의 키오스크에서는 기업 상장을 체험하고, 다른 한 키오스크에서는 기업 상장을 허가해주는 거래소의 역할을 체험해볼 수 있습니다. 각 키오스크간 실시간으로 연결되어 진행됩니다.",
                            imgSrc: krxPublic01,
                            imgTitle: 'Public my company',
                            grid : {
                                column: 3,
                                mobileCol: 2,
                                gap: 60,
                                imgs: [
                                    { title: 'KRX Public Company', src: krxPublic02 },
                                    { title: 'KRX Public Company', src: krxPublic03 },
                                    { title: 'KRX Public Company', src: krxPublic04 },
                                    { title: 'KRX Public Company', src: krxPublic05 },
                                    { title: 'KRX Public Company', src: krxPublic06 },
                                    { title: 'KRX Public Company', src: krxPublic07 },
                                ]
                            }
                        },
                    ]}
                />
                <NormalSection 
                    title='미래를 내다보는 안목, 파생상품'
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '파생상품 튜토리얼',
                            desc: "파생상품의 역할에 대해 누구나 알기 쉽게 애니메이션으로 설명해줍니다.",
                        },
                        {
                            imgSrc: krxDerivativesTut,
                            imgTitle: 'KRX Derivatives Tutorial',
                        },
                        {
                            wrapper: 'l-wrapper',
                            iframe: {
                                title: 'krx-derivatives-tutorial',
                                src: 'https://www.youtube.com/embed/79_Dag4Gp8k',
                                style: { width: '100%', height: '70vw' }
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '12개의 씨앗 날리기',
                            desc: "태블릿의 씨앗을 후 불면, 12개의 씨앗이 날아갑니다. (센서로 감지) 글로벌 BIG 7 을 향한 우리의 바람을 씨앗과 함께 날려봅니다.",
                            grid : {
                                column: 1,
                                imgs: [
                                    { title: 'KRX Derivatives Seed', src: krxDerivativesSeed },
                                    { title: 'KRX Derivatives Seed Tablet', src: krxDerivativesSeedTablet }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: 'KRX의 내일을 바라봅니다',
                            desc: "12개의 씨앗은 희망이 되어 글로벌 BIG 7 을 향해 날아갑니다. 문까지 씨앗이 날아가면 문이 열리고 글로벌 BIG 7 존의 관람이 시작됩니다.",
                            grid : {
                                gap: 60,
                                column: 2,
                                imgs: [
                                    { title: 'KRX Derivatives Seed', src: krxDerivativesSeed01 },
                                    { title: 'KRX Derivatives Seed', src: krxDerivativesSeed02 },
                                    { title: 'KRX Derivatives Seed', src: krxDerivativesSeed03 },
                                    { title: 'KRX Derivatives Seed', src: krxDerivativesSeed04 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            iframe: {
                                title: 'krx-seed-1',
                                src: 'https://www.youtube.com/embed/YhsO20Z66aI',
                                style: { width: '100%', height: '30vw' }
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            iframe: {
                                title: 'krx-seed-2',
                                src: 'https://www.youtube.com/embed/I3EctvHmLvc',
                                style: { width: '100%', height: '47vw' }
                            }
                        },
                    ]}
                />
                <NormalSection 
                    title='글로벌 BIG 7'
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: 'KRX의 내일을 경험합니다',
                            desc: "12개의 씨앗의 마지막 여정입니다. 글로벌 BIG 7 이라는 큰 꿈을 안고 KRX는 앞으로 계속 성장해 나갈것입니다. KRX의 미래를 보여주는 영상이 재생된 후, 가운데에 씨앗을 프로젝터로 보여줍니다. 씨앗을 손으로 받고나면 마지막 설명을 듣고, 화분을 선물로 받습니다.",
                            grid : {
                                column: 1,
                                imgs: [
                                    { title: 'KRX Big 7', src: krxBig701 },
                                    { title: 'KRX Big 7', src: krxBig702 }
                                ]
                            },
                            iframe: {
                                title: 'krx-global-big-7',
                                src: 'https://www.youtube.com/embed/ZV9aIXi_yr4',
                                style: { width: '100%', height: '35vw' }
                            }
                        },
                    ]}
                />
            </div>
        )
    }
}

export default Krx;