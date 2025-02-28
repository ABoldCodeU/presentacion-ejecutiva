import React from 'react';

const DiapositivaMetodologia = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-900 to-indigo-800 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Metodología
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-full flex flex-col justify-center">
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-white bg-opacity-30 -translate-y-1/2 rounded-full"></div>
            
            {/* Fases de la metodología */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              <div className="animate-slide-in-bottom delay-100">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    1
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl w-full">
                    <h3 className="text-xl font-bold mb-2 text-center">Diagnóstico</h3>
                    <div className="rounded-lg overflow-hidden mb-4 h-32 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-sm mt-1 block">Evaluación inicial</span>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      <li>• Análisis de procesos actuales</li>
                      <li>• Evaluación de infraestructura</li>
                      <li>• Medición de competencias</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-bottom delay-200">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    2
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl w-full">
                    <h3 className="text-xl font-bold mb-2 text-center">Diseño</h3>
                    <div className="rounded-lg overflow-hidden mb-4 h-32 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm mt-1 block">Planificación</span>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      <li>• Creación de prototipos</li>
                      <li>• Diseño de formularios</li>
                      <li>• Planificación de capacitaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-bottom delay-300">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    3
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl w-full">
                    <h3 className="text-xl font-bold mb-2 text-center">Implementación</h3>
                    <div className="rounded-lg overflow-hidden mb-4 h-32 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span className="text-sm mt-1 block">Ejecución</span>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      <li>• Digitalización piloto</li>
                      <li>• Sesiones de capacitación</li>
                      <li>• Optimización de equipos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-bottom delay-400">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    4
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl w-full">
                    <h3 className="text-xl font-bold mb-2 text-center">Evaluación</h3>
                    <div className="rounded-lg overflow-hidden mb-4 h-32 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm mt-1 block">Medición de resultados</span>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      <li>• Análisis de indicadores</li>
                      <li>• Ajustes al sistema</li>
                      <li>• Documentación de mejoras</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm animate-slide-in-bottom delay-500">
            <p className="text-center text-lg">
              Esta metodología permitió una adaptación progresiva y sostenible, minimizando la resistencia al cambio y maximizando el impacto con recursos limitados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaMetodologia;