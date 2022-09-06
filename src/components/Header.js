import React from 'react'
import styled from '@emotion/styled';

const COntenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px',serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return(<COntenedorHeader>
        <TextoHeader>{titulo} </TextoHeader>
    </COntenedorHeader>);
}

export default Header;