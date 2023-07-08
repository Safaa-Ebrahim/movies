import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {props.children}
    </LanguageContext.Provider>
  );
};