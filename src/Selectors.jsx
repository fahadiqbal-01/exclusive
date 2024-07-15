import { useSelector } from 'react-redux';

export const useCustomSelector = (reducer, key) => {
  return useSelector((state) => state[reducer][key]);
};
