import React from 'react';
import ContentLoader from 'react-content-loader';

const WeatherLoader = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={260}
    viewBox='0 0 580 260'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='25' y='14' rx='3' ry='3' width='145' height='17' />
    <rect x='25' y='43' rx='10' ry='10' width='139' height='32' />
    <rect x='25' y='89' rx='6' ry='6' width='160' height='23' />
    <rect x='210' y='88' rx='6' ry='6' width='160' height='23' />
    <rect x='394' y='89' rx='6' ry='6' width='160' height='23' />
    <rect x='25' y='133' rx='3' ry='3' width='152' height='16' />
    <rect x='25' y='165' rx='7' ry='7' width='251' height='22' />
    <rect x='303' y='162' rx='7' ry='7' width='251' height='22' />
    <rect x='25' y='203' rx='3' ry='3' width='152' height='16' />
    <rect x='25' y='226' rx='7' ry='7' width='251' height='26' />
    <rect x='303' y='223' rx='7' ry='7' width='251' height='26' />
  </ContentLoader>
);

export default WeatherLoader;
