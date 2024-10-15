import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface baseState {
  value: Boolean;
}

const initialState: baseState = { value: false };

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setIsbase: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setIsbase } = baseSlice.actions;
export const selectBase = (state: RootState) => state.base.value;

export default baseSlice.reducer;
