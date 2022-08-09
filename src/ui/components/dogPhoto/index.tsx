import React from 'react';
import styles from './dog.module.scss';
import Button from '../../common/button';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { fetchDog } from '../../../core/store/dog/asyncAction';
import { Status } from '../../../core/store/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  return (
    <div className={styles.dogWidget}>
      <h3 className={styles.dogHeader}>Random dog generator</h3>
      <div className={styles.randomImgContainer}>
        {dog.status === Status.SUCCESS ? (
          <img className={styles.dogUrl} src={dog.dogUrl} alt='Random dog' />
        ) : (
          <h3 className={styles.noDog}>Here will be your dog photo</h3>
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
