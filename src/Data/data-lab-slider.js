let labBgMarioJump, labBgCollision2, labBgRpgMoving, labBgModernPirates, labBgCrossRoad, labBgMasonry, labBgRoom311, labBgConv250, labBgBangCard;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    labBgMarioJump = require( '../Mobile-images/labbg-mariojump.jpg' );
    labBgCollision2 = require( '../Mobile-images/labbg-collision2.jpg' );
    labBgRpgMoving = require( '../Mobile-images/labbg-rpgmoving.jpg' );
    labBgModernPirates = require( '../Mobile-images/labbg-modernpirates.jpg' );
    labBgCrossRoad = require( '../Mobile-images/labbg-crossroad.jpg' );
    labBgMasonry = require( '../Mobile-images/labbg-masonry.jpg' );
    labBgRoom311 = require( '../Mobile-images/labbg-room311.jpg' );
    labBgConv250 = require( '../Mobile-images/labbg-conv250.jpg' );
    labBgBangCard = require( '../Mobile-images/labbg-bangcard.jpg' );
} else {
    labBgMarioJump = require( '../Images/labbg-mariojump.jpg' );
    labBgCollision2 = require( '../Images/labbg-collision2.jpg' );
    labBgRpgMoving = require( '../Images/labbg-rpgmoving.jpg' );
    labBgModernPirates = require( '../Images/labbg-modernpirates.jpg' );
    labBgCrossRoad = require( '../Images/labbg-crossroad.jpg' );
    labBgMasonry = require( '../Images/labbg-masonry.jpg' );
    labBgRoom311 = require( '../Images/labbg-room311.jpg' );
    labBgConv250 = require( '../Images/labbg-conv250.jpg' );
    labBgBangCard = require( '../Images/labbg-bangcard.jpg' );
}

const dataLabSlider = [
    {
        id: "03001",
        title: "Super Mario Jump!",
        slug: "mariojump",
        comment: "JQuery 연습",
        desc: "JQuery를 처음 배우고 나서 키보드에 반응하는 무언가를 만들어보고 싶었고 첫 시도로 만들어본 연습작.",
        technics: [ "HTML", "CSS", "JQuery" ],
        thumbnail: labBgMarioJump,
        date: "2017. 12"
    },
    {
        id: "03002",
        title: "Bubble Collision",
        slug: "collision2",
        comment: "버블 콜리션",
        desc: "충돌판정을 공부하고 공부한 내용을 바탕으로 응용하여 제작한 캔버스 연습작.", 
        technics: [ "Javascript", "ES6", "Canvas" ],
        thumbnail: labBgCollision2,
        date: "2018. 05"
    },
    {
        id: "03003",
        title: "BANG! Card Picker!",
        slug: "bangcard",
        comment: "뱅 카드뽑기 앱",
        desc: "보드게임 '뱅'에서 '카드펼치기' 단계를 대신 해주는 앱. 더 이상 카드 무의미하게 다음 카드를 버릴 필요가 없습니다.", 
        technics: [ "Javascript", "ES5" ],
        thumbnail: labBgBangCard,
        url: "http://bang-pickcard.s3-website.ap-northeast-2.amazonaws.com/",
        git: "https://github.com/Johnyworld/bang-cardpicker",
        date: "2019. 03",
        forMobile: true
    },
    {
        id: "03004",
        title: "Crossroad Card",
        slug: "crossroad",
        comment: "데드오브윈터 크로스로드 카드 앱",
        desc: "데드오브윈터라는 보드게임의 한 카드의 사용성이 너무 안좋아서 개선해보고자 앱으로 제작함. 결과는 매우 만족. (이 앱은 '데드 오브 윈터' 보드게임이 필요합니다.)", 
        technics: [ "Javascript", "jQuery" ],
        thumbnail: labBgCrossRoad,
        date: "2018. 06",
        url: "http://dow-crossroad.s3-website.ap-northeast-2.amazonaws.com",
        git: "https://github.com/Johnyworld/dowcrossroad",
        forMobile: true
    },
    {
        id: "03005",
        title: "Conversation Starter",
        slug: "conv250",
        comment: "250개의 랜덤 대화주제",
        desc: "가끔 지인들과 대화를 할 때, 대화 주제가 떨어지는 경우 이 앱의 도움을 받을 수 있고 혼자 영어회화 공부를 할때에 이 앱의 질문에 대답하는 식으로 영어공부도 가능함.",
        technics: [ "Javascript" ],
        thumbnail: labBgConv250,
        url: "http://conv-250.s3-website.ap-northeast-2.amazonaws.com/",
        git: "https://github.com/Johnyworld/conv250",
        date: "2019. 03",
        forMobile: true
    },
    {
        id: "03006",
        title: "RPG MOVING",
        slug: "rpg-moving",
        comment: "RPG 게임 만들기 연습",
        desc: "기본 자바스크립트만을 이용해 직접 만들어 본 연습작. 모든 코드를 직접 짰고, 주 목적이 게임제작은 아니기 때문 캐릭터 이동, 충돌판정 등 기본적인 것 까지만 구현 MDN문서와 Stack flow를 참고하면서 제작.",
        technics: [ "Javascript", "ES5", "Canvas" ],
        thumbnail: labBgRpgMoving,
        url: "http://rpg-moving.s3-website.ap-northeast-2.amazonaws.com/",
        git: "https://github.com/Johnyworld/rpg-moving",
        date: "2019. 03",
        forMobile: true
    },
    {
        id: "03007",
        title: "Masonry Grid",
        slug: "masonry",
        comment: "직접 고민하여 만든 메이슨리 그리드",
        desc: "평소에 좋아하던 그리드 레이아웃인 메이슨리 그리드. 좋아했기 때문에 직접 만들어보고 싶었 브라우저 너비에 따라 여러 그리드로 반응형까지 재미있게 작업함.",
        technics: [ "Javascript", "jQuery" ],
        thumbnail: labBgMasonry,
        date: "2018. 12",
        url: "http://jw-masonry-grid.s3-website.ap-northeast-2.amazonaws.com/",
        git: "https://github.com/Johnyworld/masonlygrid",
        forMobile: true
    },
    {
        id: "03008",
        title: "Modern Pirates",
        slug: "modern-pirates",
        comment: "캔버스를 이용한 게임 제작",
        desc: "여러 문서들을 참고하여 100% 직접 제작한 게임. 여가시간을 활용하여 약 2주동안 제작.",
        technics: ["Javascript", "ES6", "Canvas"],
        thumbnail: labBgModernPirates,
        url: "http://modern-pirates.s3-website.ap-northeast-2.amazonaws.com/",
        date: "2019. 05",
        git: "https://github.com/Johnyworld/modern-pirates",
        forMobile: true
    },
    {
        id: "03009",
        title: "Room311",
        slug: "room311",
        comment: "311호 자리 뽑기",
        desc: "실제로 사용하기 위해 리액트로 제작한 앱. 랜덤으로 뽑고, 사람 수에 따라 중앙 앞자리가 채워질 수 있게 제작. 총 3개의 분단이라서 만드는데에 고민이 좀 필요했음.",
        technics: ["Javascript", "React JS"],
        thumbnail: labBgRoom311,
        date: "2019. 04",
        url: "https://johnyworld.github.io/room311/",
        git: "https://github.com/Johnyworld/room311",
        forMobile: true
    },
];

const dataLabSliderReverse = dataLabSlider.reverse();

export default dataLabSliderReverse;
