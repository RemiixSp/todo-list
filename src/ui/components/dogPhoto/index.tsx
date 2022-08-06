import React from 'react';
import styles from './dog.module.scss';
import Button from '../../common/button';
import { RootState, useAppDispatch } from '../../../core/store/store';
import { fetchDog } from '../../../core/store/dog/asyncAction';
import { useSelector } from 'react-redux';
import { Status } from '../../../core/store/dog/types';

const DogPhoto = () => {
  const dispatch = useAppDispatch();

  const dog = useSelector((state: RootState) => state.dog);

  const getPizzas = async () => {
    try {
      dispatch(fetchDog());
    } catch (error) {
      alert('Error while getting pizzas');
    }
  };

  return (
    <div className={styles.dogWidget}>
      <h3 className={styles.dogHeader}>Random dog generator</h3>
      <div className={styles.randomImgContainer}>
        {dog.status === Status.SUCCESS ? (
          <img src={dog.dogUrl} alt='Random dog' />
        ) : (
          <h3 className={styles.noDog}>Here will be your dog photo</h3>
        )}
      </div>
      <Button className={styles.randomize} onClick={getPizzas}>
        Get new dog
      </Button>
    </div>
  );
};

export default DogPhoto;
