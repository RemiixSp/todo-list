import React, { useEffect, useState } from 'react';
import styles from '../../pages/home/home.module.scss';
import TextArea from '../../common/textArea';
import TodoBlock from '../../components/todoBlock';
import DogPhoto from '../../components/dogPhoto';
import IpFinder from '../../components/ipFinder';
import CatFacts from '../../components/catFacts';
import Weather from '../../components/weather';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../core/store/store';
import { Status } from '../../../core/store/todo/types';
import { nanoid } from '@reduxjs/toolkit';
import {
  addTask,
  finishTask,
  deleteTaskFromStorage,
  pinTask,
  inizialization,
} from '../../../core/store/todo';
import useUpdateEffect from '../../hooks/useUpdateEffect';

const HomeView = () => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const allTasks = useAppSelector((state) => state.todo);

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
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTaskAction();
    setTextAreaValue('');
  };

  const makeTaskDone = (obj: string) => {
    dispatch(finishTask(obj));
  };

  const deleteTask = (val: string) => {
    dispatch(deleteTaskFromStorage(val));
  };

  const makeTaskPinned = (val: string) => {
    dispatch(pinTask(val));
  };

  useEffect(() => {
    dispatch(inizialization());
  }, []);

  useUpdateEffect(() => {
    const json = JSON.stringify(allTasks);
    localStorage.setItem('todos', json);
  }, [allTasks]);

  return (
    <div className={styles.home}>
      <div className={styles.todoBlock}>
        <div className={styles.addContainer}>
          <h2>Add task</h2>
          <form onSubmit={onFormSubmit}>
            <TextArea
              onChange={onChangeTextAreaVal}
              value={textAreaValue}
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
      <div className={styles.widgetsBlock}>
        <h2 className={styles.widgetsHeader}>Here are available widgets</h2>
        <div className={styles.allWidgets}>
          <DogPhoto />
          <IpFinder />
          <CatFacts />
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
