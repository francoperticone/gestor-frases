import React from "react";
import { usePhraseContext } from "../context/PhraseContext";

const PhraseList = () => {
  const { filteredPhrases, removePhrase } = usePhraseContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {filteredPhrases.length > 0 ? (
        filteredPhrases.map((phrase: string, index: number) => (
          <div
            key={index}
            className="bg-gray-100 p-4 flex justify-between items-center rounded-lg shadow-md"
          >
            <span className="text-gray-700">{phrase}</span>
            <button
              onClick={() => removePhrase(phrase)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ✖
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-2">No hay frases</p>
      )}
    </div>
  );
};

export default PhraseList;
