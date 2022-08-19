import React from 'react';
import ContentLoader from 'react-content-loader';
import { useAppSelector } from '../../../core/store/store';
import styles from './dog.module.scss';

const DogLoader = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={250}
      viewBox='0 0 280 250'
      backgroundColor={darkTheme ? '#371b58' : '#f3f3f3'}
      foregroundColor={darkTheme ? '#4c3575' : '#ecebeb'}
    >
      <rect
        className={styles.test}
        width={'100%'}
        x='3'
        y='0'
        rx='10'
        ry='10'
        height='240'
      />
    </ContentLoader>
  );
};

export default DogLoader;
