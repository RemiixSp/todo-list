import React from 'react';

type TodoProps = {
  description: string;
};

const TodoBlock: React.FC<TodoProps> = ({ description }) => {
  return (
    <div className='todo'>
      <div className='todo__content'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TodoBlock;
