import React, {useEffect, useState } from 'react'
import empContext from './Empcontext'

const EmpContextProvider = ({children}) => {
    const [emp, setEmp] = useState(()=>{
      const savedEmp = localStorage.getItem('emp')
      return savedEmp ? JSON.parse(savedEmp) : []
    })

    const [editingEmp, setEditingEmp] = useState(null)

    useEffect(()=>{
      localStorage.setItem('emp', JSON.stringify(emp))
    },[emp])

    
  return (
    <empContext.Provider value={{emp, setEmp, editingEmp, setEditingEmp}}>
        {children}
    </empContext.Provider>
  )
}

export default EmpContextProvider