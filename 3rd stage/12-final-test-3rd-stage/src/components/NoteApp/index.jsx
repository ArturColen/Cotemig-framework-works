import { useState } from 'react';
import { AddNotesButton, ButtonContainer, PageButton, NoteForm, NoteInput, Title } from '../../assets/styles/components/NoteApp/NoteApp.style';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import add from '../../assets/Images/Icons/add-icon.png';
import exclude from '../../assets/Images/Icons/delete-icon.png';
import { useLocalStorage } from '@uidotdev/usehooks';
import { NoteList } from '../NoteList';

export function NoteApp() {
    const [notesList, setNotesList] = useLocalStorage('notesList', []);
    const [titleInput, setTitleInput] = useState('');
    const [noteInput, setNoteInput] = useState('');
    const [currentPage, setCurrentPage] = useState('adicionadas');

    const handleNoteSubmit = (e) => {
        e.preventDefault();

        if (titleInput.trim() !== '' && noteInput.trim() !== '') {
            const newNote = {
                id: uuidv4(),
                text: `${titleInput}: ${noteInput}`,
                completed: false,
            };
            setNotesList([...notesList, newNote]);
            setTitleInput('');
            setNoteInput('');
        }
    };

    const handleNoteDelete = (noteId) => {
        const deletedNotes = notesList.map((note) =>
            note.id === noteId ? { ...note, completed: true, deleted: true } : note
        );

        setNotesList(deletedNotes);
    };

    const handleActiveNotes = () => {
        setCurrentPage('adicionadas');
    };

    const handleDeletedNotes = () => {
        setCurrentPage('excluidas');
    };

    const filteredNotes = currentPage === 'adicionadas' ? notesList.filter(note => !note.completed) : notesList.filter(note => note.completed);

    return (
        <>
            <ButtonContainer>
                <Link to="/notas">
                    <PageButton onClick={handleActiveNotes}>Notas adicionadas<img src={add} /></PageButton>
                </Link>
                <Link to="/notas-excluidas">
                    <PageButton onClick={handleDeletedNotes}>Notas excluídas<img src={exclude} /></PageButton>
                </Link>
            </ButtonContainer>
            <Title>
                {currentPage === 'adicionadas' ? 'Notas' : 'Notas Excluídas'}
            </Title>
            {
                currentPage === 'adicionadas' ? (
                    <NoteForm onSubmit={handleNoteSubmit}>
                        <NoteInput
                            type="text"
                            placeholder="Digite o título da nota"
                            value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)}
                        />
                        <NoteInput
                            type="text"
                            placeholder="Digite a nota"
                            value={noteInput}
                            onChange={(e) => setNoteInput(e.target.value)}
                        />
                        <AddNotesButton type="submit">+</AddNotesButton>
                    </NoteForm>
                ) : null
            }
            <NoteList
                notes={filteredNotes}
                onDeleteNote={handleNoteDelete}
                currentPage={currentPage}
            />
        </>
    );
}