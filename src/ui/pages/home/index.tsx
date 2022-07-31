import React, { useRef, useState } from 'react';
import Header from '../../components/header';
import TodoBlock from '../../components/todoBlock';
import styles from './home.module.scss';
import TextArea from '../../common/textArea';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';
import { addTask } from '../../../core/store/todo';
import { Task, Status } from '../../../core/store/todo/types';

const Home = () => {
  const dispatch = useDispatch();
  const [textAreaValue, setTextAreaValue] = useState('');
  const componentDidMount = useRef(false);
  const onChangeTextAreaVal = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
  };

  const listTasks = useSelector(
    (state: RootState) => state.todoReducer.listedTasks
  );
  const allTasks = useSelector((state: RootState) => state.todoReducer);
  const addTaskAction = () => {
    const newTodo: Task = { description: textAreaValue, status: Status.LISTED };
    dispatch(addTask(newTodo));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTaskAction();
  };
  React.useEffect(() => {
    if (componentDidMount.current) {
      const json = JSON.stringify(allTasks);
      localStorage.setItem('todos', json);
    }
    componentDidMount.current = true;
  }, [allTasks]);

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />

        <div className={styles.todoBlock}>
          <div className={styles.addContainer}>
            <h2>Add task</h2>
            <form onSubmit={onFormSubmit}>
              <TextArea
                onChange={onChangeTextAreaVal}
                value={textAreaValue}
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
            {listTasks.length === 0 ? (
              <h3 className={styles.noTask}>
                You havent added any task yet. Its never late to do it rigth now
              </h3>
            ) : (
              <>
                {listTasks.map((obj, index) => (
                  <TodoBlock
                    key={obj.description}
                    description={obj.description}
                    isPinned={obj.status === 'pinned' ? true : false}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
