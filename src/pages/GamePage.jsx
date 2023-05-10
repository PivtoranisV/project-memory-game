import { useSelector, useDispatch } from 'react-redux';
import Score from '../components/CardList/Score';
import CardsList from '../components/CardList/CardsList';
import Modal from '../components/UI/Modal';
import { gameAction } from '../store/game-slice';

const GamePage = () => {
  let gameStatus = useSelector((state) => state.game.status);
  const gameScore = useSelector((state) => state.game.score);
  const gameLevel = useSelector((state) => state.input.level);
  const dispatch = useDispatch();

  const gameResetHandle = () => {
    dispatch(gameAction.gameReset());
  };

  return (
    <>
      {gameStatus === 'game over' && (
        <Modal
          title="GAME OVER"
          message={`You memorize ${gameScore} out of ${gameLevel} images. Do not give up!!! Try again and next time you will definitely win!`}
          onConfirm={gameResetHandle}
        />
      )}
      {gameStatus === 'game win' && (
        <Modal
          title="CONGRATULATION"
          message={`Congratulation, you was able to memorize all ${gameLevel} images. Wel Done!!! You can try to increase quantity of images and try again`}
          onConfirm={gameResetHandle}
        />
      )}
      <Score />
      <CardsList />
    </>
  );
};

export default GamePage;
