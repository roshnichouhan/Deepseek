"use client"; // Needed if using hooks in Next.js 13 App Router

import React, { createContext, useContext } from "react";
import { useUser } from "@clerk/nextjs";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  let user = null;
  if (publishableKey) {
    try {
      // useUser will throw if no ClerkProvider, so guard with try
      ({ user } = useUser());
    } catch {}
  }

  const value = { user };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
