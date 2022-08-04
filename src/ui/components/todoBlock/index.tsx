import React, { useEffect } from 'react';
import styles from './todo.module.scss';
import cn from 'classnames';
import { Status, Task } from '../../../core/store/todo/types';
import { useDispatch } from 'react-redux';
import { inizialization } from '../../../core/store/todo/index';
import { ReactComponent as DoneIcon } from '../../../media/images/done.svg';
import { ReactComponent as PinIcon } from '../../../media/images/pin.svg';
import { ReactComponent as DeleteIcon } from '../../../media/images/delete.svg';

interface TodoProps {
  id: string;
  description: string;
  status: Status;
  done?: boolean;
  onDoneClick?: (obj: Task) => void;
  onPinClick?: (val: Task) => void;
  onDeleteClick: (val: Task) => void;
}

const TodoBlock: React.FC<TodoProps> = ({
  description,
  onDoneClick,
  onDeleteClick,
  onPinClick,
  done,
  status,
  id,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inizialization());
    console.log(localStorage.getItem('todos') + '3');
  }, []);

  const todoTask = { id: id, description: description, status: status };

  return (
    <div
      className={cn(styles.todo, {
        [styles.todoPinned]: status === Status.PINNED,
      })}
    >
      <p className={styles.pinnedIdentifier}>pinned</p>
      <p className={cn({ [styles.doneDescription]: done })}>{description}</p>
      <button
        className={cn(styles.todoImg, styles.todoPin, {
          [styles.imgWhenDone]: done,
        })}
        onClick={() => onPinClick?.(todoTask)}
      >
        <PinIcon />
      </button>
      <button
        className={cn(styles.todoImg, styles.todoDone, {
          [styles.imgWhenDone]: done,
        })}
        onClick={() => onDoneClick?.(todoTask)}
      >
        <DoneIcon />
      </button>
      <button
        className={cn(styles.todoImg, styles.todoDelete)}
        onClick={() => onDeleteClick(todoTask)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TodoBlock;
