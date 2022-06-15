import React from 'react';
import Card from './comp/card/Card';

function App() {
  return (
    <div className="flex-col flex w-full h-screen items-center justify-center">
      <form>
        <input type="text" placeholder="Cidade" className="p-3 rounded-lg outline-none" />
        <button type="submit" className="bg-blue-600 rounded-lg p-3 ml-3 text-white font-bold">Pesquisar</button>
      </form>

      <Card />

    </div>
  );
}

export default App;
