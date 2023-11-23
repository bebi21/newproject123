import React, { useState } from "react";
import "./Login.css";
import image1 from "../../images/menu-3.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../api/api.users";
import { Button, notification, Space } from "antd";
import { CheckCircleFilled, WarningFilled } from "@ant-design/icons";
import crypto from "crypto-js";
export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/register");
  };
  const handleTakeValue = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [mess, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (a) => {
    if (a == "warning") {
      mess.info({
        message: <p style={{ color: "red" }}>ERROR </p>,
        description: (
          <p style={{ color: "red" }}>Username or Password is Wrong </p>
        ),

        icon: <WarningFilled style={{ color: "red" }} />,
      });
    } else {
      mess.info({
        message: <p style={{ color: "green", fontWeight: "bold" }}>Success </p>,
        description: <p style={{ color: "green" }}>Register Success</p>,
        icon: <CheckCircleFilled style={{ color: "green" }} />,
      });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    apis.checkLogin(user.name).then((res) => {
      if (res.data.length != 0) {
        console.log(res.data[0].password);
        var bytes = crypto.AES.decrypt(
          res.data[0].password,
          import.meta.env.VITE_KEY_TOKEN
        );

        // Chuyển sang chuỗi gốc
        var token = bytes.toString(crypto.enc.Utf8);
        if (token == user.password) {
          openNotificationWithIcon("success");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          openNotificationWithIcon("warning");
        }
      } else {
        openNotificationWithIcon("warning");
        setUser({
          name: "",
          password: "",
        });
      }
    });
  };
  return (
    <>
      {contextHolder}
      <div className="login-form">
        <section className="border-red-500 min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
            <div className="md:w-1/2 px-5">
              <h2 className="text-4xl font-bold text-[#002D74]">Login</h2>

              <form className="mt-6">
                <div>
                  <label className="block text-gray-700">User Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter User Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    onChange={handleTakeValue}
                    value={user.name}
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    minLength={6}
                    value={user.password}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                    onChange={handleTakeValue}
                    required
                  />
                </div>
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
                >
                  Log In
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
                <span className="ml-4">Login with Google</span>
              </button>
              <div className="text-sm flex justify-between items-center mt-3">
                <p>If you don't have an account...</p>
                <button
                  onClick={handleChange}
                  className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
                >
                  Register
                </button>
              </div>
            </div>
            <div className="w-1/2  md:block hidden ">
              <img
                src={image1}
                className="rounded-2xl h-[100%]"
                alt="page img"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
