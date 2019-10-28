import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Fonts/Title';
import TextRegular from '../../Components/Fonts/TextRegular';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

const Container = styled.div`

`;

const Section = styled.section`
    padding-top: 150px;
    >*:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const TitleText = styled(Title)`
    margin: 0 7%;
`;

const Text = styled.div`
    margin: 0 7%;
`;


const Daylog = () => {
    return (
        <Container className="l-wrapper">
            <Section>
                <TitleText text="브랜딩" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="네이밍" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="네이밍" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="컨셉" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="컨셉입니다." className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="로고" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="로고 설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="UI기획" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="메뉴구조" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="메뉴구조 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="플로우차트" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="플로우차트 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="와이어프레임" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="와이어프레임 설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="기능" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="기본기능" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="메능구조 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="사용자경험" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="플로우차트 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="소셜기능" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="와이어프레임 설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="데이터모델" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="Entity Relationship Diagram" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="메뉴구조 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="Relational Data Model" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="스타일가이드" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="텍스트" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="메뉴구조 설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="아이콘" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="아바타" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="버튼" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="간격" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="첫화면" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="간편한 회원 가입" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="인증코드 로그인" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="하루의 기록" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="타임라인 인터페이스" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="최소한의 클릭" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="통계" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="일간, 주간, 월간, 연간의 통계" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="시간, 퍼센트 그래프" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="타임라인 그래프" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="일간, 주간, 월간, 연간의 리뷰" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="소셜네트워킹" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="타임라인 인터페이스" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="최소한의 클릭" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="나만의 루틴" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="직접 만든 아이콘 업로드" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
            </Section>
        </Container> 
    )
}

export default Daylog;