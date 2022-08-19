import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './todoList.module.scss';
import { useAppSelector } from '../../../core/store/store';
import {
  deleteTaskFromStorage,
  finishTask,
  pinTask,
} from '../../../core/store/todo';
import TodoBlock from '../todoBlock';
import TodoForm from '../todoForm';
import cn from 'classnames';

const TodoList = () => {
  const allTasks = useAppSelector((state) => state.todo);

  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const makeTaskDone = (obj: string) => {
    dispatch(finishTask(obj));
  };

  const deleteTask = (val: string) => {
    dispatch(deleteTaskFromStorage(val));
  };

  const makeTaskPinned = (val: string) => {
    dispatch(pinTask(val));
  };

  return (
    <div className={cn(styles.todoBlock, { [styles.darkTheme]: darkTheme })}>
      <TodoForm />
      <h2 className={styles.todoBlockHeader}>Here is your to-do list</h2>
      <div className={styles.allTodos}>
        {allTasks.listedTasks?.length === 0 ? (
          <h4 className={styles.noTask}>
            You havent added any task yet. Its never late to do it rigth now
          </h4>
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

export default TodoList;
