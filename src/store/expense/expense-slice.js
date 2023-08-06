import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log("addExpenseAction");
      currentSlice.expenseList.push(action.payload);
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
