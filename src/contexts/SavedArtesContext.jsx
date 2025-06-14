import { createContext, useContext, useState, useEffect } from 'react';

const SavedArtesContext = createContext();

export function SavedArtesProvider({ children }) {
  const [savedArtes, setSavedArtes] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('artesSalvas');
    if (stored) {
      try {
        setSavedArtes(JSON.parse(stored));
      } catch {
        setSavedArtes([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('artesSalvas', JSON.stringify(savedArtes));
  }, [savedArtes]);

  const toggleArte = (arte) => {
    const exists = savedArtes.some(a => a.id === arte.id);
    if (exists) {
      setSavedArtes(prev => prev.filter(a => a.id !== arte.id));
    } else {
      setSavedArtes(prev => [...prev, arte]);
    }
  };

  const removerArte = (id) => {
    setSavedArtes(prev => prev.filter(a => a.id !== id));
  };

  const limparTodas = () => {
    setSavedArtes([]);
  };

  return (
    <SavedArtesContext.Provider value={{ savedArtes, toggleArte, removerArte, limparTodas }}>
      {children}
    </SavedArtesContext.Provider>
  );
}

export const useSavedArtes = () => useContext(SavedArtesContext);