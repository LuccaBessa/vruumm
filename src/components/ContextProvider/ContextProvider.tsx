import React from "react";
import { AuthProvider, ThemeProvider } from "../../hooks";

export const ContextProvider: React.FC = ({ children }: any) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
};