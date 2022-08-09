import { Status } from '../types';

export interface BreedType {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface factProps {
  randomCatFact: string;
  breeds: BreedType[];
  status: Status;
}

export interface FetchFactType {
  fact: string;
  length: number;
}
