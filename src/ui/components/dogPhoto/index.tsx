import React, { useEffect } from 'react';
import styles from './dog.module.scss';
import Button from '../../common/button';
import DogLoader from './skeleton';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { fetchDog } from '../../../core/store/dog/asyncAction';
import { Status } from '../../../core/store/types';
import { ToastContainer, toast } from 'react-toastify';
import cn from 'classnames';

const DogPhoto = () => {
  const dog = useAppSelector((state) => state.dog);

  const dispatch = useAppDispatch();

  const getDogs = async () => {
    try {
      dispatch(fetchDog());
    } catch (error) {
      toast.error('Error while getting pizzas');
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className={cn(styles.dogWidget, 'card')}>
      <h4 className={styles.dogHeader}>Dog generator</h4>
      <div className={styles.randomImgContainer}>
        {dog.status === Status.SUCCESS ? (
          <img className={styles.dogUrl} src={dog.dogUrl} alt='Random dog' />
        ) : (
          <DogLoader />
        )}
      </div>
      <Button className={styles.randomize} onClick={getDogs}>
        Get new dog
      </Button>
      <ToastContainer />
    </div>
  );
};

export default DogPhoto;
