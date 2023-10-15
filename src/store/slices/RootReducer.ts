import { combineReducers } from '@reduxjs/toolkit';
import { NumbersReducer } from '@store/slices/numbersSlice';
import { NumberReducer } from '@store/slices/numberSlice';
import { QueryReducer } from '@store/slices/querySlice';

export const RootReducer = combineReducers({
    numbers: NumbersReducer,
    number: NumberReducer,
    query: QueryReducer,
})
