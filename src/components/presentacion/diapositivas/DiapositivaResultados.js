import React from 'react';

const DiapositivaResultados = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-800 to-cyan-700 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Presentación de Resultados
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-2 gap-8 flex-grow">
            {/* Gráfico 1 */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm animate-fade-in delay-100">
              <h2 className="text-xl font-bold mb-4 text-center">Digitalización de Registros</h2>
              <div className="flex-grow bg-black bg-opacity-20 rounded-lg p-4 flex justify-center items-center">
                {/* Simulación de gráfico de barras */}
                <div className="flex items-end space-x-16 h-56">
                  <div className="flex flex-col items-center">
                    <div className="w-24 bg-red-400 rounded-t-lg transition-all duration-1000" style={{ height: '15px' }}></div>
                    <div className="w-full text-center mt-2">
                      <p className="font-medium">Meta Inicial</p>
                      <p className="text-sm opacity-80">5%</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 bg-green-400 rounded-t-lg transition-all duration-1000" style={{ height: '45px' }}></div>
                    <div className="w-full text-center mt-2">
                      <p className="font-medium">Logro</p>
                      <p className="text-sm opacity-80">15%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gráfico 2 */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm animate-fade-in delay-200">
              <h2 className="text-xl font-bold mb-4 text-center">Reducción de Tiempos de Respuesta</h2>
              <div className="flex-grow bg-black bg-opacity-20 rounded-lg p-4 flex justify-center items-center">
                {/* Simulación de gráfico de línea */}
                <div className="relative w-full h-56">
                  {/* Eje Y */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between items-end pr-2">
                    <span className="text-xs">25%</span>
                    <span className="text-xs">20%</span>
                    <span className="text-xs">15%</span>
                    <span className="text-xs">10%</span>
                    <span className="text-xs">0%</span>
                  </div>
                  
                  {/* Eje X */}
                  <div className="absolute left-12 right-0 bottom-0 flex justify-between">
                    <span className="text-xs">Mes 1</span>
                    <span className="text-xs">Mes 2</span>
                    <span className="text-xs">Mes 3</span>
                    <span className="text-xs">Mes 4</span>
                  </div>
                  
                  {/* Área del gráfico */}
                  <div className="absolute left-12 right-0 top-0 bottom-4">
                    <svg width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <polyline
                        points="0,190 100,160 200,120 300,80"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="3"
                      />
                      {/* Puntos */}
                      <circle cx="0" cy="190" r="4" fill="#60A5FA" />
                      <circle cx="100" cy="160" r="4" fill="#60A5FA" />
                      <circle cx="200" cy="120" r="4" fill="#60A5FA" />
                      <circle cx="300" cy="80" r="4" fill="#60A5FA" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resultados Cualitativos */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm animate-fade-in delay-300">
              <h2 className="text-xl font-bold mb-4">Resultados Cualitativos</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Mejor organización de datos con estructura estandarizada y nomenclaturas uniformes</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Aumento de competencias digitales en el 40% del personal mediante capacitación</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Desarrollo de un prototipo funcional de sistema de seguimiento de solicitudes</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Fomento de una cultura de mejora continua y actitud colaborativa en el equipo</p>
                </li>
              </ul>
            </div>
            
            {/* Logros */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm animate-fade-in delay-400">
              <h2 className="text-xl font-bold mb-4">Logros Principales</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-900 bg-opacity-40 p-3 rounded-lg">
                  <h3 className="font-semibold text-cyan-200">Digitalización</h3>
                  <p className="text-sm mt-1">Digitalización del 15% de registros críticos, permitiendo acceso más rápido y seguro a la información.</p>
                </div>
                <div className="bg-cyan-900 bg-opacity-40 p-3 rounded-lg">
                  <h3 className="font-semibold text-cyan-200">Capacitación</h3>
                  <p className="text-sm mt-1">Formación de 5 colaboradores en herramientas digitales básicas, con 1 alcanzando nivel avanzado.</p>
                </div>
                <div className="bg-cyan-900 bg-opacity-40 p-3 rounded-lg">
                  <h3 className="font-semibold text-cyan-200">Tiempo de Respuesta</h3>
                  <p className="text-sm mt-1">Reducción del 10% en los tiempos de atención a solicitudes, beneficiando directamente a la comunidad.</p>
                </div>
                <div className="bg-cyan-900 bg-opacity-40 p-3 rounded-lg">
                  <h3 className="font-semibold text-cyan-200">Estandarización</h3>
                  <p className="text-sm mt-1">Creación de protocolos y formatos uniformes para la gestión y organización de información.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaResultados;