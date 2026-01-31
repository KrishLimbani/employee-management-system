import React, {useState } from 'react'
import empContext from './Empcontext'

const EmpContextProvider = ({children}) => {
    const [emp, setEmp] = useState([])
  return (
    <empContext.Provider value={{emp, setEmp}}>
        {children}
    </empContext.Provider>
  )
}

export default EmpContextProvider