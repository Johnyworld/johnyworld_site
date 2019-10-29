import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
`;

const ImageFull = ({ className, title, src, bgColor, isMobile }) => {
    const split = src.split("/pc/");
    const uri = isMobile ? split[0] + "/mobile/" + split[1] : src;

    return (
        <Container className={className} bgColor={bgColor} >
            <Image src={uri} alt={title} title={title}  />
        </Container>
    )
}

export default ImageFull;