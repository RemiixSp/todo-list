import { Status } from '../types';

export interface breedType {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface factProps {
  randomCatFact: string;
  breeds: breedType[];
  status: Status;
}

export const initialState: factProps = {
  randomCatFact: '',
  breeds: [],
  status: Status.LOADING,
};

export interface fetchFactType {
  fact: string;
  length: number;
}
