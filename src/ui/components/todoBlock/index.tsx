import React from 'react';
import pin from '../../../media/images/pin.svg';
import doneImg from '../../../media/images/done.svg';
import deleteImg from '../../../media/images/delete.svg';
import styles from './todo.module.scss';
import cn from 'classnames';
import { Status, Task } from '../../../core/store/todo/types';

interface TodoProps {
  description: string;
  status: Status;
  done?: boolean;
  onDoneClick?: (val: string) => void;
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
}) => (
  <div
    className={cn(styles.todo, {
      [styles.pinnedBlock]: status === Status.PINNED,
    })}
  >
    <p className={cn({ [styles.doneDescription]: done })}>{description}</p>
    <img
      onClick={() => onPinClick?.({ description: description, status: status })}
      className={cn(styles.todoImg, styles.todoPin, {
        [styles.imgWhenDone]: done,
      })}
      src={pin}
      alt='Pin'
    />
    <img
      onClick={() => onDoneClick?.(description)}
      className={cn(styles.todoImg, styles.todoDone, {
        [styles.imgWhenDone]: done,
      })}
      src={doneImg}
      alt='Done'
    />
    <img
      onClick={() =>
        onDeleteClick({ description: description, status: status })
      }
      className={cn(styles.todoImg, styles.todoDelete)}
      src={deleteImg}
      alt='Delete'
    />
  </div>
);

export default TodoBlock;
