import { combineReducers } from '@reduxjs/toolkit';
import { NumbersReducer } from '@store/slices/numbersSlice';
import { NumberReducer } from '@store/slices/numberSlice';

export const RootReducer = combineReducers({
    numbers: NumbersReducer,
    number: NumberReducer,
})
