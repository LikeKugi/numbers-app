import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface IPayloadObj {
  queryArg: string,
  signal: AbortSignal,
}

export const fetchNumber = createAsyncThunk(
  'number/fetchNumber',
  async ({queryArg, signal}: IPayloadObj, thunkAPI) => {
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
)
