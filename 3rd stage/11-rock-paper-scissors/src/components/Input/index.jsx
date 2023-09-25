import { StyledInput } from '../../assets/styles/Input/Input.style';

export function Input({ placeholder, onChange }) {
    return (
        <StyledInput
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}