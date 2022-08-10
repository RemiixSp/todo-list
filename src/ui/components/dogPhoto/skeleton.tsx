import React from 'react';
import ContentLoader from 'react-content-loader';

const DogLoader = () => (
  <ContentLoader
    speed={2}
    height={250}
    viewBox='0 0 280 250'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect width={'98%'} x='3' y='0' rx='10' ry='10' height='240' />
  </ContentLoader>
);

export default DogLoader;
