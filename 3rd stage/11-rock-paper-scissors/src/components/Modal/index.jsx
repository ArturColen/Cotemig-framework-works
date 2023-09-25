import { Flex, Spacer, Typography } from '../../assets/styles';
import { StyledModal, CloseModal } from '../../assets/styles/Modal/Modal.style';

export function Modal({ open, handleOpenModal, modalTitle, modalMessage }) {
    return (
        <StyledModal open={open}>
            <Flex direction='column'>
                <Typography primary>{modalTitle}</Typography>
                <Spacer margin='8px' />
                <CloseModal onClick={() => handleOpenModal()}>X</CloseModal>
                <Typography primary>{modalMessage}</Typography>
            </Flex>
        </StyledModal>
    );
}