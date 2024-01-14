import { DeleteButton, NotesList, NoteListItem, NoteText, WarningText, TrashIcon } from '../../assets/styles/components/NoteList/NoteList.style';

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
                                    <TrashIcon />
                                </DeleteButton>
                            </>
                        )}
                    </NoteListItem>
                ))
            )}
        </NotesList>
    );
}