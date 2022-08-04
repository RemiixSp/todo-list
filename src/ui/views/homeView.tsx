import React, { useState } from 'react';
import styles from '../pages/home/home.module.scss';
import TextArea from '../common/textArea';
import TodoBlock from '../components/todoBlock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';
import { Status, Task } from '../../core/store/todo/types';
import { nanoid } from '@reduxjs/toolkit';
import {
  addTask,
  finishTask,
  deleteTaskFromStorage,
  pinTask,
} from '../../core/store/todo';
import useUpdateEffect from '../hooks/useUpdateEffect';

const HomeView = () => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const allTasks = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  const onChangeTextAreaVal = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTextAreaValue(event.target.value);

  const addTaskAction = () => {
    const newTodo = {
      id: nanoid(),
      description: textAreaValue,
      status: Status.LISTED,
    };
    if (
      allTasks.listedTasks?.find((obj) => obj.description === textAreaValue)
    ) {
      alert('this task is already added');
    } else {
      dispatch(addTask(newTodo));
    }
    console.log(localStorage.getItem('todos') + '1');
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTaskAction();
    setTextAreaValue('');
  };

  const makeTaskDone = (obj: Task) => {
    dispatch(finishTask(obj));
  };

  const deleteTask = (val: Task) => {
    dispatch(deleteTaskFromStorage(val));
  };

  const makeTaskPinned = (val: Task) => {
    dispatch(pinTask(val));
  };

  useUpdateEffect(() => {
    const json = JSON.stringify(allTasks);
    localStorage.setItem('todos', json);
  }, allTasks);
  return (
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
                id={obj.id}
                key={obj.description}
                description={obj.description}
                status={obj.status}
                onDoneClick={makeTaskDone}
                onPinClick={makeTaskPinned}
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
              id={obj.id}
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
  );
};

export default HomeView;
