import { Flex, Typography } from '../../assets/styles';
import { Action } from '../../assets/styles/ActionsGame/ActionsGame.style';

export function ActionsGame({ actions, disabled, onClick }) {
    return (
        <Flex>
            {actions.map((action) => (
                <Action
                    key={action.value}
                    disabled={disabled}
                    onClick={() => onClick(action)}
                >
                    <Typography size='32px'>{action.label}</Typography>
                </Action>
            ))}
        </Flex>
    );
}