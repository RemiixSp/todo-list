import React from 'react';
import ContentLoader from 'react-content-loader';

const IpLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={250}
    viewBox='0 0 280 250'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='4' y='11' rx='5' ry='5' width='108' height='32' />
    <rect x='124' y='11' rx='5' ry='5' width='135' height='32' />
    <rect x='4' y='55' rx='5' ry='5' width='140' height='32' />
    <rect x='153' y='55' rx='5' ry='5' width='99' height='32' />
    <rect x='4' y='100' rx='5' ry='5' width='184' height='32' />
    <rect x='4' y='146' rx='5' ry='5' width='110' height='32' />
  </ContentLoader>
);

export default IpLoader;
