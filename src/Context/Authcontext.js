import React, { createContext, useContext, useReducer } from "react";
// create context apis

export const authContext = createContext();

export const Authlayer = ({ initialState, reducer, children }) => (
  
  <authContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </authContext.Provider>
);

/// export hooke
export const useAuthValue = () => useContext(authContext);
