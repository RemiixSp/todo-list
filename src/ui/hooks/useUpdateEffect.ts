import { useEffect, useRef } from 'react';
import { TodoState } from '../../core/store/todo/types';

const useUpdateEffect = (func: Function, tasks: TodoState) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      func();
    }
    didMount.current = true;
  }, [tasks]);
};
export default useUpdateEffect;
