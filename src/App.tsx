import { PhraseProvider } from "./context/PhraseContext";
import PhraseInput from "./components/PhraseInput";
import PhraseList from "./components/PhraseList";

const App = () => {
  return (
    <PhraseProvider>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-xl bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-700">
            Gestor de Frases
          </h1>
          <PhraseInput />
          <PhraseList />
        </div>
      </div>
    </PhraseProvider>
  );
};

export default App;
