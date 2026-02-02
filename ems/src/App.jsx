import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AddEmp from './components/Forms/AddEmp'
import { Route, Routes } from 'react-router-dom'
import empContext from './context/Empcontext'
import EmpContextProvider from './context/EmpContextProvider'
import EmpList from './components/Other/EmpList'

function App() {  

  return (
    <EmpContextProvider>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="admin" element={<AdminDashboard/>}></Route>
      <Route path="admin/addEmp" element={<AddEmp/>}></Route>
    </Routes>
    {/* <EmpList/> */}
    </EmpContextProvider>
  )
}

export default App
