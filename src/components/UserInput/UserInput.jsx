import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inputAction } from '../../store/userInput-slice';

import UserInputWrapper from './UserInputWrapper';

import styles from './UserInput.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const UserInput = () => {
  const [invalidInput, setInvalidInput] = useState(null);
  const topicRef = useRef();
  const levelRef = useRef();
  const pageRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModal = () => {
    setInvalidInput(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTopic = topicRef.current.value;
    const enteredLevel = levelRef.current.value;
    const enteredPage = pageRef.current.value;

    if (
      enteredTopic.trim() === '' ||
      enteredLevel.trim() === '' ||
      enteredPage.trim() === ''
    ) {
      setInvalidInput({
        title: 'Invalid input',
        message:
          'To setup the game you need to provide all valid information - Topic, Game level and Lucky Number',
      });
      return;
    }
    dispatch(inputAction.getInput({ enteredTopic, enteredLevel, enteredPage }));
    navigate('/game');
  };

  return (
    <UserInputWrapper>
      {invalidInput && (
        <Modal
          title={invalidInput.title}
          message={invalidInput.message}
          onConfirm={handleModal}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles['control-group']}>
          <div className={styles['form-control']}>
            <label htmlFor="topic">Game Topic</label>
            <input
              type="text"
              id="topic"
              placeholder="Cars, Nature, Space, Lviv etc."
              ref={topicRef}
            />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="level">Game Level (7-30)</label>
            <input type="number" id="level" min="7" max="30" ref={levelRef} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="page">Lucky Number (1-100)</label>
            <input type="number" id="page" min="1" max="100" ref={pageRef} />
          </div>
        </div>
        <div className={styles['form-actions']}>
          <Button>Play</Button>
        </div>
      </form>
    </UserInputWrapper>
  );
};

export default UserInput;
