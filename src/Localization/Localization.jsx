import React, { createContext, useState } from 'react'

export const LocalizationApi = createContext({})

export const Localization = ({children}) => {

    const [language,setLanguage] = useState("uz")
  return (
    <>
    <LocalizationApi.Provider value={{language, setLanguage}}>
        {children}
    </LocalizationApi.Provider>
    </>
  )
}
