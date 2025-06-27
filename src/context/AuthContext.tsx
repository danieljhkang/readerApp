import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

//children: React.ReactNode is destructuring; all children must be react.reactnode
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState(undefined);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
