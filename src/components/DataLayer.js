import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//To access DataLayer (To get a value from DataLayer or dispatch an action to it)
export const useDataLayerValue = () => useContext(DataLayerContext);
