import axios from "axios";
export default {
  listProduct: async () => {
    return await axios.get(import.meta.env.VITE_HOST_PRODUCT);
  },
};
