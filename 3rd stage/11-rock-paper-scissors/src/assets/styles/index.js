import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        transition: ease all .3s;
    }

    body{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #1a1a1a;
    }

    button{
        cursor: pointer;

        &:hover{
            opacity: .8;
        }

        &:active{
            opacity: .6;
        }
    }
`;

export const Container = styled.div`
    width: 428px;
    padding: 20px 50px;
`;

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    flex-direction: ${(props) => props.direction || 'row'};
    gap: ${(props) => props.gap || '16px'};
`;

export const Spacer = styled.div`
    width: 100%;
    margin: ${(props) => props.margin || '20px'};
`;

export const Typography = styled.p`
    font-size: ${(props) => props.size || '18px'};
    font-weight: ${(props) => props.fontWeight || '700'};
    line-height: ${(props) => props.lineHeight || '27px'};
    color: ${(props) => (props.primary ? '#1a1a1a' : '#ececec')};
`;

export const Rules = styled.button`
    width: auto;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    background-color: transparent;
    color: #ececec;
    border-bottom: 1px solid transparent;
    transition: ease all .5s;

    &:hover{
        border-bottom: 1px solid #ececec;
    }
`;