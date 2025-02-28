import React from 'react';

const SeccionDiapositiva = ({ 
  titulo, 
  children, 
  colorFondo = "from-blue-900 to-indigo-800",
  animacionTitulo = "animate-slide-in-top",
  className = "",
  bordeInferior = false
}) => {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${colorFondo} text-white p-8 flex flex-col ${className}`}>
      {titulo && (
        <h1 className={`text-4xl font-bold mb-6 ${bordeInferior ? 'border-b-2 border-blue-400 pb-4' : ''} ${animacionTitulo}`}>
          {titulo}
        </h1>
      )}
      
      <div className="flex flex-grow">
        {children}
      </div>
    </div>
  );
};

export default SeccionDiapositiva;