/* Core */
import { createSlice } from '@reduxjs/toolkit'
import {initialState} from './state';
import { getSeriesAsync } from './thunks';
import { getSeriesFulfilledCaseReducer, getSeriesPendingCaseReducer } from './reducers';

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getSeriesAsync.pending, getSeriesPendingCaseReducer)
      .addCase(getSeriesAsync.fulfilled, getSeriesFulfilledCaseReducer)
  },
})

const {} = seriesSlice.actions;

