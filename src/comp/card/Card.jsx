import React from 'react';

function Card() {
  return (
    <div className="bg-#fff p-6 mt-10 rounded-lg shadow-md">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">
          Florianopolis
        </span>
        <span className="text-slate-500 text-sm font-medium">
          Santa Catarina, Brasil
        </span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-2">
        <span className="text-7xl">20</span>
        <span className="text-3xl mt-2">°C</span>
      </div>

      <div className="text-center">
        <span className="block">icone</span>
        <span className="text-slate-700 font-medium">NUBLADO</span>
      </div>
    </div>
  );
}

export default Card;