import React from 'react';
import Header from '../components/header';
import TodoBlock from '../components/todoBlock';
import styles from '../style/pages/home.module.scss';
const Home = () => {
  let a = 0;
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />

        <div className={styles.todoBlock}>
          <div className={styles.todoBlock__addContainer}>
            <h2>Add task</h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <textarea
                cols={30}
                rows={10}
                className={styles.todoDescription}
                placeholder='Enter to-do you want to add'
              ></textarea>

              <button type='submit'>Submit</button>
            </form>
          </div>
          <h2 className={styles.todoBlock__header}>Here is your to-do list</h2>
          <div className={styles.allTodos}>
            {a === 1 ? (
              <h3 className={styles.allTodos__noTask}>
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
