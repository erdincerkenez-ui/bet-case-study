import React, { useState } from "react";
import { BetContext } from "./Context";


const Provider = ({ children }) => {
  const [bets, setBets] = useState([]); 

  return (
    <BetContext.Provider value={{ bets, setBets }}>
      {children}
    </BetContext.Provider>
  );
};

export default Provider;
