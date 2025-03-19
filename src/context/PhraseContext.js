import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

// Crear el contexto
const PhraseContext = createContext();

// Proveedor del contexto
export const PhraseProvider = ({ children }) => {
  const [phrases, setPhrases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para agregar una frase
  const addPhrase = useCallback((phrase) => {
    setPhrases((prevPhrases) => [...prevPhrases, phrase]);
  }, []);

  // Función para eliminar una frase
  const removePhrase = useCallback((phraseToRemove) => {
    setPhrases((prevPhrases) => prevPhrases.filter((p) => p !== phraseToRemove));
  }, []);

  // Filtrar frases según el término de búsqueda
  const filteredPhrases = useMemo(() => {
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [phrases, searchTerm]);

  return (
    <PhraseContext.Provider value={{ phrases, addPhrase, removePhrase, searchTerm, setSearchTerm, filteredPhrases }}>
      {children}
    </PhraseContext.Provider>
  );
};

// Hook para usar el contexto
export const usePhraseContext = () => {
  return useContext(PhraseContext);
};
