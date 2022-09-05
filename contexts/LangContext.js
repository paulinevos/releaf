import React, { useState, createContext } from "react"

export const LangContext = createContext(["sw",]);

export const LangProvider = props => {
  const [lang, setLang] = useState("nl")
  return (
    <LangContext.Provider value={[lang, setLang]}>
      {props.children}
    </LangContext.Provider>
  );
}