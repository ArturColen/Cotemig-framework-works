import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

export const NotesList = styled.ul`
`;

export const NoteListItem = styled.li`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    margin-bottom: 10px;
`;

export const WarningText = styled.p`
    color: #483434;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`;

export const NoteText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    color: #0f0f0f;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
`;

export const DeleteButton = styled.button`
    margin-left: 1.7vw;
    border: 0;
    display: flex;
`;

export const TrashIcon = styled(FaTrash)`
    font-size: 1.5em;
    color: #f00;
    transition: ease all .5s;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`;