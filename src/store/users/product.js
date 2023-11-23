import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiProduct from "../../components/api/api.product";
const initialState = {
  value: [],
};

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await apiProduct.listProduct();

    return response.data;
  }
);
export const add = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {

    
  }
);
export const listProduct = createSlice({
  name: "userManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // pending là đang đưa vào xử lí
      //fulfilled alf thành công
      //reject alf lỗi
      .addCase(fetchUserById.pending, (state, action) => {
        //đưa vào xử lí
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        //xử lý thành công
        state.value = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        //xử lý thất bại
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = listProduct.actions;

export default listProduct.reducer;
