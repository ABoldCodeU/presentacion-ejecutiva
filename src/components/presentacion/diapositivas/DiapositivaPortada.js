import React from 'react';

const DiapositivaPortada = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 text-white p-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Presentación Ejecutiva
        </h1>
        <h2 className="text-3xl md:text-4xl font-light mb-12 animate-fade-in-delay">
          Modernización Administrativa - Área de Desarrollo Social
        </h2>
        <div className="mt-12 bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm animate-fade-in-delay-2">
          <p className="text-xl md:text-2xl mb-6">Estadía Profesional</p>
          <p className="text-lg md:text-xl">Municipio de Tlalpujahua, Michoacán</p>
          <p className="text-lg md:text-xl">Febrero 2025</p>
        </div>
        
        {/* Área para logo o imagen */}
        <div className="mt-12 flex justify-center animate-fade-in-delay-3">
          <div className="w-40 h-40 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
            <span className="text-lg">Logo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaPortada;