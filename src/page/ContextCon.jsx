import React, { createContext } from "react";

function ContextCon({ children }) {
  const CallContext = createContext(null);
  return <CallContext.Provider value={"Cart"}>{children}</CallContext.Provider>;
}

export default ContextCon;
