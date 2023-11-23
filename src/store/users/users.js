import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userManagenment = createSlice({
  name: "userManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   // pending là đang đưa vào xử lí
    //   //fulfilled alf thành công
    //   //reject alf lỗi
    //   .addCase(getAllProduct.pending, (state, action) => {
    //     //đưa vào xử lí
    //   })
    //   .addCase(getAllProduct.fulfilled, (state, action) => {
    //     //xử lý thành công
    //     state.value.push(action.payload);
    //   })
    //   .addCase(getAllProduct.rejected, (state, action) => {
    //     //xử lý thất bại
    //     state.error = action.error;
    //   });
  },
});

// Action creators are generated for each case reducer function
export const {} = userManagenment.actions;

export default userManagenment.reducer;
