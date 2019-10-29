import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    ${props=> props.bgColor && `background-color: ${props.bgColor};`};
`;

const Image = styled.img`
    width: auto;
`;

const ImageRegular = ({ className, title, src, bgColor, isMobile }) => {
    const split = src.split("/pc/");
    const uri = isMobile ? split[0] + "/mobile/" + split[1] : src;

    const resize = ({ currentTarget }) => {
        const width = currentTarget.clientWidth;
        currentTarget.style.maxWidth = `${width/2}px`;
        currentTarget.style.width = `100%`;
    }

    return (
        <Container className={className} bgColor={bgColor} >
            <Image onLoad={resize} src={uri} alt={title} title={title}  />
        </Container>
    )
}

export default ImageRegular;