import React from 'react';

const DiapositivaFundamento = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-900 to-blue-800 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Fundamento Teórico
      </h1>
      
      <div className="flex flex-grow animate-fade-in">
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-2 gap-6 flex-grow">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-col animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Estrategia Digital Nacional</h2>
              <div className="flex-grow flex">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-200 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="w-2/3">
                  <p>La digitalización en la administración pública no solo moderniza los procesos, sino que también incrementa la transparencia y eficiencia en la prestación de servicios (SFP, 2023).</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-col animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Modelo de Reingeniería</h2>
              <div className="flex-grow flex">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-200 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="w-2/3">
                  <p>La reingeniería de procesos en la gestión pública mejora la eficiencia administrativa, reduciendo redundancias y optimizando recursos (Pérez Andrés et al., 2017).</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-col animate-slide-in-left delay-200">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Desarrollo de Competencias</h2>
              <div className="flex-grow flex">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-200 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="w-2/3">
                  <p>La capacitación tecnológica del personal es esencial para superar la resistencia al cambio y asegurar la sostenibilidad de la transformación digital (Ángeles Hernández, 2014).</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-col animate-slide-in-right delay-200">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Marco Normativo</h2>
              <div className="flex-grow flex">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-200 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div className="w-2/3">
                  <p>El proyecto se alinea con la Ley General de Transparencia y Acceso a la Información Pública, que exige que los registros sean precisos, accesibles y actualizados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaFundamento;