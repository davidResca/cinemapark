import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';

export const UserContext = createContext(false);
const userContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user)=>{
      setUser(user);
    })
    return unsuscribe;
  }, []);

  if(user === false) return (<p>Loading app...</p>)

  return (
    <div>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </div>
  );
};

export default userContextProvider;

export const useUserContext = () => useContext(UserContext);
