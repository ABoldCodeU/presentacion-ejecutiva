import React from 'react';
import SeccionDiapositiva from './SeccionDiapositiva';

const DiapositivaContenido = ({ irADiapositiva }) => {
  const temas = [
    { titulo: 'Planteamiento del Problema', index: 2 },
    { titulo: 'Propuesta de Solución y Objetivos', index: 3 },
    { titulo: 'Fundamento Teórico', index: 4 },
    { titulo: 'Metodología y Acciones Desarrolladas', index: 5 },
    { titulo: 'Presentación de Resultados', index: 6 },
    { titulo: 'Beneficios Sociales', index: 7 },
    { titulo: 'Conclusiones y Reflexión', index: 8 }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-blue-400 pb-4 animate-slide-in-left">
        Contenido
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-1/2 pr-8 flex items-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm w-full animate-slide-in-left delay-200">
            <ul className="space-y-6">
              {temas.map((tema, index) => (
                <li 
                  key={index} 
                  className="flex items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300"
                  onClick={() => irADiapositiva(tema.index)}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <span className="text-xl">{tema.titulo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="w-1/2 flex items-center justify-center animate-slide-in-right">
          <div className="w-full h-4/5 bg-gray-200 bg-opacity-20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p className="mt-4 text-xl text-white opacity-70">Visualización del Proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaContenido;