import { DependencyList, useEffect } from 'react';

export const useUpdateTimeIntervals = (
  milisecs: number,
  func: Function,
  dependency: DependencyList
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      func();
    }, milisecs);

    return () => clearTimeout(timer);
  }, dependency);
};
