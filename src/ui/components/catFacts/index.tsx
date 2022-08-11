import React, { useEffect } from 'react';
import styles from './cat.module.scss';
import { fetchBreeds, fetchFact } from '../../../core/store/facts/asyncAction';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { useDebounce } from '../../hooks/useDebounce';
import { ToastContainer, toast } from 'react-toastify';
import cn from 'classnames';

const CatFacts = () => {
  const fact = useAppSelector((state) => state.fact);

  const dispatch = useAppDispatch();

  const getBreeds = async () => {
    try {
      dispatch(fetchBreeds());
    } catch (error) {
      toast.error('Error while getting breeds');
    }
  };

  const getFact = async () => {
    try {
      dispatch(fetchFact());
    } catch (error) {
      toast.error('Error while getting facts');
    }
  };

  useEffect(() => {
    getBreeds();
    getFact();
  }, []);

  useDebounce(
    15000,
    () => {
      getFact();
    },
    [fact.randomCatFact]
  );

  return (
    <div className={cn(styles.factsWidget)}>
      <div className={cn(styles.catFacts, 'card')}>
        <h5>Here you'll get a random cat fact every 15 seconds</h5>
        <p className={styles.randomFact}>{fact.randomCatFact}</p>
      </div>
      <div className={cn(styles.breedTypes, 'card')}>
        <h5 className={styles.breedsHeadere}>Info about breeds</h5>
        <div className={styles.allBreeds}>
          {' '}
          <ul className={styles.breedList}>
            {fact.breeds.map((obj) => (
              <li
                key={`${obj.breed}_${obj.coat}_${obj.origin}`}
                className={styles.eachBreed}
              >
                {`Breed: ${obj.breed} Coat: ${obj.coat} Country: ${obj.country} Origin: ${obj.origin} Pattern: ${obj.pattern}`}
                ``
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CatFacts;
