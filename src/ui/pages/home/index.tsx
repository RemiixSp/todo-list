import React, { useRef, useState } from 'react';
import Header from '../../components/header';
import TodoBlock from '../../components/todoBlock';
import styles from './home.module.scss';
import TextArea from '../../common/textArea';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';
import {
  addTask,
  finishTask,
  deleteTaskFromStorage,
} from '../../../core/store/todo';
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

  const allTasks = useSelector((state: RootState) => state.todoReducer);
  const addTaskAction = () => {
    const newTodo: Task = { description: textAreaValue, status: Status.LISTED };
    if (
      allTasks.listedTasks?.find((obj) => obj.description === textAreaValue)
    ) {
      alert('this task is already added');
    } else {
      dispatch(addTask(newTodo));
    }
  };
  const makeTaskDone = (val: string) => {
    dispatch(finishTask(val));
  };
  const deleteTask = (val: Task) => {
    dispatch(deleteTaskFromStorage(val));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (window.confirm('Add this task to your list?')) {
      addTaskAction();
      setTextAreaValue('');
    }
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
            {allTasks.listedTasks?.length === 0 ? (
              <h3 className={styles.noTask}>
                You havent added any task yet. Its never late to do it rigth now
              </h3>
            ) : (
              <>
                {allTasks.listedTasks?.map((obj, index) => (
                  <TodoBlock
                    key={obj.description}
                    description={obj.description}
                    status={obj.status}
                    onDoneClick={makeTaskDone}
                    onDeleteClick={deleteTask}
                  />
                ))}
              </>
            )}
          </div>
          <h2 className={styles.todoBlockHeader}>Here is your done tasks</h2>
          {allTasks.doneTasks?.length > 0 && (
            <div className={styles.allTodos}>
              {allTasks.doneTasks?.map((obj, index) => (
                <TodoBlock
                  done
                  key={obj.description}
                  description={obj.description}
                  status={obj.status}
                  onDeleteClick={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
