import React from 'react';
import Header from '../../components/header';
import TodoBlock from '../../components/todoBlock';
import styles from './home.module.scss';
import TextArea from '../../common/textArea';

const Home = () => {
  let a = 0;
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />

        <div className={styles.todoBlock}>
          <div className={styles.addContainer}>
            <h2>Add task</h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <TextArea
                cols={30}
                rows={10}
                className={styles.todoDescription}
                placeholder='Enter to-do you want to add'
              />

              <button type='submit'>Submit</button>
            </form>
          </div>
          <h2 className={styles.todoBlockHeader}>Here is your to-do list</h2>
          <div className={styles.allTodos}>
            {a === 1 ? (
              <h3 className={styles.noTask}>
                You havent added any task yet. Its never late to do it rigth now
              </h3>
            ) : (
              <>
                <TodoBlock description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam facere nostrum optio molestiae accusamus?' />
                <TodoBlock description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam facere nostrum optio molestiae accusamus?' />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
