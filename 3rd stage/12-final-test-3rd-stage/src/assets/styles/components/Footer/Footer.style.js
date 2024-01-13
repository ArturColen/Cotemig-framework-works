import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SeparationLine = styled.hr`
    width: 40%;
    border: 0;
    height: 1px;
    background-color: #030140;
`;

export const FooterText = styled.p`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    padding-top: 30px;
    color: #030140;
    margin-bottom: 30px;

    @media screen and (max-width: 1080px){
        margin-bottom: 55px;
    }
`;