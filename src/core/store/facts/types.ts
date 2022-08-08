import { Status } from '../types';

export interface factProps {
  randomCatFact: string;
  status: Status;
}

export const initialState = {
  randomCatFact: '',
  status: Status.LOADING,
};

export interface fetchFactType {
  fact: string;
  length: number;
}
