import { INumber, INumberSlice } from '@/types/store/numberSliceType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNumber } from '@store/thunk/fetchNumber';
import { RootState } from '@store/store';

const initialState: INumberSlice = {
  number: null,
  isLoading: false,
  error: '',
}

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNumber.fulfilled.type]: (state, action: PayloadAction<INumber>) => {
      state.isLoading = false;
      state.error = '';
      state.number = action.payload;
    },
    [fetchNumber.pending.type]: (state) => {
      state.number = null;
      state.error = '';
      state.isLoading = true;
    },
    [fetchNumber.rejected.type]: (state, action: PayloadAction<string>) => {
      state.number = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export const selectIsLoadingNumber = (state: RootState) => state.number.isLoading;
export const selectErrorNumber = (state: RootState) => state.number.error;
export const selectNumber = (state: RootState) => state.number.number;

export const NumberReducer = numberSlice.reducer;
