import { DependencyList, useEffect, useRef } from 'react';

const useUpdateEffect = (func: Function, dependency: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    }

    didMount.current = true;
  }, dependency);
};

export default useUpdateEffect;
