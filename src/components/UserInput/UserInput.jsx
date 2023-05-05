import UserInputWrapper from './UserInputWrapper';

import styles from './UserInput.module.css';

const UserInput = () => {
  return (
    <UserInputWrapper>
      <form>
        <div className={styles['control-group']}>
          <div className={styles['form-control']}>
            <label htmlFor="topic">Game Topic</label>
            <input type="text" id="topic" />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="level">Game Level (7-30)</label>
            <input type="number" id="level" min="7" max="30" />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="level">Lucky Number (1-100)</label>
            <input type="number" id="level" min="1" max="100" />
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
