import { DependencyList, useEffect } from 'react';

export const useDebounce = (
  milisecs: number,
  func: Function,
  dependency: DependencyList
) => {
  useEffect(() => {
    const timer = setTimeout(func, milisecs);

    return () => clearTimeout(timer);
  }, dependency);
};
