import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signup',
  async (obj, { rejectWithValue }) => {
    const responce = await axios.post('/users/signup', { ...obj });
    setAuthHeader(responce.data.token);
    return responce.data;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (obj, { rejectWithValue }) => {
    const responce = await axios.post('/users/login', { ...obj });
    setAuthHeader(responce.data.token);
    return responce.data;
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    const responce = await axios.post('/users/logout');
    clearAuthHeader();
    return responce.data;
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token === null) {
      return rejectWithValue();
    }

    setAuthHeader(state.auth.token);

    const responce = await axios.get('/users/current');
    console.log(responce);
    return responce.data;
  }
);
