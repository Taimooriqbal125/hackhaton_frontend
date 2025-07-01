import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/DashboardLayout";
import Profile from "../pages/Profile";

function Navigationcontrol() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="about" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default Navigationcontrol;
