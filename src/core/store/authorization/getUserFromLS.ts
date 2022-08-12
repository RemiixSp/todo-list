export const getUserFromLS = () => {
  const data = localStorage.getItem('user');
  const userName = data ? JSON.parse(data)?.userName : '';
  const isAuthorized = data ? JSON.parse(data)?.isAuthorized : false;
  return { userName, isAuthorized };
};
