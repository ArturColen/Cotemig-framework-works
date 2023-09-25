import { useEffect, useState } from 'react';
import { ActionsGame } from './components/ActionsGame';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Modal } from './components/Modal';
import { Score } from './components/Score';
import * as C from './assets/styles';

const messages = {
  rules: {
    title: 'Regras',
    message: 'Jokenpô é um jogo em que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), papel (mão espalmada) e tesoura (dois dedos à frente). O jogo é semelhante ao "par ou ímpar", mas com uma variável a mais. Funciona assim: cada jogador escolhe uma opção. A tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura, e a pedra quebra a tesoura e é embrulhada pelo papel. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!'
  },
  user: {
    title: 'Usuário', 
    message: 'Preencha o nome do jogador!'
  },
  computerWin: {
    title: 'Que pena!',
    message: 'Não foi dessa vez, mas tente novamente. Aposto que você consegue!'
  },
  playerWin: {
    title: 'Parabéns!',
    message: 'Você venceu. Quero ver ganhar de novo!'
  }
};

const valueTypeEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3
};

const actions = [
  {
    value: 1,
    label: '👊🏽',
    description: 'Rock'
  },
  {
    value: 2,
    label: '🖐🏽',
    description: 'Paper'
  },
  {
    value: 3,
    label: '✌🏽',
    description: 'Scissors'
  }
];

function App() {
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [gameText, setGameText] = useState('Iniciar jogo!');
  const [playerScoreValue, setPlayerScoreValue] = useState(0);
  const [computerScoreValue, setComputerScoreValue] = useState(0);
  const [userAction, setUserAction] = useState('❓');
  const [computerAction, setComputerAction] = useState('❓');
  const [username, setUsername] = useState('Jogador');
  const [playGame, setPlayGame] = useState(false);
  const SCORE_TO_WIN = 10;
  const [gameEnabled, setGameEnabled] = useState(true);

  const handleOpenModal = (type) => { 
    if (!type) {
      setOpen(false);
      setModalTitle('');
      setModalMessage('');
      setGameEnabled(true);
      return;
    }

    setOpen(true);
    setModalTitle(messages?.[type]?.title);
    setModalMessage(messages?.[type]?.message);
    setGameEnabled(false);
  };

  const randomActionComputer = () => {
    const number = Math.floor(Math.random() * actions.length);
    return actions[number];
  };

  const handleClick = (value) => {
    setUserAction(value.label);
    const computerAction = randomActionComputer();
    setComputerAction(computerAction.label);
    checkWinner(value.value, computerAction.value);
  };

  const checkWinner = (playerValue, computerValue) => {
    const playerRockWin = playerValue === valueTypeEnum.ROCK && computerValue === valueTypeEnum.SCISSORS;
    const playerPaperWin = playerValue === valueTypeEnum.PAPER && computerValue === valueTypeEnum.ROCK;
    const playerScissorsWin = playerValue === valueTypeEnum.SCISSORS && computerValue === valueTypeEnum.PAPER;
    const drawerResult = playerValue === computerValue;
    const playerWin = playerRockWin || playerPaperWin || playerScissorsWin;

    if (drawerResult) return setGameText('Empate! Jogue novamente.');

    if (playerWin) {
      setPlayerScoreValue((state) => state + 1);
      return setGameText('Vitória! Jogue novamente.');
    }

    setComputerScoreValue((state) => state + 1);
    return setGameText('Derrota! Jogue novamente.');
  };

  const handleUsername = (value) => {
    if (!value) {
      setUsername('Jogador');
    }
    else {
      const words = value.split(' ');
      const formattedValue = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  
      setUsername(formattedValue);
    }
  };

  const startGame = () => {
    if (username === 'Jogador') {
      handleOpenModal('user');
      return;
    }

    if (playGame) return resetValues();
    setPlayGame(true);
  };

  const resetValues = () => {
    setGameText('Iniciar jogo!');
    setPlayGame(false);
    setPlayerScoreValue(0);
    setComputerScoreValue(0);
    setUserAction('❓');
    setComputerAction('❓');
  };

  useEffect(() => {
    const checkVictory = () => {
      const playerWin = playerScoreValue === SCORE_TO_WIN;
      const computerWin = computerScoreValue === SCORE_TO_WIN;

      if (playerWin || computerWin) {
        handleOpenModal(playerWin ? 'playerWin' : 'computerWin');
        resetValues();
      }
    };
  
    checkVictory();
  }, [playerScoreValue, computerScoreValue]);

  return (
    <>
      <C.Container>
        <C.Flex direction='column'>
          <C.Typography fontWeight='400' size='32px' lineHeight='48px'>
            Jokenpô
          </C.Typography>
          <Input
            placeholder='Digite o nome do jogador'
            onChange={(value) => handleUsername(value)}
          />
          <Button onClick={startGame}>{playGame ? 'Zerar' : 'Iniciar'}</Button>
          <Score
            username={username}
            playerScore={playerScoreValue}
            computerScore={computerScoreValue}
          />
          <C.Spacer margin='10px' />
          <C.Flex justify='space-around'>
            <C.Typography size='32px'>{userAction}</C.Typography>
            <C.Typography size='32px'>{computerAction}</C.Typography>
          </C.Flex>
          <C.Flex direction='column' gap='0px'>
            <C.Typography>{gameText}</C.Typography>
            <C.Rules onClick={() => handleOpenModal('rules')}>Regras</C.Rules>
          </C.Flex>
          <ActionsGame
            actions={actions}
            onClick={(value) => handleClick(value)}
            disabled={!playGame}
          />
          <Modal
            open={open}
            modalTitle={modalTitle}
            modalMessage={modalMessage}
            handleOpenModal={() => handleOpenModal(null)}
          />
        </C.Flex>
      </C.Container>
    </>
  );
}

export default App;