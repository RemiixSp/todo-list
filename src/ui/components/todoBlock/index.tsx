import React from 'react';
import styles from './todo.module.scss';
import cn from 'classnames';
import { Status } from '../../../core/store/todo/types';
import { ReactComponent as DoneIcon } from '../../../media/images/done.svg';
import { ReactComponent as PinIcon } from '../../../media/images/pin.svg';
import { ReactComponent as DeleteIcon } from '../../../media/images/delete.svg';
import { useAppSelector } from '../../../core/store/store';

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
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  return (
    <div
      className={cn(
        styles.todo,
        'card',
        {
          [styles.todoPinned]: status === Status.PINNED,
        },
        { [styles.darkTheme]: darkTheme },
        { [styles.darkThemePinned]: darkTheme && status === Status.PINNED }
      )}
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
