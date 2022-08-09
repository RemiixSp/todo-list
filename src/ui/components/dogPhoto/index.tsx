import React from 'react';
import styles from './dog.module.scss';
import Button from '../../common/button';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { fetchDog } from '../../../core/store/dog/asyncAction';
import { Status } from '../../../core/store/types';

const DogPhoto = () => {
  const dog = useAppSelector((state) => state.dog);

  const dispatch = useAppDispatch();

  const getDogs = async () => {
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
      <Button className={styles.randomize} onClick={getDogs}>
        Get new dog
      </Button>
    </div>
  );
};

export default DogPhoto;
