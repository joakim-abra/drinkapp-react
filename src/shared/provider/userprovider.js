import { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  return (
    <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
      {children}
    </UserContext.Provider>
  );
};