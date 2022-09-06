import React from 'react'
import styled from '@emotion/styled';


const ContenedorFooter = styled.footer `
    background-color: #222222;
    color: white;
    font-weight:300;
    padding: 2rem;
`;

const Footer = ({titulo2}) =>{

 return(   
    <footer className="page-footer"> 
            <ContenedorFooter className="container">
                <small>{titulo2}</small>
            </ContenedorFooter>
    </footer>)
}

export default Footer;