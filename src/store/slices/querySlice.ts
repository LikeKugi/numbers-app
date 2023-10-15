import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuerySlice, QueryType } from '@/types/store/querySliceTypes';
import { RootState } from '@store/store';

const initialState: IQuerySlice = {
  type: 'trivia',
  initialNumber: 0,
  maxNumbers: 20
}
export const querySlice = createSlice({
  name: 'querySlice',
  initialState,
  reducers: {
    setQueryType: (state, action: PayloadAction<QueryType>) => {
      state.type = action.payload;
    },
    setQueryInitialNumber: (state, action: PayloadAction<number>) => {
      state.initialNumber = action.payload;
    }
  }
})

export const QueryReducer = querySlice.reducer;
export const {setQueryType, setQueryInitialNumber} = querySlice.actions;
export const selectQueryType = (state: RootState) => state.query.type;
export const selectQueryInitialNumber = (state: RootState) => state.query.initialNumber;
export const selectMaxNumbers = (state: RootState) => state.query.maxNumbers;
