import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    display: inline-block;
    line-height: 1.9;
    color: #777;
    font-weight: 300;
    white-space: pre-line;

    ${props => props.strong && `
        color: #ccc;
    `};

    ${props => props.block && `
        display: block;
    `};

    ${props => props.color && `
        color: ${props.color};
    `};

    @media screen and ( max-width: 767px ) {
        font-size: 16px;
    }
`;

const TextRegular = ({ className, text, color, strong, block }) => {
    return (
        <Container className={className} strong={strong} block={block} color={color} >
            {text}
        </Container>
    )
}

export default TextRegular;