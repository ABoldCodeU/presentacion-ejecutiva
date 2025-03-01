import React, { useState, useEffect } from 'react';

const DiapositivaContenido = ({ irADiapositiva }) => {
  // Estado para el tema activo (para interactividad)
  const [temaActivo, setTemaActivo] = useState(null);
  const [animatedBg, setAnimatedBg] = useState(0);
  
  // Efecto para animar el fondo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedBg(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // IMPORTANTE: Índices en base-0, como en la versión que funcionaba
  const temas = [
    { titulo: 'Portada', index: 0 },
    { titulo: 'Índice', index: 1 },
    { titulo: 'Planteamiento del problema', index: 2 },
    { titulo: 'Propuesta de Solución y Objetivos', index: 3 },
    { titulo: 'Fundamento Teórico', index: 4 },
    { titulo: 'Metodología y Acciones Desarrolladas', index: 5 },
    { titulo: 'Presentación de Resultados', index: 6 },
    { titulo: 'Beneficios Sociales', index: 7 },
    { titulo: 'Conclusiones y Reflexión', index: 8 }
  ];

  // Función para manejar hover en los temas
  const handleMouseEnter = (index) => {
    setTemaActivo(index);
  };

  const handleMouseLeave = () => {
    setTemaActivo(null);
  };

  // Función para manejar clic en un tema - Usando el índice exacto
  const handleClick = (index) => {
    setTemaActivo(index);
    console.log(`Navegando a diapositiva ÍNDICE: ${index}`);
    irADiapositiva(index);
  };

  return (
    <div 
      className="h-full w-full overflow-hidden" 
      style={{
        background: `linear-gradient(${animatedBg}deg, #0f172a, #1e3a8a, #3730a3, #581c87)`,
        backgroundSize: "400% 400%",
        transition: "background-position 0.5s ease"
      }}
    >
      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-blue-500 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-500 blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Contenedor principal */}
      <div className="relative h-full flex flex-col">
        {/* Barra superior con logos */}
        <div className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-md border-b border-white/10">
          <img 
            src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
            alt="UVEG Logo" 
            className="h-12 rounded shadow-lg"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300">
              CONTENIDO
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1"></div>
          </div>
          <img 
            src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
            alt="Gobierno de Tlalpujahua" 
            className="h-12 rounded shadow-lg"
          />
        </div>
        
        {/* Contenido principal */}
        <div className="flex-grow flex">
          {/* Columna izquierda - Lista de temas */}
          <div className="w-5/12 p-8">
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
              <div className="p-6 space-y-2">
                {temas.map((tema, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-3 cursor-pointer transition-all duration-300 rounded-xl
                              ${tema.index === 1 ? 'bg-white/20' : 
                              temaActivo === tema.index ? 'bg-white/10 shadow-lg' : 
                              'hover:bg-white/5'}`}
                    onMouseEnter={() => handleMouseEnter(tema.index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(tema.index)}
                  >
                    <div 
                      className={`w-10 h-10 flex items-center justify-center rounded-full mr-4 
                                shadow-lg transition-all duration-300 transform ${temaActivo === tema.index ? 'scale-110' : ''}`}
                      style={{
                        background: `linear-gradient(135deg, 
                          ${index === 0 ? '#f87171, #dc2626' : 
                           index === 1 ? '#34d399, #059669' : 
                           index === 2 ? '#fbbf24, #d97706' : 
                           index === 3 ? '#60a5fa, #2563eb' : 
                           index === 4 ? '#818cf8, #4f46e5' : 
                           index === 5 ? '#a78bfa, #7c3aed' : 
                           index === 6 ? '#f472b6, #db2777' : 
                           index === 7 ? '#fb923c, #c2410c' : 
                           '#22d3ee, #0284c7'})`
                      }}
                    >
                      <span className="font-bold text-white">{index + 1}</span>
                    </div>
                    <span className={`text-lg transition-all duration-300 ${tema.index === 1 ? 'font-bold text-white' : temaActivo === tema.index ? 'font-semibold text-white' : 'text-gray-300'}`}>
                      {tema.titulo}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Texto de ayuda */}
              <div className="px-6 py-3 bg-white/5 text-center text-sm text-purple-200 italic">
                Seleccione un tema para navegar a la sección correspondiente
              </div>
            </div>
          </div>
          
          {/* Columna derecha - Imagen grande */}
          <div className="w-7/12 p-8 flex flex-col">
            <div className="flex-grow group relative flex items-center justify-center">
              {/* Imagen con efectos */}
              <div className="relative transition-all duration-700 transform group-hover:scale-105 mx-auto">
                {/* Resplandor detrás de la imagen */}
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-30 group-hover:opacity-70 blur-xl transition-opacity duration-1000"></div>
                
                {/* Imagen principal */}
                <img 
                  src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/transformacion-digital.png" 
                  alt="Transformación Digital" 
                  className="relative w-full max-w-xl object-contain z-10 rounded-2xl p-2 bg-black/30 backdrop-blur-sm border border-white/10"
                  style={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                />
                
                {/* Círculos decorativos alrededor de la imagen */}
                <div className="absolute top-0 right-0 w-20 h-20 border-4 border-purple-500/30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-4 border-blue-500/30 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                
                {/* Título bajo la imagen */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                    Modernización Administrativa
                  </h2>
                  <p className="text-purple-200 mt-1">Área de Desarrollo Social</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón Home */}
        <div className="absolute top-24 right-8 z-10">
          <button 
            onClick={() => handleClick(0)}
            className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg"
            title="Ir a portada"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaContenido;