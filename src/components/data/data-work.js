// Thumbnails
import workBgPssd from '../../images/workbg-pssd.jpg';
import workBgKrx from '../../images/workbg-krx.jpg';
import workBgSamsungTheme from '../../images/workbg-samsung-theme.jpg';
import workBgCamping from '../../images/workbg-camping.jpg';
import workBgSoohan from '../../images/workbg-soo.jpg';
import workBgFanclubCoin from '../../images/workbg-fanclub-coin.jpg';
import workBgBigpictureEnt from '../../images/workbg-bigpicture.jpg';

// Keyvisualds
import workKeyBgBigpictureEnt from '../../images/work-detail-bigpic/bigpic-keyvisualbg.jpg';
import workKeyBgFanclubCoin from '../../images/work-detail-fancoin/fancoin-keyvisualbg.jpg';
import workKeyBgSoohan from '../../images/work-detail-soohan/soohan-keyvisualbg.jpg';
import workKeyBgKrx from '../../images/work-detail/krx-keyvisualbg.jpg';
import workKeyBgPssd from '../../images/work-detail-pssd/pssd-keyvisualbg.jpg';
import workKeyBgCamping from '../../images/work-detail-camping/camping-keyvisualbg.jpg';

// KeyScreens
import workScreenBigpictureEnt from '../../images/work-detail-bigpic/bigpic-devices.jpg';
import workScreenFanclubCoin from '../../images/work-detail-fancoin/fancoin-devices.jpg';
import workScreenSoohan from '../../images/work-detail-soohan/soohan-devices.jpg';
import workScreenKrx from '../../images/work-detail/krx-devices.jpg';
import workScreenPssd from '../../images/work-detail-pssd/pssd-devices.jpg';
import workScreenCamping from '../../images/work-detail-camping/camping-devices.jpg';

// MobileScreens
import workMobileBigpictureEnt from '../../images/work-detail-bigpic/bigpic-devices-mobile.jpg';
import workMobileFanclubCoin from '../../images/work-detail-fancoin/fancoin-devices-mobile.jpg';
import workMobileSoohan from '../../images/work-detail-soohan/soohan-devices-mobile.jpg';
// import workMobileKrx from '../../images/work-detail/krx-devices-mobile.jpg';
// import workMobilePssd from '../../images/work-detail/pssd-devices-mobile.jpg';
import workMobileCamping from '../../images/work-detail-camping/camping-devices-mobile.jpg';

const dataWork = [
    {
        id: "05002",
        title: "Camping Poster",
        slug: "camping-poster",
        comment: "제3회 '자전거타고 캠핑가자' 포스터 디자인",
        desc: [
            "설명1",
            "설명2",
        ],
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
    {
        id: "05003",
        title: "Samsung Mobile Theme",
        slug: "samsung-mobile-theme",
        comment: "삼성 모바일 테마 디자인",
        desc: [
            "설명1",
            "설명2",
        ],
        summary: [
            { title:"", desc:[""] },
            { title:"", desc:[""] },
            { title:"", desc:[""] },
            { title:"", desc:[""] },
            { title:"", desc:[""] },
            { title:"", desc:[""] },
        ],
        keywords: [
            "모바일", "테마디자인", "그래픽유저인터페이스"
        ],
        category1: "UX/UI",
        category2: "Theme Design",
        thumbnail: workBgSamsungTheme,
        date: "2015. 10 - 2016. 06"
    },
    {
        id: "05004",
        title: "KRX Exhibision",
        slug: "krx",
        comment: "KRX 국제금융센터 금융거래체험관 기획, UX, UI, GUI디자인",
        desc: [
            "설명1",
            "설명2",
        ],
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
        id: "05005",
        title: "Samsung PSSD",
        slug: "samsung-pssd",
        comment: "삼성 포터블 SSD 보안프로그램 UI, GUI디자인",
        desc: [
            "설명1",
            "설명2",
        ],
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
        id: "05006",
        title: "Soo Oriental Clicic",
        slug: "soo-clinic",
        comment: "수한의원 홈페이지 제작",
        desc: [
            "설명1",
            "설명2",
        ],
        summary: [
            { title:"참여인원", desc:["2명"] },
            { title:"내 업무범위", desc:["기획 - 80%", "디자인 - 50%", "워드프레스 개발 - 100%"] },
            { title:"디자인", desc:["기존의 많은 엔터테인먼트 사이트들은 일관된 유행을 따르고 있었는데, 현시점의 트렌드와는 맞지 않는 디자인이라 판단하고, 좀 더 트렌디하고 차별된 디자인 레이아웃을 적용했습니다. 다양하게 사진을 배치하기보다는 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지들을 적용하여 제작했습니다."] },
            { title:"사용자 인터페이스", desc:["팬들이 사이트를 방문했을때 원하는 아티스트의 정보를 빠르게 찾을 수 있고, 지루한 정보들 보다는 재미있고 다양한 미디어들을 볼 수 있습니다."] },
            { title:"워드프레스 플러그인 개발", desc:["클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. 클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지도 구성하였습니다."] },
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
        date: "2018. ??",
        url: "http://soo-clinic.kr/"
    },
    {
        id: "05008",
        title: "Bigpicture Entertainment",
        slug: "bigpicture-ent",
        comment: "빅픽처 엔터테인먼트 홈페이지 제작",
        desc: [
            "설명1",
            "설명2",
        ],
        summary: [
            { title: "참여인원", desc: ["1명"] },
            { title: "내 업무범위", desc: ["기획 - 100%", "디자인 - 100%", "워드프레스 개발 - 100%" ] },
            { title: "디자인", desc: ["기존의 많은 엔터테인먼트 사이트들은 일관된 유행을 따르고 있었는데, 현시점의 트렌드와는 맞지 않는 디자인이라 판단하고, 좀 더 트렌디하고 차별된 디자인 레이아웃을 적용했습니다. 다양하게 사진을 배치하기보다는 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지들을 적용하여 제작했습니다."] },
            { title: "워드프레스 플러그인 개발", desc: ["클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. 클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지도 구성하였습니다."] },
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
        date: "2018. ??",
        url: "http://bigpicture-ent.com/"
    },
    {
        id: "05009",
        title: "Fanclub Coin",
        slug: "fanclub-coin",
        comment: "스포와이드 팬클럽코인 랜딩페이지 제작",
        desc: [
            "설명1",
            "설명2",
        ],
        summary: [
            { title:"참여인원", desc:["2명"] },
            { title:"내 업무범위", desc:["기획 - 80%", "디자인 - 50%", "워드프레스 개발 - 100%"] },
            { title:"디자인", desc:["기존의 많은 엔터테인먼트 사이트들은 일관된 유행을 따르고 있었는데, 현시점의 트렌드와는 맞지 않는 디자인이라 판단하고, 좀 더 트렌디하고 차별된 디자인 레이아웃을 적용했습니다. 다양하게 사진을 배치하기보다는 컨텐츠에 집중 할 수 있도록 가벼운 배경 이미지들을 적용하여 제작했습니다."] },
            { title:"사용자 인터페이스", desc:["팬들이 사이트를 방문했을때 원하는 아티스트의 정보를 빠르게 찾을 수 있고, 지루한 정보들 보다는 재미있고 다양한 미디어들을 볼 수 있습니다."] },
            { title:"워드프레스 플러그인 개발", desc:["클라이언트의 요청에 따라 비디오 라이트박스 플러그인을 개발했습니다. 메인페이지에는 슬라이더로 보여주고, 상세페이지는 그리드로 보여줍니다. 클라이언트가 직접 카테고리를 추가하고 영상을 관리할 수 있도록 관리자페이지도 구성하였습니다."] },
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
];
const dataWorkReverse = dataWork.reverse();

export default dataWorkReverse;