import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface counterState {
  value: number;
}

const initialState: counterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => { // async reducers
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("base/pending");
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (num: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num;
  }
);

export const { increment, decrement } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.base.value;

export default counterSlice.reducer;
