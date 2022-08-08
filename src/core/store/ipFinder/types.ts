import { Status } from '../types';

export interface ipType {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
}

export interface ipState {
  ipInfo: ipType;
  status: Status;
}

export const initialState: ipState = {
  ipInfo: {
    status: '',
    country: '',
    countryCode: '',
    region: '',
    regionName: '',
    city: '',
    zip: '',
  },
  status: Status.LOADING,
};

export type getIpParams = {
  ip: string;
};
