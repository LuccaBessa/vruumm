import React from "react";
import { TokenProvider } from "./token";

const ContextProvider: React.FC = ({ children }: any) => {
  return (
    <>
      <TokenProvider>
        {children}
      </TokenProvider>
    </>
  );
};

export { ContextProvider };