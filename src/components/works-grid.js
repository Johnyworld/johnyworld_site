import React, { Component } from 'react';
import GridItem from './grid-item';
import './works-grid.css';

import worksBgPssd from '../images/worksbg-pssd.jpg'
import worksBgKrx from '../images/worksbg-krx.jpg'
import worksBgSamsungTheme from '../images/worksbg-samsung-theme.jpg'
import worksBgCamping from '../images/worksbg-camping.jpg'
import worksBgSticon from '../images/worksbg-sticon.jpg'
import worksBgSoo from '../images/worksbg-soo.jpg'
import worksBgFanclubCoin from '../images/worksbg-fanclub-coin.jpg'
import worksBgBigpictureEnt from '../images/worksbg-bigpicture.jpg'
import worksBgBevl from '../images/worksbg-bevl.jpg'

class WorksGrid extends Component {
    componentWillMount() {
        this.works = [
            {
                id: "05001",
                title: "Samsung IL Sticon",
                slug: "samsung-il-sticon",
                comment: "삼성 인사이트런쳐 삽입 스티콘 일러스트 시안 작업",
                category1: "illustration",
                category2: "Character Emoticon",
                thumbnail: worksBgSticon,
                date: "2015. 05"
            },
            {
                id: "05002",
                title: "Camping Party Poster",
                slug: "camping-poster",
                comment: "제3회 자전거타고 캠핑가자 포스터 디자인",
                category1: "illustration",
                category2: "Character & Map illustration",
                thumbnail: worksBgCamping,
                date: "2014. 07"
            },
            {
                id: "05003",
                title: "Samsung Mobile Theme",
                slug: "samsung-mobile-theme",
                comment: "삼성 모바일 테마 디자인",
                category1: "UX/UI",
                category2: "Theme Design",
                thumbnail: worksBgSamsungTheme,
                date: "2015. 10 - 2016. 06"
            },
            {
                id: "05004",
                title: "KRX Exhibision",
                slug: "krx",
                comment: "KRX 국제금융센터 금융거래체험관 기획, UX, UI, GUI디자인",
                category1: "UX/UI",
                category2: "UX, UI Design",
                thumbnail: worksBgKrx,
                date: "2014. 12"
            },
            {
                id: "05005",
                title: "Samsung PSSD",
                slug: "samsung-pssd",
                comment: "삼성 포터블 SSD 보안프로그램 UI, GUI디자인",
                category1: "UX/UI",
                category2: "UI Design",
                thumbnail: worksBgPssd,
                date: "2014. 08"
            },
            {
                id: "05006",
                title: "Soo Oriental Clicic",
                slug: "soo-clinic",
                comment: "수한의원 홈페이지 제작",
                category1: "Wordpress",
                category2: "Web Design + Wordpress",
                thumbnail: worksBgSoo,
                date: "2018. ??"
            },
            {
                id: "05007",
                title: "Video Lightbox Plugin",
                slug: "video-lightbox",
                comment: "비디오 라이트박스 슬라이드 플러그인 개발 (빅픽처엔터테인먼트 삽입)",
                category1: "Wordpress Plugins",
                category2: "Wordpress Development",
                thumbnail: worksBgBevl,
                date: "2018. ??"
            },
            {
                id: "05008",
                title: "Bigpicture Entertainment",
                slug: "bigpicture-ent",
                comment: "빅픽처 엔터테인먼트 홈페이지 제작",
                category1: "Wordpress",
                category2: "Web Design + Wordpress",
                thumbnail: worksBgBigpictureEnt,
                date: "2018. ??"
            },
            {
                id: "05009",
                title: "Fanclub Coin Landingpage",
                slug: "fanclub-coin",
                comment: "스포와이드 팬클럽코인 랜딩페이지 제작",
                category1: "Wordpress",
                category2: "Web Design + Wordpress",
                thumbnail: worksBgFanclubCoin,
                date: "2019. 05"
            },
        ];
        this.worksReverse = this.works.reverse();
    }

    render() {
        return (
            <div className="works-grid-wrapper">
                <ul className="l-row">
                    { this.worksReverse.map( item => {
                        return (
                            <li key={`griditem-${item.id}`} className='l-col l-col-6-12'>
                                <GridItem 
                                    title={item.title}
                                    comment={item.comment}
                                    category={item.category2}
                                    bg={item.thumbnail}
                                    date={item.date}
                                    link={item.slug}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default WorksGrid;