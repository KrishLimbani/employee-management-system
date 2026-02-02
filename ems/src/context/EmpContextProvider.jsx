import React, {useEffect, useState } from 'react'
import empContext from './Empcontext'

const EmpContextProvider = ({children}) => {
    const [emp, setEmp] = useState(()=>{
      const savedEmp = localStorage.getItem('emp')
      return savedEmp ? JSON.parse(savedEmp) : []
    })

    useEffect(()=>{
      localStorage.setItem('emp', JSON.stringify(emp))
    },[emp])

    
  return (
    <empContext.Provider value={{emp, setEmp}}>
        {children}
    </empContext.Provider>
  )
}

export default EmpContextProvider