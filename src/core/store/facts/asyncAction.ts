import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { breedType, fetchFactType } from './types';

export const fetchFact = createAsyncThunk<fetchFactType>(
  'facts/fetchFacts',
  async () => {
    const { data } = await axios.get<fetchFactType>(
      'https://catfact.ninja/fact?max_length=100'
    );

    return data;
  }
);

export const fetchBreeds = createAsyncThunk<breedType[]>(
  'facts/fetchBreeds',
  async () => {
    const { data } = await axios.get('https://catfact.ninja/breeds?limit=5');
    const breeds: breedType[] = data['data'];

    return breeds;
  }
);
