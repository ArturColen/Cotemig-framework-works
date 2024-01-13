import styled from 'styled-components';

export const NotesList = styled.ul`
`;

export const NoteListItem = styled.li`
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
    margin-top: 5px;
    color: #0f0f0f;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
`;

export const DeleteButton = styled.button`
    margin-left: 30px;
    border: 0;
    border-radius: 50px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 5px;

    img{
        width: 30px;
        cursor: pointer;
    }
`;