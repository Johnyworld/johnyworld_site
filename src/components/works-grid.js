import React, { Component } from 'react';

class WorksGrid extends Component {
    componentWillMount() {
        this.works = [
            {
                id: "05001",
                title: "Super Mario Jump!",
                comment: "JQuery 연습",
                desc: [
                    "JQuery를 처음 배우고 나서",
                    "키보드에 반응하는 무언가를 만들어보고 싶었고",
                    "첫 시도로 만들어본 연습작.",
                ],
                technics: [ "HTML", "CSS", "JQuery" ],
                thumbnail: "",
                href: "http://naver.com",
                date: "2017. 12"
            },
        ]
    }

    render() {
        return (
            <div class="works-grid-wrapper">
                웍스 그리드 래퍼
            </div>
        )
    }
}

export default WorksGrid;