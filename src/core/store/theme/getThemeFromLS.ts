export const getThemeFromLS = () => {
  const data =
    typeof window !== 'undefined' && localStorage.getItem('themeMode');
  const theme = data ? JSON.parse(data) : false;
  return theme;
};
