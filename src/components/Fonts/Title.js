import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
    font-family: 'S-CoreDream-1Thin', sans-serif;
    font-size: 72px;
    line-height: 1.2;
    word-break: keep-all;

    @media screen and ( max-width: 1440px ) {
        font-size: 60px;
    }

    @media screen and ( max-width: 1023px ) {
        font-size: 52px;
    }

    @media screen and ( max-width: 767px ) {
        font-size: 40px;
    }
`;

const Title = ({ className, text }) => {
    return (
        <Container className={className}>
            {text}
        </Container>
    )
}

export default Title;