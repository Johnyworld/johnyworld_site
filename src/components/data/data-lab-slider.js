import labBgMarioJump from '../../images/labbg-mariojump.jpg';
// import labBgCollision1 from '../../images/labbg-collision1.jpg';
import labBgCollision2 from '../../images/labbg-collision2.jpg';
// import labBgMario1 from '../../images/labbg-mario1.jpg';
import labBgRpgMoving from '../../images/labbg-rpgmoving.jpg';
// import labBgWetube from '../../images/labbg-wetube.jpg';
// import labBgPrismagram from '../../images/labbg-prismagram.jpg';
import labBgModernPirates from '../../images/labbg-modernpirates.jpg';
import labBgCrossRoad from '../../images/labbg-crossroad.jpg';
import labBgMasonry from '../../images/labbg-masonry.jpg';
import labBgRoom311 from '../../images/labbg-room311.jpg';
import labBgConv250 from '../../images/labbg-conv250.jpg';
import labBgBangCard from '../../images/labbg-bangcard.jpg';
// import labBgGravity from '../../images/labbg-gravity.jpg';
// import labBgCells from '../../images/labbg-cells.jpg';

const dataLabSlider = [
    {
        id: "03001",
        title: "Super Mario Jump!",
        slug: "mariojump",
        comment: "JQuery 연습",
        desc: [
            "JQuery를 처음 배우고 나서",
            "키보드에 반응하는 무언가를 만들어보고 싶었고",
            "첫 시도로 만들어본 연습작.",
        ],
        technics: [ "HTML", "CSS", "JQuery" ],
        thumbnail: labBgMarioJump,
        date: "2017. 12"
    },
    // {
    //     id: "03002",
    //     title: "Supermario Canvas",
    //     slug: "supermario",
    //     comment: "슈퍼마리오 게임 만들기 연습",
    //     desc: [
    //         "모던 자바스크립트(ES6)에 익숙해지기 위해",
    //         "코드를 따라 치며 연습했던 연습작.",
    //         "Promise, map, forEach, async, await등을 이해하는데",
    //         "도움이 되었습니다.",
    //     ],
    //     technics: [ "Javascript", "ES6", "Canvas" ],
    //     thumbnail: labBgMario1,
    //     date: "2019. 03",
    // },
    // {
    //     id: "03003",
    //     title: "WETUBE!",
    //     slug: "wetube",
    //     comment: "유튜브 따라하기 코딩.",
    //     desc: [
    //         "NodeJS와 친해지기 위해 수강했던 강의의 수강작품.",
    //         "유튜브 클론 코딩.",
    //     ],
    //     technics: ["Javascript", "NodeJS", "Express", "MongoDB", "Webpack", "Github", "AWS S3"],
    //     thumbnail: labBgWetube,
    //     date: "2019. 04",
    //     // url: "http://johnyworld-wetube.s3-website.ap-northeast-2.amazonaws.com/"
    // },
    {
        id: "03004",
        title: "RPG MOVING",
        slug: "rpg-moving",
        comment: "RPG 게임 만들기 연습",
        desc: [
            "캔버스를 공부하면서", 
            "게임을 만들어보고 싶다는 생각에",
            "자바스크립트만을 이용해 직접 만들어 본 연습작.",
            "MDN문서와 Stack flow만을 참고하면서 제작.",
        ],
        technics: [ "Javascript", "ES5", "Canvas" ],
        thumbnail: labBgRpgMoving,
        date: "2019. 03"
    },
    // {
    //     id: "03006",
    //     title: "Prismagram",
    //     slug: "prismagram",
    //     comment: "인스타그램 따라하기 코딩.",
    //     desc: [
    //         "React와 친해지기 위해 수강했던 강의의 수강작품.", 
    //         "인스타그램 클론 코딩.",
    //     ],
    //     technics: [ "Javascript", "React", "NodeJS", "React Native", "Prisma", "GraphQL" ],
    //     thumbnail: labBgPrismagram,
    //     date: "2019. now"
    // },
    {
        id: "03007",
        title: "BANG! pick a card!",
        slug: "bangcard",
        comment: "뱅 카드뽑기 앱",
        desc: [
            "보드게임 '뱅'을 플레이할 때", 
            "필요하다고 생각하여 앱으로 제작.",
        ],
        technics: [ "Javascript", "ES5" ],
        thumbnail: labBgBangCard,
        date: "2019. 03"
    },
    {
        id: "03008",
        title: "Crossroad Card",
        slug: "crossroad",
        comment: "데드오브윈터 크로스로드 카드 앱",
        desc: [
            "데드오브윈터라는 보드게임의 한 카드의 사용성이 너무 안좋아서",
            "개선해보고자 앱으로 제작함.",
            "결과는 매우 만족.",
            "(이 앱은 '데드 오브 윈터' 보드게임이 필요합니다.)", 
        ],
        technics: [ "Javascript", "jQuery" ],
        thumbnail: labBgCrossRoad,
        date: "2018. 06",
        url: "http://dow-crossroad.s3-website.ap-northeast-2.amazonaws.com"
    },
    {
        id: "03009",
        title: "Conversation Starter",
        slug: "conv250",
        comment: "250개의 랜덤 대화주제",
        desc: [
            "가끔 지인들과 대화를 할 때,", 
            "대화 주제가 떨어지는 경우 이 앱의 도움을 받을 수 있고", 
            "혼자 영어회화 공부를 할때에도",
            "이 앱의 질문에 대답하는 식으로 영어공부도 가능함.",
        ],
        technics: [ "Javascript" ],
        thumbnail: labBgConv250,
        date: "2019. 03"
    },
    {
        id: "03010",
        title: "Masonry Grid",
        slug: "masonry",
        comment: "직접 고민하여 만든 메이슨리 그리드",
        desc: [
            "평소에 좋아하던 그리드 레이아웃인 메이슨리 그리드.", 
            "좋아했기 때문에 직접 만들어보고 싶었고",
            "브라우저 너비에 따라 여러 그리드로 반응형까지 재미있게 작업함.",
        ],
        technics: [ "Javascript", "jQuery" ],
        thumbnail: labBgMasonry,
        date: "2018. 12",
        url: "http://jw-masonry-grid.s3-website.ap-northeast-2.amazonaws.com/"
    },
    // {
    //     id: "03011",
    //     title: "Cells",
    //     slug: "cells",
    //     comment: "세포놀이",
    //     desc: [
    //         "강의를 보고 따라 만든 연습작.",
    //     ],
    //     technics: ["Javascript", "ES6", "Canvas"],
    //     thumbnail: labBgCells,
    //     date: "2018. 05",
    // },
    // {
    //     id: "03012",
    //     title: "Gravity",
    //     slug: "gravity",
    //     comment: "중력 구현",
    //     desc: [
    //         "강의를 보고 따라 만든 연습작.",
    //         "이때 중력을 구현하는 공식을 이해하고",
    //         "게임을 만들기 위한 준비를 시작.",
    //     ],
    //     technics: ["Javascript", "ES6", "Canvas"],
    //     thumbnail: labBgGravity,
    //     date: "2018. 05",
    // },
    // {
    //     id: "03013",
    //     title: "Collision Test I",
    //     slug: "collision1",
    //     comment: "HTML 캔버스 연습",
    //     desc: [
    //         "Canvas를 이용하면",
    //         "재밌는것들을 많이 만들 수 있겠다고 생각하여",
    //         "Javascript와 Canvas를 이해하기 위하여",
    //         "코드를 따라 치며 연습했던 연습작.",
    //     ],
    //     technics: [ "Javascript", "ES6", "Canvas" ],
    //     thumbnail: labBgCollision1,
    //     date: "2018. 05"
    // },
    {
        id: "03014",
        title: "Bubble Collision",
        slug: "collision2",
        comment: "버블 콜리션",
        desc: [
            "충돌판정을 공부하고",
            "공부한 내용을 바탕으로 응용하여 제작한",
            "캔버스 연습작.", 
        ],
        technics: [ "Javascript", "ES6", "Canvas" ],
        thumbnail: labBgCollision2,
        date: "2018. 05"
    },
    {
        id: "03005",
        title: "Modern Pirates",
        slug: "modern-pirates",
        comment: "캔버스를 이용한 게임 제작",
        desc: [
            "100% 하드코딩으로 제작한 게임.",
            "포트폴리오 홈에 넣기 위해 만들기 시작하여",
            "여가시간을 활용하여 약 2주동안 제작.",
        ],
        technics: ["Javascript", "ES6", "Canvas"],
        thumbnail: labBgModernPirates,
        date: "2019. 05"
    },
    {
        id: "03015",
        title: "Room311",
        slug: "room311",
        comment: "311호 자리 뽑기",
        desc: [
            "실제로 사용하기 위해 리액트로 제작한 앱.",
            "랜덤으로 뽑고, 사람 수에 따라 중앙 앞자리가 채워질 수 있게 제작.",
            "총 3개의 분단이라서 만드는데에 고민이 좀 필요했음.",
        ],
        technics: ["Javascript", "React JS"],
        thumbnail: labBgRoom311,
        date: "2019. 04",
        url: "http://room311.s3-website.ap-northeast-2.amazonaws.com/"
    },
];

const dataLabSliderReverse = dataLabSlider.reverse();

export default dataLabSliderReverse;