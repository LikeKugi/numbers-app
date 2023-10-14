import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchNumbers = createAsyncThunk(
  'numbers/fetchNumbers',
  async ({queryArg, signal}:{ queryArg: string, signal: AbortSignal }, thunkAPI) => {
    try {
      const res = await axios.get(`http://numbersapi.com/${queryArg}` ,{
        signal
      } );
      return await res.data;
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.message)
    }
  }
);
