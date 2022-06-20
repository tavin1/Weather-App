import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './helpers/initialData';
import Card from './comp/card/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSuubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };
  return (
    <div className="flex-col flex w-full h-screen items-center justify-center">
      <form onSubmit={handleSuubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 rounded-lg p-3 ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
