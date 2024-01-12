import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  cusDetails: [],
  orderInfo: [],
  checkOutDetails: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    addToCusDetails: (state, action) => {
      state.cusDetails.push(action.payload);
    },
    addToOrderInfo: (state, action) => {
      state.orderInfo.push(action.payload);
    },
    addToCheckout: (state, action) => {
      state.checkOutDetails.push(action.payload);
    },
  },
});

export const { addToOrder, addToCusDetails, addToOrderInfo, addToCheckout } =
  orderSlice.actions;

export default orderSlice.reducer;
