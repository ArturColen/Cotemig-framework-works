import { StyledButton } from '../../assets/styles/Button/Button.style';

export function Button({ children, onClick }) {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
}