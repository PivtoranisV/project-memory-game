import { useRef } from 'react';

import UserInputWrapper from './UserInputWrapper';

import styles from './UserInput.module.css';

const UserInput = () => {
  const topicRef = useRef();
  const levelRef = useRef();
  const pageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTopic = topicRef.current.value;
    const enteredLevel = levelRef.current.value;
    const enteredPage = pageRef.current.value;

    console.log(enteredLevel, enteredPage, enteredTopic);
  };

  return (
    <UserInputWrapper>
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
            <label htmlFor="level">Lucky Number (1-100)</label>
            <input type="number" id="level" min="1" max="100" ref={pageRef} />
          </div>
        </div>
        <div className={styles['form-actions']}>
          <button>Play</button>
        </div>
      </form>
    </UserInputWrapper>
  );
};

export default UserInput;
