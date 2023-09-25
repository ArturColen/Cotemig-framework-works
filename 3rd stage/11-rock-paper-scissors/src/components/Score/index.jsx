import { Typography, Flex } from '../../assets/styles';

export function Score({ username, playerScore, computerScore }) {
    username = username.length > 12 ? `${username.slice(0, 8)}...` : username;

    return (
        <Flex direction='column'>
            <Typography size='32px' fontWeight='400' lineHeight='48px'>
                Placar
            </Typography>
            <Flex justify='space-between'>
                <Flex direction='column' gap='2px'>
                    <Typography>{username}</Typography>
                    <Typography>{playerScore}</Typography>
                </Flex>
                <Typography>X</Typography>
                <Flex direction='column' gap='2px'>
                    <Typography>Computador</Typography>
                    <Typography>{computerScore}</Typography>
                </Flex>
            </Flex>
        </Flex>
    );
}