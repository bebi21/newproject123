import React, { useState } from "react";
import "./Register.css";
import { Button, notification, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import apis from "../api/api.users";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  CheckCircleFilled,
  HeartFilled,
  WarningFilled,
} from "@ant-design/icons";
import crypto from "crypto-js";

export default function Register() {
  const count = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    cart: [],
  });
  const [api, contextHolder] = notification.useNotification();
  // antd
  const openNotificationWithIcon = (a) => {
    if (a == "Write") {
      api.info({
        message: <p style={{ color: "red" }}>ERROR </p>,
        description: <p style={{ color: "red" }}>Write all please </p>,

        icon: <WarningFilled style={{ color: "red" }} />,
      });
    } else if (a == "password") {
      api.info({
        message: <p style={{ color: "red", fontWeight: "bold" }}>ERROR </p>,
        description: (
          <p style={{ color: "red" }}>
            At least 6 characters including 1 number
          </p>
        ),
        icon: <WarningFilled style={{ color: "red" }} />,
      });
    } else if (a == "warning") {
      api.info({
        message: <p style={{ color: "red", fontWeight: "bold" }}>ERROR </p>,
        description: <p style={{ color: "red" }}>Confirm Password is Wrong</p>,
        icon: <WarningFilled style={{ color: "red" }} />,
      });
    } else if (a == "success") {
      api.info({
        message: <p style={{ color: "green", fontWeight: "bold" }}>Success </p>,
        description: <p style={{ color: "green" }}>Register Success</p>,
        icon: <CheckCircleFilled style={{ color: "green" }} />,
      });
    } else if (a == "haveUser") {
      api.info({
        message: <p style={{ color: "red", fontWeight: "bold" }}>ERROR </p>,
        description: <p style={{ color: "red" }}>Have Acount</p>,
        icon: <WarningFilled style={{ color: "red" }} />,
      });
    } else if (a == "email") {
      api.info({
        message: <p style={{ color: "red", fontWeight: "bold" }}>ERROR </p>,
        description: (
          <p style={{ color: "red" }}>
            Must contain @ and no special characters
          </p>
        ),
        icon: <WarningFilled style={{ color: "red" }} />,
      });
    }
  };

  const isPasswordValid = (password) => {
    return /^(?=.*[0-9]).{6,}$/.test(password);
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  const handleTakeValue = (e) => {
    let { name, value } = e.target;
    value = value.trim();
    setUser({ ...user, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      user.username == "" ||
      user.email == "" ||
      user.password == "" ||
      user.confirmPassword == ""
    ) {
      openNotificationWithIcon("Write");
      return;
    }

    // if (!validateEmail(user.email)) {
    //   openNotificationWithIcon("email");
    //   setUser({
    //     username: "",
    //     password: "",
    //     email: "",
    //     confirmPassword: "",
    //   });
    //   return;
    // }
    if (!isPasswordValid(user.password)) {
      openNotificationWithIcon("password");
      setUser({
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
      return;
    }
    if (user.password !== user.confirmPassword) {
      openNotificationWithIcon("warning");
      setUser({
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
    } else {
      apis.checkRegister(user.username, user.email).then((res) => {
        if (!res) {
          openNotificationWithIcon("success");
          var token = crypto.AES.encrypt(
            user.password,
            import.meta.env.VITE_KEY_TOKEN
          ).toString();
          console.log("11111", token);
          let user1 = { ...user, password: token };
          apis.register(user1);
          setUser({
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          openNotificationWithIcon("haveUser");
          setUser({
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
          });
          return;
        }
      });
    }
  };
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      {contextHolder}

      <div className="login-form">
        <section className="border-red-500 min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg w-[50vw] ">
            <div className="md:w-[100%] px-5">
              <h2 className="text-5xl font-bold text-[#002D74] text-center">
                Register
              </h2>
              <p className="text-sm mt-4 text-[#002D74]"></p>
              <form className="mt-6">
                <div className="mt-4">
                  <label className="block text-gray-700">User Name</label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Enter User Name"
                    onChange={handleTakeValue}
                    value={user.username}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="name"
                    value={user.email}
                    onChange={handleTakeValue}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleTakeValue}
                    placeholder="Enter Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                    required
                  />
                  <p className="absolute err text-blue-600 text-[14px]">
                    At least 6 characters including 1 number
                  </p>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    id="password"
                    placeholder="Enter Password"
                    minLength={6}
                    onChange={handleTakeValue}
                    value={user.confirmPassword}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={handleRegister}
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
                >
                  Register
                </button>
              </form>
              <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                <hr className="border-gray-500" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-500" />
              </div>
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Create with Google</span>
              </button>
              <div className="text-sm flex justify-between items-center mt-3">
                <p>If you have an account...</p>
                <button
                  onClick={handleClick}
                  className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
