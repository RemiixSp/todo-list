import React, { useEffect } from 'react';
import styles from './cat.module.scss';
import { fetchBreeds, fetchFact } from '../../../core/store/facts/asyncAction';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { useUpdateTimeIntervals } from '../../hooks/useUpdateTimeIntervals';

const CatFacts = () => {
  const fact = useAppSelector((state) => state.fact);

  const dispatch = useAppDispatch();

  const getBreeds = async () => {
    try {
      dispatch(fetchBreeds());
    } catch (error) {
      alert('Error while getting facts');
    }
  };

  useEffect(() => {
    getBreeds();
  }, []);

  useUpdateTimeIntervals(
    5000,
    () => {
      const getFact = async () => {
        try {
          dispatch(fetchFact());
        } catch (error) {
          alert('Error while getting facts');
        }
      };
      getFact();
    },
    [fact.randomCatFact]
  );

  return (
    <div className={styles.factsWidget}>
      <div className={styles.catFacts}>
        <h3>Here you'll get a random cat fact every 5 seconds</h3>
        <p className={styles.randomFact}>{fact.randomCatFact}</p>
      </div>
      <div className={styles.breedTypes}>
        <h3>Info about different breeds</h3>
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
    </div>
  );
};

export default CatFacts;
