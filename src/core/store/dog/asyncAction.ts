import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetcgDogType } from './types';

export const fetchDog = createAsyncThunk<fetcgDogType>(
  'dog/fetchDogStatus',
  async () => {
    const { data } = await axios.get<fetcgDogType>(
      'https://dog.ceo/api/breeds/image/random'
    );

    return data;
  }
);
