import axios from 'axios';

export const axiosDog = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random',
});
