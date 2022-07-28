import React from 'react';
import pin from '../../media/images/pin.svg';
import done from '../../media/images/done.svg';
import deleteImg from '../../media/images/delete.svg';
import styles from '../style/components/todo.module.scss';
import cn from 'classnames';
interface TodoProps {
  description: string;
}

const TodoBlock: React.FC<TodoProps> = ({ description }) => (
  <div className={styles.todo}>
    <p>{description}</p>
    <img
      className={cn(styles.todo__img, styles.todo__pin)}
      src={pin}
      alt='Pin img'
    />
    <img
      className={cn(styles.todo__img, styles.todo__done)}
      src={done}
      alt='Done img'
    />
    <img
      className={cn(styles.todo__img, styles.todo__delete)}
      src={deleteImg}
      alt='Delete img'
    />
  </div>
);

export default TodoBlock;
