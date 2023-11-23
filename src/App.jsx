import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Nhap from "./components/Nhap/Nhap";
import Footer from "./components/Footer/Footer";
import Section from "./components/section-1/Section";
import Layout from "./components/Layout/Layout";
import Section2 from "./components/section-2/Section2";
import "./App.css";
import { storage } from "./config/firebase";

function App() {
  return (
    <>
      {/* <Header />
      <Section />
      <Footer /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Section2 />} />  */}
          <Route path="/nhap" element={<Nhap />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
