import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AddEmp from './components/Forms/AddEmp'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    {/* <EmpDashboard/> */}
    {/* <AdminDashboard/> */}
    {/* <AddEmp/> */}
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="admin" element={<AdminDashboard/>}></Route>
      <Route path="admin/addEmp" element={<AddEmp/>}></Route>
      
    </Routes>
    </>
  )
}

export default App
