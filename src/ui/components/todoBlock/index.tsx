import React from 'react';
import pin from '../../../media/images/pin.svg';
import doneImg from '../../../media/images/done.svg';
import deleteImg from '../../../media/images/delete.svg';
import styles from './todo.module.scss';
import cn from 'classnames';
import { Status, Task } from '../../../core/store/todo/types';

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
  const todoTask = { id: id, description: description, status: status };
  return (
    <div
      className={cn(styles.todo, {
        [styles.todoPinned]: status === Status.PINNED,
      })}
    >
      <p className={styles.pinnedIdentifier}>pinned</p>
      <p className={cn({ [styles.doneDescription]: done })}>{description}</p>
      <img
        onClick={() => onPinClick?.(todoTask)}
        className={cn(styles.todoImg, styles.todoPin, {
          [styles.imgWhenDone]: done,
        })}
        src={pin}
        alt='Pin'
      />
      <img
        onClick={() => onDoneClick?.(todoTask)}
        className={cn(styles.todoImg, styles.todoDone, {
          [styles.imgWhenDone]: done,
        })}
        src={doneImg}
        alt='Done'
      />
      <img
        onClick={() => onDeleteClick(todoTask)}
        className={cn(styles.todoImg, styles.todoDelete)}
        src={deleteImg}
        alt='Delete'
      />
    </div>
  );
};

export default TodoBlock;
