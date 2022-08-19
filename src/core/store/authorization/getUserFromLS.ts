import { useEffect } from 'react';

export const getUserFromLS = () => {
  const data = typeof window !== 'undefined' && localStorage.getItem('user');

  let userName = '';
  let isAuthorized = false;
  if (data) {
    const parseddate = JSON.parse(data);
    userName = data ? parseddate?.userName : '';
    isAuthorized = data ? parseddate?.isAuthorized : false;
  }
  return { userName, isAuthorized };
};
