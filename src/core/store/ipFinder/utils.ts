import { PayloadAction } from '@reduxjs/toolkit';
import { IpType } from './types';

export const returnNewIp = (action: PayloadAction<IpType>) => ({
  city: action.payload.city,
  country: action.payload.country,
  countryCode: action.payload.countryCode,
  region: action.payload.region,
  regionName: action.payload.regionName,
  status: action.payload.status,
  zip: action.payload.zip,
});
