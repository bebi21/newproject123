import axios from "axios";
export default {
  checkRegister: async (username, email) => {
    const response = await axios.get(import.meta.env.VITE_HOST_USER);
    let users = response.data;
    let check = users.find(
      (item) => item.email == email || item.username == username
    );
    return check;
  },
  register: async (data) => {
    return await axios.post(import.meta.env.VITE_HOST_USER, data);
  },
  checkLogin: async (name) => {
    return await axios.get(
      `${import.meta.env.VITE_HOST_USER}?username=${name}`
    );
  },
};
