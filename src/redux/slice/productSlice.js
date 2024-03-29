import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const res = await axios.get(
      "https://dummyjson.com/products?limit=100&skip=0"
    );
    const data = await res.data.products;

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
});

export const { setProduct, singleProduct } = productSlice.actions;

export default productSlice.reducer;
