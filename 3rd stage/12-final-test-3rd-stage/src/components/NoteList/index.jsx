import { DeleteButton, NotesList, NoteListItem, NoteText, WarningText } from '../../assets/styles/components/NoteList/NoteList.style';
import trash from '../../assets/Images/Icons/trash-icon.png';

export function NoteList({ notes, onDeleteNote, currentPage }) {
    return (
        <NotesList>
            {notes.length === 0 ? (
                <WarningText>
                    {currentPage === 'adicionadas' ? 'Não há notas.' : 'Não há notas excluídas.'}
                </WarningText>
            ) : (
                notes.map((note) => (
                    <NoteListItem key={note.id}>
                        {note.deleted ? (
                            <NoteText>{note.text}</NoteText>
                        ) : (
                            <>
                                <NoteText>{note.text}</NoteText>
                                <DeleteButton onClick={() => onDeleteNote(note.id)}>
                                    <img src={trash} />
                                </DeleteButton>
                            </>
                        )}
                    </NoteListItem>
                ))
            )}
        </NotesList>
    );
}