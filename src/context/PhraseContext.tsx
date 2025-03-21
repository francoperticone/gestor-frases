import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

// Tipos del contexto
interface PhraseContextType {
  phrases: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addPhrase: (phrase: string) => void;
  removePhrase: (phrase: string) => void;
  filteredPhrases: string[];
}

// Crear el contexto con valor inicial `undefined`
const PhraseContext = createContext<PhraseContextType | undefined>(undefined);

// Tipar las props del proveedor
interface PhraseProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const PhraseProvider = ({ children }: PhraseProviderProps) => {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addPhrase = useCallback((phrase: string) => {
    setPhrases((prev) => [...prev, phrase]);
  }, []);

  const removePhrase = useCallback((phraseToRemove: string) => {
    setPhrases((prev) => prev.filter((p) => p !== phraseToRemove));
  }, []);

  const filteredPhrases = useMemo(() => {
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [phrases, searchTerm]);

  return (
    <PhraseContext.Provider
      value={{
        phrases,
        addPhrase,
        removePhrase,
        searchTerm,
        setSearchTerm,
        filteredPhrases,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const usePhraseContext = (): PhraseContextType => {
  const context = useContext(PhraseContext);
  if (!context) {
    throw new Error("usePhraseContext must be used within a PhraseProvider");
  }
  return context;
};
