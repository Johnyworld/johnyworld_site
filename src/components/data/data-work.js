let workScreenFocus, workScreenBigpictureEnt, workScreenFanclubCoin, workScreenSoohan, workScreenPssd, workScreenKrx, workScreenCamping;
let workMobileFocus, workMobileSoohan, workMobileBigpictureEnt, workMobileFanclubCoin, workMobileCamping;
let workBgFocus, workBgPssd, workBgKrx, workBgCamping, workBgSoohan, workBgFanclubCoin, workBgBigpictureEnt;
// workBgSamsungTheme
let workKeyBgFocus, workKeyBgBigpictureEnt, workKeyBgFanclubCoin, workKeyBgSoohan, workKeyBgKrx, workKeyBgPssd, workKeyBgCamping
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    // Thumnails
    workBgFocus = require( '../../mobile-images/workbg-focus.jpg' );
    workBgPssd = require( '../../mobile-images/workbg-pssd.jpg' );
    workBgKrx = require( '../../mobile-images/workbg-krx.jpg' );
    // workBgSamsungTheme = require( '../../mobile-images/workbg-samsung-theme.jpg' );
    workBgCamping = require( '../../mobile-images/workbg-camping.jpg' );
    workBgSoohan = require( '../../mobile-images/workbg-soo.jpg' );
    workBgFanclubCoin = require( '../../mobile-images/workbg-fanclub-coin.jpg' );
    workBgBigpictureEnt = require( '../../mobile-images/workbg-bigpicture.jpg' );

    // Keyvisualds
    workKeyBgFocus = require( '../../mobile-images/work-detail-focus/focus-keyvisualbg.jpg' );
    workKeyBgBigpictureEnt = require( '../../mobile-images/work-detail-bigpic/bigpic-keyvisualbg.jpg' );
    workKeyBgFanclubCoin = require( '../../mobile-images/work-detail-fancoin/fancoin-keyvisualbg.jpg' );
    workKeyBgSoohan = require( '../../mobile-images/work-detail-soohan/soohan-keyvisualbg.jpg' );
    workKeyBgKrx = require( '../../mobile-images/work-detail-krx/krx-keyvisualbg.jpg' );
    workKeyBgPssd = require( '../../mobile-images/work-detail-pssd/pssd-keyvisualbg.jpg' );
    workKeyBgCamping = require( '../../mobile-images/work-detail-camping/camping-keyvisualbg.jpg' );

    // Devices
    workScreenFocus = require( '../../mobile-images/work-detail-focus/focus-devices.jpg' );
    workScreenSoohan = require( '../../mobile-images/work-detail-soohan/soohan-devices.jpg' );
    workScreenPssd = require( '../../mobile-images/work-detail-pssd/pssd-devices.jpg' );
    workScreenKrx = require( '../../mobile-images/work-detail-krx/krx-devices.jpg' );
    workScreenBigpictureEnt = require( '../../mobile-images/work-detail-bigpic/bigpic-devices.jpg' );
    workScreenFanclubCoin = require( '../../mobile-images/work-detail-fancoin/fancoin-devices.jpg' );
    workScreenCamping = require( '../../mobile-images/work-detail-camping/camping-devices.jpg' );
} else {
    // Thumnails
    workBgFocus = require( '../../images/workbg-focus.jpg' );
    workBgPssd = require( '../../images/workbg-pssd.jpg' );
    workBgKrx = require( '../../images/workbg-krx.jpg' );
    // workBgSamsungTheme = require( '../../images/workbg-samsung-theme.jpg' );
    workBgCamping = require( '../../images/workbg-camping.jpg' );
    workBgSoohan = require( '../../images/workbg-soo.jpg' );
    workBgFanclubCoin = require( '../../images/workbg-fanclub-coin.jpg' );
    workBgBigpictureEnt = require( '../../images/workbg-bigpicture.jpg' );

    // Keyvisualds
    workKeyBgFocus = require( '../../images/work-detail-focus/focus-keyvisualbg.jpg' );
    workKeyBgBigpictureEnt = require( '../../images/work-detail-bigpic/bigpic-keyvisualbg.jpg' );
    workKeyBgFanclubCoin = require( '../../images/work-detail-fancoin/fancoin-keyvisualbg.jpg' );
    workKeyBgSoohan = require( '../../images/work-detail-soohan/soohan-keyvisualbg.jpg' );
    workKeyBgKrx = require( '../../images/work-detail-krx/krx-keyvisualbg.jpg' );
    workKeyBgPssd = require( '../../images/work-detail-pssd/pssd-keyvisualbg.jpg' );
    workKeyBgCamping = require( '../../images/work-detail-camping/camping-keyvisualbg.jpg' );

    // Devices
    workScreenFocus = require( '../../images/work-detail-focus/focus-devices.jpg' );
    workScreenSoohan = require( '../../images/work-detail-soohan/soohan-devices.jpg' );
    workScreenPssd = require( '../../images/work-detail-pssd/pssd-devices.jpg' );
    workScreenKrx = require( '../../images/work-detail-krx/krx-devices.jpg' );
    workScreenBigpictureEnt = require( '../../images/work-detail-bigpic/bigpic-devices.jpg' );
    workScreenFanclubCoin = require( '../../images/work-detail-fancoin/fancoin-devices.jpg' );
    workScreenCamping = require( '../../images/work-detail-camping/camping-devices.jpg' );

    // Mobile Screen
    workMobileFocus = require( '../../images/work-detail-focus/focus-devices-mobile.jpg' );
    workMobileSoohan = require( '../../images/work-detail-soohan/soohan-devices-mobile.jpg' );
    workMobileBigpictureEnt = require( '../../images/work-detail-bigpic/bigpic-devices-mobile.jpg' );
    workMobileFanclubCoin = require( '../../images/work-detail-fancoin/fancoin-devices-mobile.jpg' );
    workMobileCamping = require( '../../images/work-detail-camping/camping-devices-mobile.jpg' );
}



const dataWork = [
    {
        id: "05001",
        title: "Camping Poster",
        slug: "camping-poster",
        comment: "제3회 '자전거타고 캠핑가자' 포스터 디자인",
        summary: [
            { title:"참여인원", desc:["1명"] },
            { title:"내 업무범위", desc:["기획, 일러스트레이션 - 100%"] },
            { title:"디자인", desc:["아이소메트리 기법을 사용한 배경과, 아기자기한 캐릭터들을 꼼꼼히 배치하여 귀여움과 재미를 느낄 수 있음."] },
        ],
        keywords: [
            "포스터", "일러스트레이션"
        ],
        category1: "illustration",
        category2: "Character & Map illustration",
        thumbnail: workBgCamping,
        keyvisual: workKeyBgCamping,
        screen: workScreenCamping,
        mobileScreen: workMobileCamping,
        date: "2014. 07"
    },
    // {
    //     id: "05002",
    //     title: "Samsung Mobile Theme",
    //     slug: "samsung-mobile-theme",
    //     comment: "삼성 모바일 테마 디자인",
    //     summary: [
    //         { title:"", desc:[""] },
    //         { title:"", desc:[""] },
    //         { title:"", desc:[""] },
    //         { title:"", desc:[""] },
    //         { title:"", desc:[""] },
    //         { title:"", desc:[""] },
    //     ],
    //     keywords: [
    //         "모바일", "테마디자인", "그래픽유저인터페이스"
    //     ],
    //     category1: "UX/UI",
    //     category2: "Theme Design",
    //     thumbnail: workBgSamsungTheme,
    //     date: "2015. 10 - 2016. 06"
    // },
    {
        id: "05003",
        title: "Fanclub Coin",
        slug: "fanclub-coin",
        comment: "스포와이드 팬클럽코인 랜딩페이지 제작",
        summary: [
            { title:"참여인원", desc:["2명"] },
            { title:"내 업무범위", desc:["기획 - 80%", "디자인 - 50%", "워드프레스 개발 - 100%"] },
            { title:"소개", desc:["스포츠 암호화폐 거래소인 스포와이드의 영문 백서사이트 랜딩페이지 제작."] },
            { title:"워드프레스", desc:["워드프레스로 빠르고 편하게 개발했지만, 원하는 디자인을 적용하기 위해 기존 테마에서 많이 커스터마이징 했습니다."] },
            { title:"주 테마, 플러그인", desc:["- Salient Theme", "- Google Analytics"] },
        ],
        keywords: [
            "웹디자인", "워드프레스", "반응형 웹"
        ],
        category1: "Wordpress",
        category2: "Web Design + Wordpress",
        thumbnail: workBgFanclubCoin,
        keyvisual: workKeyBgFanclubCoin,
        screen: workScreenFanclubCoin,
        mobileScreen: workMobileFanclubCoin,
        darkPage: true,
        date: "2019. 05",
        url: "https://fanclubcoin.com/"
    },
    {
        id: "05004",
        title: "Samsung PSSD",
        slug: "samsung-pssd",
        comment: "삼성 포터블 SSD 보안프로그램 UI, GUI디자인",
        summary: [
            { title:"참여인원", desc:["UX/UI 디자인팀 4명"] },
            { title:"내 업무범위", desc:["기획 - 25%", "UX/UI 디자인 - 50%"] },
            { title:"사용자 경험", desc:["기존 프로그램의 복잡한 기능들은 다 빼고, 최소화하여 사용하기 쉽도록 모든 페이지간의 상호작용 확립."] },
            { title:"그래픽 인터페이스", desc:["실 제품의 외관과 동일한 패턴을 이용하여 일관성 유지하고 반짝이는 화려한 애니메이션으로 특징을 강화."] },
            { title:"단순한 과정", desc:["모든 과정을 단순, 직관화하고 보안성을 강화함"] },
        ],
        keywords: [
            "윈도우 프로그램", "UX, UI 디자인"
        ],
        category1: "UX/UI",
        category2: "UI Design",
        thumbnail: workBgPssd, 
        keyvisual: workKeyBgPssd,
        screen: workScreenPssd,
        date: "2014. 08"
    },
    {
        id: "05005",
        title: "KRX Exhibision",
        slug: "krx",
        comment: "KRX 국제금융센터 금융거래체험관 기획, UX, UI, GUI디자인",
        summary: [
            { title:"참여인원", desc:["기획, 디자인팀 5명", "개발팀 4명", "인테리어, 시공업체"] },
            { title:"내 업무범위", desc:["기획 - 20%", "GUI : 증권거래소의 시작 - 10%", "GUI : 매매거래체험 - 25%", "GUI : 나의기업상장하기 - 80%", "삽입일러스트 - 100%", "모션그래픽(기획) - 30%"] },
            { title:"디자인", desc:["12개의 씨앗을 담은 육각형 모양을 기본 모티브로 사용. 빛은 화려하게, 색상은 블루와 그레이로 신뢰감을 형성."] },
            { title:"사용자 경험", desc:["주 타겟층이 학생들인 점을 감안하여, 대부분의 과정을 게임을 하듯 편하게 진행할 수 있도록 제작."] },
            { title:"쉽게", desc:["'주식거래'라는 어려운 주제를 관람자들이 최대한 쉽게 경험할 수 있도록 핵심만 직관적으로 풀어냄."] },
            { title:"O2O Exhivision", eng: true, desc:["오프라인 전시의 시/공간적 한계를 극복하기 위한 새로운 형태의 전시방법론"] },
        ],
        keywords: [
            "전시기획", "키오스크, 스크린 GUI", "UX, UI 디자인", "일러스트레이션", "모션그래픽"
        ],
        category1: "UX/UI",
        category2: "UX, UI Design",
        thumbnail: workBgKrx, 
        keyvisual: workKeyBgKrx,
        screen: workScreenKrx,
        date: "2014. 12"
    },
    {
        id: "05006",
        title: "Soo Oriental Clicic",
        slug: "soo-clinic",
        comment: "수한의원 홈페이지 제작",
        summary: [
            { title:"참여인원", desc:["1명"] },
            { title:"내 업무범위", desc:["기획 - 100%", "디자인 - 100%", "워드프레스 개발 - 100%"] },
            { title:"디자인", desc:["'한의원' 하면 한국적이고 고풍스러운 이미지가 떠오르지만, 좀 더 현대적이고 세련된 디자인으로 고정관념을 탈피하였습니다."] },
            { title:"워드프레스", desc:["워드프레스로 빠르고 편하게 개발했지만, 원하는 디자인을 적용하기 위해 기존 테마에서 많이 커스터마이징 했습니다."] },
            { title:"주 테마, 플러그인", desc:["- Total Theme", "- Advanced Custom Field", "- Google Analytics"] },
        ],
        keywords: [
            "웹디자인", "워드프레스", "반응형 웹"
        ],
        category1: "Wordpress",
        category2: "Web Design + Wordpress",
        thumbnail: workBgSoohan,
        keyvisual: workKeyBgSoohan,
        screen: workScreenSoohan,
        mobileScreen: workMobileSoohan,
        date: "2018. 11",
        url: "http://soo-clinic.kr/"
    },
    {
        id: "05007",
        title: "Bigpicture Entertainment",
        slug: "bigpicture-ent",
        comment: "빅픽처 엔터테인먼트 홈페이지 제작",
        summary: [
            { title: "참여인원", desc: ["1명"] },
            { title: "내 업무범위", desc: ["기획 - 100%", "디자인 - 100%", "워드프레스 개발 - 100%" ] },
            { title: "디자인", desc: ["기존의 많은 엔터테인먼트 사이트들은 일관된 유행을 따르고 있었는데, 현시점의 트렌드와는 맞지 않는 디자인이라 판단하고, 좀 더 트렌디하고 차별된 디자인 레이아웃을 적용했습니다. 다양하게 사진을 배치하기보다는 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지들을 적용하여 제작했습니다."] },
            { title: "워드프레스 플러그인 개발 - PHP", desc: ["클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. 클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지도 구성하였습니다."] },
            { title:"워드프레스", desc:["워드프레스로 빠르고 편하게 개발했지만, 원하는 디자인을 적용하기 위해 기존 테마에서 많이 커스터마이징 했습니다."] },
            { title:"주 테마, 플러그인", desc:["- Salient Theme", "- Bigpicture ENT Video Lightbox(직접 개발)", "- Advanced Custom Field", "- Google Analytics"] },
        ],
        keywords: [
            "웹디자인", "워드프레스", "반응형 웹"
        ],
        category1: "Wordpress",
        category2: "Web Design + Wordpress",
        thumbnail: workBgBigpictureEnt,
        keyvisual: workKeyBgBigpictureEnt,
        screen: workScreenBigpictureEnt,
        mobileScreen: workMobileBigpictureEnt,
        date: "2019. 01",
        url: "http://bigpicture-ent.com/"
    },
    {
        id: "05008",
        title: "Johnyworld 2019",
        slug: "the-focus",
        comment: "부제 : the Focus",
        summary: [
            { title: "참여인원", desc: ["1명"] },
            { title: "내 업무범위", desc: ["기획 - 100%", "디자인 - 100%", "개발 - 100%" ] },
        ],
        keywords: [
            "React JS", "UX, UI 디자인", "웹 인터렉티브 디자인"
        ],
        category1: "UX/UI",
        category2: "Front-end Development",
        thumbnail: workBgFocus, 
        keyvisual: workKeyBgFocus,
        screen: workScreenFocus,
        mobileScreen: workMobileFocus,
        date: "2019. 7"
    },
];
const dataWorkReverse = dataWork.reverse();

export default dataWorkReverse;