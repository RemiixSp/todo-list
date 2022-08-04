import React, { useEffect } from 'react';
import styles from './todo.module.scss';
import cn from 'classnames';
import { Status } from '../../../core/store/todo/types';
import { useDispatch } from 'react-redux';
import { inizialization } from '../../../core/store/todo/index';
import { ReactComponent as DoneIcon } from '../../../media/images/done.svg';
import { ReactComponent as PinIcon } from '../../../media/images/pin.svg';
import { ReactComponent as DeleteIcon } from '../../../media/images/delete.svg';
import useUpdateEffect from '../../hooks/useUpdateEffect';

interface TodoProps {
  id: string;
  description: string;
  status: Status;
  done?: boolean;
  onDoneClick?: (id: string) => void;
  onPinClick?: (id: string) => void;
  onDeleteClick: (id: string) => void;
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

  // useEffect(() => {
  //   dispatch(inizialization());
  //   console.log(localStorage.getItem('todos') + 'inizialization');
  // }, []);

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
        onClick={() => onPinClick?.(id)}
      >
        <PinIcon />
      </button>
      <button
        className={cn(styles.todoImg, styles.todoDone, {
          [styles.imgWhenDone]: done,
        })}
        onClick={() => onDoneClick?.(id)}
      >
        <DoneIcon />
      </button>
      <button
        className={cn(styles.todoImg, styles.todoDelete)}
        onClick={() => onDeleteClick(id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TodoBlock;
