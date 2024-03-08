"use client";

import { createContext, useContext, useState } from "react";

const RouteContext = createContext({} as any);

function RouteProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <RouteContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      {children}
    </RouteContext.Provider>
  );
}

function useRoute() {
  const context = useContext(RouteContext);

  if (!context) alert("Anda mengakses context di luar jangkauan");

  return context;
}

export { RouteProvider, useRoute };
