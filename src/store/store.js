import { configureStore } from "@reduxjs/toolkit";
import userManagenment from "./users/users";
import listProduct from "./users/product";

export const store = configureStore({
  reducer: {
    users: userManagenment,
    product: listProduct,
  },
});
