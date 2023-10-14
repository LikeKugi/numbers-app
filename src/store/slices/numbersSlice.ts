import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INumbers, INumbersSlice } from '@/types/store/numbersSliseTypes';
import { fetchNumbers } from '@store/thunk/fetchNumbers';
import { RootState } from '@store/store';

const initialState: INumbersSlice = {
  numbers: {},
  isLoading: false,
  error: '',
}

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNumbers.fulfilled.type]: (state, action: PayloadAction<INumbers>) => {
      state.isLoading = false;
      state.error = '';
      state.numbers = action.payload;
    },
    [fetchNumbers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchNumbers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export const selectIsLoading = (state: RootState) => state.numbers.isLoading;
export const selectError = (state: RootState) => state.numbers.error;
export const selectNumbers = (state: RootState) => state.numbers.numbers;

export const NumbersReducer = numbersSlice.reducer;
