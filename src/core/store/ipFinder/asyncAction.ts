import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getIpParams, ipType } from './types';

export const fetchIp = createAsyncThunk<ipType, getIpParams>(
  'ip/fetchIp',
  async (params) => {
    const { ip } = params;

    const { data } = await axios.get<ipType>(
      `http://ip-api.com/json/${ip}?fields=16447`
    );

    return data;
  }
);
