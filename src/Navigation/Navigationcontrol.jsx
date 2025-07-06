import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/DashboardLayout";
import Profile from "../pages/Profile";
import Help from "../pages/Help";

function Navigationcontrol() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
       <Route index element={<Home />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="help" element={<Help/>} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default Navigationcontrol;
