import React, { useEffect, useState } from 'react';
import styles from '../../pages/home/home.module.scss';
import cn from 'classnames';
import DogPhoto from '../../components/dogPhoto';
import IpFinder from '../../components/ipFinder';
import CatFacts from '../../components/catFacts';
import Weather from '../../components/weather';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../core/store/store';
import { inizialization } from '../../../core/store/todo';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import TodoList from '../../components/todoList';

const HomeView = () => {
  const allTasks = useAppSelector((state) => state.todo);

  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inizialization());
  }, []);

  useUpdateEffect(() => {
    const json = JSON.stringify(darkTheme);
    localStorage.setItem('themeMode', json);
  }, [darkTheme]);

  useUpdateEffect(() => {
    const json = JSON.stringify(allTasks);
    localStorage.setItem('todos', json);
  }, [allTasks]);

  return (
    <div
      className={cn(styles.fullPage, {
        [styles.darkMode]: darkTheme === true,
      })}
    >
      <div className={styles.home}>
        <TodoList />
        <div className={styles.widgetsBlock}>
          <h2 className={styles.widgetsHeader}>Here are available widgets</h2>
          <div className={styles.allWidgets}>
            <DogPhoto />
            <IpFinder />
            <CatFacts />
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
