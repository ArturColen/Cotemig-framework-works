import styled from 'styled-components';

export const PageTitle = styled.h1`
    color: #1D1B64;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    margin-top: 20px;
`;

export const PageSubtitle = styled.p`
    color: #483434;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`;

export const HomePageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #030140;
    border: 0;
    width: 300px;
    height: 60px;
    padding: 6px;
    margin-right: 20px;
    margin-top: 2vh;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: underline #030140;
    transition: ease 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #1D1B64;
        text-decoration: underline #1D1B64; 
    }

    @media screen and (max-width: 1080px){
        margin-top: 10px;
    }
`;