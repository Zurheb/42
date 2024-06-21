import React, { createContext, useState } from 'react'

export const TestApi = createContext({});

export const TestContext = ({children}) => {
  const[theme,setTheme]=useState("light")
  const ToggleTheme=()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <TestApi.Provider value={{theme,ToggleTheme}}>
        {children}
    </TestApi.Provider>
  )
}

export default TestContext