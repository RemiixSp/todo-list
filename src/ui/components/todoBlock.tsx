import React from 'react';
import pin from '../../media/images/pin.png';
import done from '../../media/images/done.png';
import deleteImg from '../../media/images/delete.png';

type TodoProps = {
  description: string;
};

const TodoBlock: React.FC<TodoProps> = ({ description }) => {
  return (
    <div className='todo'>
      <p>{description}</p>
      <img className='todo__img todo__pin' src={pin} alt='Pin img' />
      <img className='todo__img todo__done' src={done} alt='Done img' />
      <img
        className='todo__img todo__delete'
        src={deleteImg}
        alt='Delete img'
      />
    </div>
  );
};

export default TodoBlock;
