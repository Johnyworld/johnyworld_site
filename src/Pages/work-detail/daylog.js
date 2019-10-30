import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Fonts/Title';
import TextRegular from '../../Components/Fonts/TextRegular';
import ImageRegular from '../../Components/Images/ImageRegular';
import ImageFull from '../../Components/Images/ImageFull';
import UnorderedList from '../../Components/List/UnorderedList';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

const Container = styled.div`

`;

const Section = styled.section`
    padding-top: 150px;
    margin: 0 7%;
    >*:not(:last-child) {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        margin: 0 10px;
    }
`;

const TitleText = styled(Title)`
`;

const Text = styled.div`
    margin-top: 50px;
`;

const TextRegularBoxed = styled(TextRegular)`
    background: #aaa;
    color: #222;
    font-family: 'S-CoreDream-3Light', sans-serif;
    padding: 20px 30px;
    margin-top: 20px;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    ${props => props.pc && `grid-template-columns: repeat(${props.pc}, 1fr);`};
    @media screen and (max-width: 768px) {
        ${props => props.mobile && `grid-template-columns: repeat(${props.mobile}, 1fr);`};
    }
`;

const GridItem = styled.div`

`;

const Daylog = () => {
    return (
        <Container className="l-wrapper">
            <Section>
                <TitleText text="브랜딩" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="네이밍" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="10개의 키워드를 조합하여 만든 여러 단어들 중 'Daylog'라는 이름을 추출했습니다." className="jsAppearBtT" />
                </Text>
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/branding-naming.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="컨셉" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegularBoxed text="매 시간 뭘 하고있는지 기록하여 오늘 하루를 반성하고, 내일은 더 나은 하루를 보내고. 더 나아가 완벽한 하루를 보내기 위한 자기개발 애플리케이션 입니다." className="jsAppearBtT" />
                </Text>
                <Text>
                    <TextRegular text="로고" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="Daylog의 맨 앞자인 'D'와 '기록'을 의미하는 깃털펜의 형태를 조합하여 심볼을 제작했고, 로고타입은 심플하고 부드러운 서체인 Open Sans를 사용했습니다." className="jsAppearBtT" />
                </Text>
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/branding-logo.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
            </Section>
            <Section>
                <TitleText text="기능" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="기본기능" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"하루, 한주, 한달 단위로 리뷰 작성 기능"},
                            {text:"카테고리별 통계 (하루, 한주, 한달, 1년)"},
                            {text:"10단계 집중 만족도 설정 (점수 평균 기록)"},
                            {text:"시간은 15분 단위로 블록 형태로 관리"},
                            {text:"즐겨찾기 / 자주하는일과 (빈도수에 따라) 는 상위 노출"},
                        ]} 
                        className="jsAppearBtT"
                    />
                </Text>
                <Text>
                    <TextRegular text="사용자경험" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"직접 쓸 필요 없이 미리 제공되는 루틴을 한 번 클릭하여 간편하게 기록"},
                            {text:"카테고리별 통계 (하루, 한주, 한달, 1년)"},
                            {text:"사용자가 루틴 직접 추가 가능 (데이터베이스 연동)"},
                            {text:"다른 유저가 추가한 카테고리 사용 가능 (검색하여 선택)"},
                        ]} 
                        className="jsAppearBtT"
                    />
                </Text>
                <Text>
                    <TextRegular text="소셜기능" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"유저들끼리 팔로우 가능"},
                            {text:"팔로우한 유저가 지금 뭐하는지 피드 제공"},
                            {text:"댓글, 좋아요 (박수 아이콘)"},
                            {text:"댓글은 당일 하루 취합해서 보여줌"},
                            {text:"시간별 게시물마다 좋아요 받은 합계 날짜별 계수"},
                        ]} 
                        className="jsAppearBtT"
                   />
                </Text>
                <Text>
                    <TextRegular text="알람기능" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"시간별 알람 설정 기능 : 15분, 30분, 1시간, 2시간 등"},
                            {text:"알람 시작시간, 끝시간 설정 기능"},
                            {text:"매일 마무리할 때 리뷰알림 (만족스러운 하루였나요?)"},
                        ]} 
                        className="jsAppearBtT"
                   />
                </Text>
            </Section>
            <Section>
                <TitleText text="UI기획" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="메뉴구조" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="6개의 기본 메뉴로 구성 되어있고 하루의 일과를 관리할 수 있는 Today가 메인 페이지입니다." className="jsAppearBtT" />
                </Text>
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/ui-menus.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="플로우차트" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="혼자 하는 프로젝트지만, 플로우차트를 작성하여 여러가지 상황에 대처할 수 있도록 고민하였습니다." className="jsAppearBtT" />
                </Text>
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/flowchart-1.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/flowchart-2.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="와이어프레임" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/wireframe-today.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/wireframe-log.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
                <ImageFull
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/wireframe-feed_and_menu.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile}
                    className="jsAppearBtT"
                />
            </Section>
            <Section>
                <TitleText text="데이터모델" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="Entity Relationship Diagram" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/data-diagram.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="Relational Data Model" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/data-rdm.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
            </Section>
            <Section>
                <TitleText text="스타일가이드" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="사용컬러" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="설명" className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/guide-colors.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="타이포그래피" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/guide-font.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="아이콘" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/guide-icon.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="아바타" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/guide-avatar.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="버튼" strong={true} block={true} className="jsAppearBtT" />
                </Text>
                <ImageRegular
                    src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/guide-buttons.jpg"
                    alt="dataModelDiagram"
                    isMobile={isMobile} 
                    className="jsAppearBtT"
                />
                <Text>
                    <TextRegular text="...이하 레이아웃 관련 스타일가이드 생략" className="jsAppearBtT" />
                </Text>
            </Section>
            <Section>
                <TitleText text="로그인, 회원정보" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="간편한 회원 가입 / 인증코드 로그인" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="단 3개의 정보만 입력하면 회원가입이 가능하고, 비밀번호 없이 인증코드로 로그인합니다." className="jsAppearBtT" />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/login-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/login-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/login-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/login-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
            <Section>
                <TitleText text="하루의 기록" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="타임라인 인터페이스" strong={true} block={true} className="jsAppearBtT" />
                    <TextRegular text="타임라인 UI로 한눈에 일정을 확인할 수 있고 한번의 클릭으로 빠른 일정 등록과 수정이 가능합니다." className="jsAppearBtT" />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/today-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/today-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/today-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/today-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
            <Section>
                <TitleText text="통계" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="일간, 주간, 월간, 연간의 통계" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"시간, 퍼센트 단위의 원형 그래프"},
                            {text:"오전 / 오후로 구분된 원형 타임 테이블"},
                            {text:"일간, 주간, 월간, 연간 단위의 리뷰 작성"},
                        ]} 
                        className="jsAppearBtT"
                   />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/log-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/log-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/log-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/log-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
            <Section>
                <TitleText text="소셜네트워킹" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="팔로우와 소통" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"친구의 리뷰와 일정을 피드로 확인합니다."},
                            {text:"댓글과 좋아요로 서로 응원합니다."},
                        ]} 
                        className="jsAppearBtT"
                    />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/feed-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/feed-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/feed-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/feed-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
            <Section>
                <TitleText text="나만의 루틴" className="jsAppearBtT" />
                <Text>
                    <TextRegular text="직접 만든 아이콘 업로드" strong={true} block={true} className="jsAppearBtT" />
                    <UnorderedList 
                        list={[ 
                            {text:"기본으로 제공되는 다양한 라인 아이콘들과 색상 팔레트"},
                            {text:"직접 만든 아이콘을 업로드하세요."},
                            {text:"예쁜 색상과 개성 있는 아이콘의 조합을 만드세요."},
                            {text:"내가 만든 루틴은 다른 사람이 사용할지도 모릅니다!"},
                        ]} 
                        className="jsAppearBtT"
                    />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/edit-doing-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/edit-doing-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/edit-doing-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/edit-doing-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
            <Section>
                <TitleText text="기타" className="jsAppearBtT" />
                <Text>
                    <UnorderedList 
                        list={[ 
                            {text:"함께할 친구를 검색합니다."},
                            {text:"프로필사진과 아이콘은 적당한 크기로 리사이즈 되어 AWS S3 버킷에 업로드 됩니다."},
                        ]} 
                        className="jsAppearBtT"
                    />
                </Text>
                <Grid pc={4} mobile={2}>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/etc-1.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/etc-2.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/etc-3.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                    <GridItem>
                        <ImageFull
                            src="https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/work/daylog/pc/etc-4.jpg"
                            alt="dataModelDiagram"
                            isMobile={isMobile}
                            className="jsAppearBtT"
                        />
                    </GridItem>
                </Grid>
            </Section>
        </Container> 
    )
}

export default Daylog;