import GameButton from './GameButton';
import Control from './Control';
import Modal from './Modal';
import useSimon from '../hooks/useSimon';
import './Simon.css';

const Simon = () => {

  const { state, dispatch, checkSequence, roundControls, GameButtons, loading } = useSimon();

  const start = () => {
    dispatch({ type: 'new-round', element: Math.floor(Math.random() * 4) });
  };

  return (
    <div className='board'>
      {GameButtons.current.map((e, i) => <GameButton controls={e.controls} key={e.id} id={i} color={e.color} border={e.border} audio={e.audio} player={state.player} checkSequence={checkSequence} />)}
      <Control start={start} round={state.round} controls={roundControls} />
      {(state.gameOver || loading) && <Modal round={state.round} dispatch={dispatch} loading={loading} />}
    </div>
  );
}

export default Simon;