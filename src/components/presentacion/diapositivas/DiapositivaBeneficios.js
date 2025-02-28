import React from 'react';

const DiapositivaBeneficios = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-green-900 to-emerald-700 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Beneficios Sociales
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-full h-full grid grid-cols-2 gap-8">
          {/* Beneficios para la Organización */}
          <div className="animate-slide-in-left">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Para la Organización
            </h2>
            
            <div className="space-y-6 h-full">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm h-2/5">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Eficiencia Operativa</h3>
                    <p>Reducción en tiempos de procesamiento y respuesta, lo que ha mejorado la capacidad del área para atender más solicitudes con los mismos recursos humanos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm h-2/5">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mejor Organización</h3>
                    <p>Control y seguimiento más preciso de los programas sociales, lo que ha permitido identificar áreas de mejora y optimizar la distribución de recursos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Beneficios para los Trabajadores */}
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Para los Trabajadores
            </h2>
            
            <div className="space-y-6 h-full">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm h-2/5">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Desarrollo Profesional</h3>
                    <p>Adquisición de nuevas habilidades digitales que han aumentado la satisfacción laboral y la empleabilidad del personal administrativo.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm h-2/5">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reducción de Estrés Laboral</h3>
                    <p>Eliminación de tareas repetitivas y mejor organización del trabajo, reduciendo la presión por entregar resultados con urgencia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen de impacto */}
          <div className="col-span-2 mt-4 animate-slide-in-bottom">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm flex">
              <div className="w-1/2 flex items-center justify-center">
                <div className="w-64 h-40 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm mt-2 block">Imagen de impacto social</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Impacto Social</h3>
                  <p>
                    La modernización administrativa ha permitido que más de 2,000 beneficiarios reciban apoyos sociales de manera más ágil y confiable, mejorando el impacto de los programas sociales en la comunidad de Tlalpujahua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaBeneficios;