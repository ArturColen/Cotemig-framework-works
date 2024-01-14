import styled from 'styled-components';
import { FaCirclePlus } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media screen and (max-width: 1080px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: -30px;
    }
`;

export const PageButton = styled.button`
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
    margin-top: -20px;
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

    img{
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }

    @media screen and (max-width: 1080px){
        margin-top: 10px;
    }
`;

export const Title = styled.h1`
    color: #1D1B64;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    margin-top: 20px;
`;

export const NoteForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const NoteInput = styled.input`
    width: 300px;
    height: 55px;
    margin-right: 10px;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border: solid 3px #1D1B64;
    background-color: #f0f0f0f0;
    color: #030140;
    font-weight: 500;
`;

export const AddNotesButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 25px;
    border: 0;
    border-radius: 50%;
    background-color: #030140;
    color: #f0f0f0;
    transition: ease 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #1D1B64;
    }
`;

export const AddIcon = styled(FaCirclePlus)`
    font-size: 1.2em;
    margin-left: 1.5vw;
    color: #00b400;
`;

export const DeleteIcon = styled(TiDelete)`
    font-size: 1.7995em;
    margin-left: 1.5vw;
    color: #f00;
`