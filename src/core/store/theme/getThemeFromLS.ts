export const getThemeFromLS = () => {
  const data = localStorage.getItem('themeMode');
  const theme = data ? JSON.parse(data) : false;
  return theme;
};
