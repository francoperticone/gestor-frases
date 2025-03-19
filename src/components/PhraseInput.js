import React, { useState } from "react";
import { usePhraseContext } from "../context/PhraseContext";

const PhraseInput = () => {
  const { addPhrase, setSearchTerm } = usePhraseContext();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addPhrase(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Buscar frases..."
        className="border p-2 w-full mb-2 rounded-md shadow-sm focus:ring focus:ring-blue-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Escribe una frase..."
          className="flex-grow border p-2 rounded-md shadow-sm focus:ring focus:ring-blue-300"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default PhraseInput;