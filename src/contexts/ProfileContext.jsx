import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [fotoPerfil, setFotoPerfil] = useState(null); // inicia vazio

  return (
    <ProfileContext.Provider value={{ fotoPerfil, setFotoPerfil }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}