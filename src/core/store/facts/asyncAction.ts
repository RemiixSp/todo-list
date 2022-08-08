import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchFactType } from './types';

export const fetchFact = createAsyncThunk<fetchFactType>(
  'facts/fetchFacts',
  async () => {
    const { data } = await axios.get<fetchFactType>(
      'https://catfact.ninja/fact?max_length=100'
    );

    return data;
  }
);
