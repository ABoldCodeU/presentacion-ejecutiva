import React, { useState, useEffect } from 'react';

const DiapositivaProblema = () => {
  // Estado para los elementos animados
  const [animatedBg, setAnimatedBg] = useState(0);
  
  // Efecto para animar el fondo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedBg(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative text-white overflow-y-auto"
      style={{
        background: `linear-gradient(${animatedBg}deg, #991b1b, #b91c1c, #dc2626, #ef4444)`,
        backgroundSize: "400% 400%",
        transition: "background-position 0.5s ease"
      }}
    >
      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-yellow-500 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Barra superior con logos */}
      <div className="relative z-10 flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-md border-b border-white/10">
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
          alt="UVEG Logo" 
          className="h-12 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-orange-200">
            PLANTEAMIENTO DEL PROBLEMA
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-1"></div>
        </div>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
          alt="Gobierno de Tlalpujahua" 
          className="h-12 rounded shadow-lg"
        />
      </div>

      {/* Botones de navegación (diapositiva 1 y 2) */}
      <div className="absolute top-4 right-4 z-20 flex space-x-2">
        <a
          href="#diapositiva1"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg"
          title="Ir a la diapositiva 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
        </a>
        <a
          href="#diapositiva2"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg"
          title="Ir a la diapositiva 2 (Índice)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 10h16M4 14h16M4 18h16" 
            />
          </svg>
        </a>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex pt-20 pb-8 px-8">
        {/* Columna izquierda */}
        <div className="w-1/2 pr-6 flex flex-col animate-slide-in-left">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-yellow-100">Diagnóstico Inicial de la Situación</h2>
            
            <div className="space-y-6 flex-grow">
              {/* Elementos del diagnóstico con iconos */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-200 mb-2">Gestión Tradicional de Documentos</h3>
                  <p className="text-white/90">
                    Todos los registros y expedientes se encontraban en formato físico, sin implementaciones digitales ni un sistema de organización optimizado, lo que evidenció la oportunidad de modernización.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-200 mb-2">Tiempos de Respuesta Extendidos</h3>
                  <p className="text-white/90">
                    El tiempo promedio para procesar solicitudes era de aproximadamente 8 días hábiles, lo que en ocasiones generaba insatisfacción y resaltaba la necesidad de optimizar la eficiencia.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-200 mb-2">Infraestructura Tecnológica Modesta</h3>
                  <p className="text-white/90">
                    La infraestructura contaba con recursos limitados, con 2 computadoras para 7 colaboradores, conexión a internet poco consistente y ausencia de software especializado, lo que indicó la necesidad de actualización.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-200 mb-2">Desafíos en Competencias Digitales</h3>
                  <p className="text-white/90">
                    El 60% del equipo presentaba desafíos en el manejo de herramientas digitales básicas, tales como hojas de cálculo y correo electrónico, evidenciando un área de oportunidad para fortalecer dichas competencias.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-red-800/50 to-orange-800/50 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-yellow-100">Repercusiones:</h3>
              <ul className="space-y-1 pl-5">
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Procesos con tiempos extendidos que afectan la eficiencia en la entrega de servicios</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Redundancias en procesos y riesgo de errores en el registro de datos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Limitaciones en el seguimiento y evaluación del impacto de programas sociales</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Oportunidades de mejora en la rendición de cuentas y transparencia</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Desafíos en la trazabilidad y seguimiento de casos</span>
                </li>
              </ul>
            </div>
            {/* Imagen a la izquierda: reemplazo de la imagen anterior */}
            <div className="p-6 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/problemas-digitalizacion.png"
                  alt="Desafío en Digitalización" 
                  className="w-full rounded-xl object-cover bg-black/30 backdrop-blur-sm border border-white/10 p-2"
                  style={{ boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Columna derecha */}
        <div className="w-1/2 pl-6 flex flex-col animate-slide-in-right">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-6 text-yellow-100">Datos del Diagnóstico Inicial</h2>
              
              {/* Métricas con iconos */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-red-900/40 p-4 rounded-xl flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-200 mb-1 text-center">Registros en Formato Tradicional</h3>
                  <div className="text-3xl font-bold text-white">80%</div>
                </div>
                
                <div className="bg-red-900/40 p-4 rounded-xl flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-200 mb-1 text-center">Recursos Tecnológicos Disponibles</h3>
                  <div className="text-3xl font-bold text-white">33%</div>
                </div>
                
                <div className="bg-red-900/40 p-4 rounded-xl flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-800 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-200 mb-1 text-center">Desarrollo de Competencias Digitales</h3>
                  <div className="text-3xl font-bold text-white">40%</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-yellow-100">Avances Realizados:</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mapeo preliminar de procesos de ingreso y distribución de apoyos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Digitalización parcial de registros clave mediante hojas de cálculo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Capacitación inicial y actitud proactiva del personal hacia la transformación digital</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Optimización en la organización de archivos y mejora en los respaldos de datos</span>
                </div>
              </div>
              
              {/* Imagen a la derecha: imagen complementaria */}
              <div className="p-6 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <img 
                    src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/e27e5156-9ba8-4cd4-b9c5-d33106c30836.png"
                    alt="Imagen Complementaria" 
                    className="w-full rounded-xl object-cover bg-black/30 backdrop-blur-sm border border-white/10 p-2"
                    style={{ boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
                  />
                </div>
              </div>
              
              {/* Impacto en la Comunidad */}
              <div className="p-6 bg-gradient-to-r from-red-900/70 to-orange-900/70 mt-auto">
                <h3 className="text-xl font-bold mb-3 text-yellow-100">Retos en la Gestión Administrativa</h3>
                <p className="text-white/90 mb-4">
                Aunque el Área de Desarrollo Social ha implementado iniciativas valiosas y cuenta con el respaldo de la comunidad, todavía se presentan oportunidades de mejora en la organización de la información y la coordinación de procesos. La adopción de herramientas digitales y la estandarización de procedimientos podrían agilizar la entrega de apoyos y brindar una atención más oportuna a la ciudadanía.
                </p>
                <p className="text-white/80 italic text-sm border-l-4 border-yellow-500 pl-3">
                  "Este diagnóstico, realizado al inicio de las prácticas profesionales, identificó áreas con oportunidades significativas de mejora. Desde entonces, se han implementado diversas estrategias que inspiran confianza en un avance sustancial en la eficiencia y calidad de los servicios." — Diagnóstico Inicial 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaProblema;
