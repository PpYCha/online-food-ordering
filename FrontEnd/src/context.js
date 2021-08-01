import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import dataStore from "./data";

const url = require("./data.json");
// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [stores, setStores] = useState([]);

  // const fetchStores = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${url}${searchTerm}`);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchStores();
  // }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        stores,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
