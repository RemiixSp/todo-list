import React from 'react';
import pin from '../../../media/images/pin.svg';
import done from '../../../media/images/done.svg';
import deleteImg from '../../../media/images/delete.svg';
import styles from './todo.module.scss';
import cn from 'classnames';

interface TodoProps {
  description: string;
  isPinned: boolean;
}

const TodoBlock: React.FC<TodoProps> = ({ description }) => (
  <div className={styles.todo}>
    <p>{description}</p>
    <img className={cn(styles.todoImg, styles.todoPin)} src={pin} alt='Pin' />
    <img
      className={cn(styles.todoImg, styles.todoDone)}
      src={done}
      alt='Done'
    />
    <img
      className={cn(styles.todoImg, styles.todoDelete)}
      src={deleteImg}
      alt='Delete'
    />
  </div>
);

export default TodoBlock;
