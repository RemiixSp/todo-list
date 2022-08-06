import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosDog } from './axiosForDogs';
import { fetcgDogType } from './types';

export const fetchDog = createAsyncThunk<fetcgDogType>(
  'dog/fetchDogStatus',
  async () => {
    const { data } = await axiosDog.get<fetcgDogType>('');

    return data;
  }
);
