import React, { createContext, useContext } from "react";

export const BetContext = createContext();

export const useBetContext = () => useContext(BetContext);
