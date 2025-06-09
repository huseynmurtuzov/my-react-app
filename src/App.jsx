import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Login from './components/Login';
import Employees from './components/Employees';
import Stores from './components/Stores';
import ManagerPage from './components/ManagerPage';
import EmployeePage from './components/EmployeePage';
import Notifications from './components/Notifications';
import AddNotification from './components/AddNotification';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/managerPage" element={<ManagerPage />} />
        <Route path="/employeePage" element={<EmployeePage />} />
        <Route path="/notifications/:id" element={<Notifications />} />
        <Route path="/add-notification/:id" element={<AddNotification />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
