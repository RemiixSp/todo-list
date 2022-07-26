import React from 'react';
import Header from '../components/header';
import TodoBlock from '../components/todoBlock';
const Home = () => {
  let a = 0;
  return (
    <div className='container'>
      <div className='home'>
        <Header />

        <div className='todo-block'>
          <h2 className='todo-block__header'>Here is your to-do list</h2>
          <div className='all-todos'>
            {a === 1 ? (
              <h3 className='all-todos__no-task'>
                You haven't added any task yet. It's never late to do it rigth
                now
              </h3>
            ) : (
              <>
                <TodoBlock description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam facere nostrum optio molestiae accusamus?' />
                <TodoBlock
                  description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, sunt repudiandae rerum at vitae tempore vel deleniti voluptates illum. Perspiciatis dolore accusantium aspernatur reprehenderit laudantium?
'
                />
                <TodoBlock description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, non?' />
                <TodoBlock description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima in maxime iusto aut laudantium perferendis.' />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
