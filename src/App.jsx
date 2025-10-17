import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from "AdminDashboard";
import EmployeeDashboard from "EmployeeDashboard";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import SidebarNav from "../layout/SidebarNav"


function App() {
  return (
    <BrowserRouter>
    <Header />  
      <SidebarNav />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
