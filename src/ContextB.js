import React, { useState, createContext } from 'react'

export const RouteContext = createContext()

export const RouteProvider = ({ children }) => {
  const [status, setStatus] = useState({ name: 'Nome' })
  const alterarStatus = name => value => {
    setStatus({
      ...status,
      [name]: value
    })
  }
  return (
    <RouteContext.Provider value={{ status, alterarStatus }}>
      {children}
    </RouteContext.Provider>
  )
}