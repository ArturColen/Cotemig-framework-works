import styled from 'styled-components';

export const Action = styled.button`
    width: 72px;
    height: 72px;
    border-radius: 50%;

    &:hover{
        opacity: ${(props) => (props.disabled ? '1': '0.8')};
    }

    &:active{
        opacity: ${(props) => (props.disabled ? '1': '0.6')};
    }
`;