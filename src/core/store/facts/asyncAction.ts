import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BreedType, FetchFactType } from './types';

export const fetchFact = createAsyncThunk<FetchFactType>(
  'facts/fetchFacts',
  async () => {
    const { data } = await axios.get<FetchFactType>(
      'https://catfact.ninja/fact?max_length=100'
    );

    return data;
  }
);

export const fetchBreeds = createAsyncThunk<BreedType[]>(
  'facts/fetchBreeds',
  async () => {
    const { data } = await axios.get('https://catfact.ninja/breeds?limit=5');
    const breeds: BreedType[] = data['data'];

    return breeds;
  }
);
