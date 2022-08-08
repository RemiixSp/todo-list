import { Status } from '../types';

export interface fetcgDogType {
  message: string;
  status: string;
}

export interface dogState {
  dogUrl: string;
  status: Status;
}

export const initialState: dogState = {
  dogUrl: '',
  status: Status.LOADING,
};
