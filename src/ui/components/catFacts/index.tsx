import React from 'react';
import styles from './cat.module.scss';
import { fetchFact } from '../../../core/store/facts/asyncAction';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../core/store/store';
import { useUpdateTimeIntervals } from '../../hooks/useUpdateTimeIntervals';

const CatFacts = () => {
  const fact = useSelector((state: RootState) => state.fact);

  const dispatch = useAppDispatch();

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
      <div></div>
    </div>
  );
};

export default CatFacts;
