import React from 'react';
import styled from 'styled-components';
import TextRegular from '../Fonts/TextRegular';

const Container = styled.ul`
    margin-top: 10px;
`;

const ListItem = styled.li`
    list-style-type: circle;
    margin-left: 20px;
    margin-bottom: 5px;
    span {
        line-height: 1.4;
    }
`;

const UnorderedList = ({ className, list, color, strong }) => {
    return (
        <Container className={className}  >
            { list.map( listItem => (
                <ListItem>
                    <TextRegular text={listItem.text} strong={strong} color={color} />
                </ListItem>
            ))}
        </Container>
    )
}

export default UnorderedList;