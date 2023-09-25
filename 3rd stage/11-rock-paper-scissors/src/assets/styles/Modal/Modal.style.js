import styled from 'styled-components';

export const StyledModal = styled.div`
    width: 80%;
    border-radius: 12px;
    padding: 16px;
    background-color: #ececec;
    text-align: center;
    position: absolute;
    top: ${(props) => (props.open ? '5%' : '-100%')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    transition: ease all .7s;
    z-index: 2;
`;

export const CloseModal = styled.button`
    width: 32px;
    height: 32px;
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    border-radius: 50%;
    background-color: #1a1a1a;
    color: #ececec;
    position: absolute;
    top: 2%;
    right: 2%;
`;