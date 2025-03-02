import React, { useState, useEffect } from 'react';

// Definir estilos de animación para el CSS global
const keyframes = `
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-pulse {
  animation: pulse 3s infinite;
}

.animate-float {
  animation: float 6s infinite ease-in-out;
}

.animate-float-delayed {
  animation: float-delayed 5s infinite ease-in-out;
  animation-delay: 2s;
}
`;

const DiapositivaResultados = () => {
  // Estado para controlar las animaciones progresivas
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    digitalizacion: 0,
    capacitacion: 0,
    reduccionTiempo: 0,
    sistemaSegui: 0
  });

  // Datos para gráficos y resultados
  const resultados = {
    digitalizacion: {
      metaInicial: 5,
      logrado: 15,
      totalUsuarios: 2854
    },
    tiemposRespuesta: [
      { mes: 'Mes 1', antes: 14, despues: 14 },
      { mes: 'Mes 2', antes: 14, despues: 13 },
      { mes: 'Mes 3', antes: 14, despues: 11 },
      { mes: 'Mes 4', antes: 14, despues: 10.5 }
    ]
  };

  // Efecto para iniciar animaciones cuando el componente se monta
  useEffect(() => {
    setIsVisible(true);
    
    // Animación de contadores (más sutil)
    const duration = 1500; // 1.5 segundos de duración
    const interval = 30; // Actualizar cada 30ms
    const steps = duration / interval;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        digitalizacion: Math.round(progress * resultados.digitalizacion.logrado),
        capacitacion: Math.round(progress * 80),
        reduccionTiempo: Math.round(progress * 25),
        sistemaSegui: Math.round(progress * 30)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [resultados.digitalizacion.logrado]);

  // Cálculo de porcentaje de mejora para el gráfico de tiempos
  const calcularMejora = (valor, indice) => {
    if (indice === 0) return 0;
    const mejora = ((resultados.tiemposRespuesta[0].despues - valor) / resultados.tiemposRespuesta[0].despues) * 100;
    return mejora > 0 ? mejora : 0;
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-900 to-cyan-700 text-white p-8 flex flex-col overflow-hidden">
      {/* Estilos globales para animaciones */}
      <style>{keyframes}</style>
      
      {/* Header con branding y título */}
      <div className="flex justify-between items-center mb-6">
        <div className={`flex items-center space-x-4 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="h-14 w-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse" style={{animationDuration: '3s'}}>
            <img 
              src="https://github.com/ABoldCodeU/imagenes-para-proyectos/blob/main/imagenes/tlal.png?raw=true"
              alt="Tlalpujahua Pueblo Mágico"
              className="h-10 w-10 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Presentación de Resultados
          </h1>
        </div>
        <div className={`bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <p>Estadía Profesional</p>
          <p className="font-semibold">Desarrollo Social - Tlalpujahua</p>
        </div>
      </div>
      
      {/* Indicadores principales */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { titulo: 'Digitalización', valor: counters.digitalizacion, meta: resultados.digitalizacion.metaInicial, color: 'from-blue-400 to-cyan-300', icon: '📄' },
          { titulo: 'Capacitación', valor: counters.capacitacion, meta: 60, color: 'from-green-400 to-teal-300', icon: '👥' },
          { titulo: 'Reducción Tiempo', valor: counters.reduccionTiempo, meta: 15, color: 'from-purple-400 to-pink-300', icon: '⏱️' },
          { titulo: 'Sistema Seguim.', valor: counters.sistemaSegui, meta: 50, color: 'from-yellow-400 to-orange-300', icon: '📊' }
        ].map((item, index) => (
          <div 
            key={index}
            className={`bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{item.titulo}</h3>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="flex items-end space-x-2">
              <span className="text-3xl font-bold">{item.valor}%</span>
              <span className="text-sm text-gray-300">meta: {item.meta}%</span>
            </div>
            <div className="w-full h-2 bg-black bg-opacity-30 rounded-full mt-2 overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                style={{ width: `${item.valor}%`, transitionDelay: `${500 + index * 100}ms` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-8 flex-grow">
        {/* Gráfico 1: Digitalización de Registros */}
        <div 
          className={`bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Digitalización de Registros</h2>
            <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-medium text-white">
              +10% vs meta
            </span>
          </div>
          
          <div className="bg-blue-800 rounded-lg p-6 flex justify-center relative h-64">
            {/* Líneas de referencia y etiquetas */}
            <div className="absolute inset-0 flex flex-col justify-between px-6">
              {[20, 15, 10, 5, 0].map((value) => (
                <div key={value} className="flex items-center h-0">
                  <span className="text-xs text-gray-300 absolute -left-1">{value}%</span>
                  <div className="w-full border-t border-white border-opacity-20" style={{borderWidth: '1px'}}></div>
                </div>
              ))}
            </div>
            
            {/* Contenedor de barras */}
            <div className="flex items-end justify-center space-x-24 z-10 w-full h-full pt-6">
              {/* Barra Meta Inicial */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div 
                    className="w-20 rounded-t-lg transition-all duration-1000 ease-out relative"
                    style={{ 
                      height: isVisible ? `${(resultados.digitalizacion.metaInicial / 20) * 200}px` : '0px',
                      backgroundColor: '#ff8e8e'
                    }}
                  >
                    {/* Etiqueta de porcentaje */}
                    <div className="absolute -top-6 w-full text-center">
                      <span className="text-white text-sm font-medium">{resultados.digitalizacion.metaInicial}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-white">Meta Inicial</span>
                </div>
              </div>
              
              {/* Barra Logro Actual */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div 
                    className="w-20 rounded-t-lg transition-all duration-1000 ease-out relative"
                    style={{ 
                      height: isVisible ? `${(resultados.digitalizacion.logrado / 20) * 200}px` : '0px',
                      backgroundColor: '#7fffb6',
                      transitionDelay: '300ms'
                    }}
                  >
                    {/* Etiqueta de porcentaje */}
                    <div className="absolute -top-6 w-full text-center">
                      <span className="text-white text-sm font-medium">{resultados.digitalizacion.logrado}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-white">Logro Actual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gráfico 2: Reducción de Tiempos de Respuesta */}
        <div 
          className={`bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Reducción de Tiempos de Respuesta</h2>
            <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm font-medium">
              -{Math.round((resultados.tiemposRespuesta[0].despues - resultados.tiemposRespuesta[3].despues) / resultados.tiemposRespuesta[0].despues * 100)}% tiempo
            </span>
          </div>
          
          <div className="flex-grow bg-black bg-opacity-20 rounded-lg p-4 relative h-64">
            {/* Gráfico de línea */}
            <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="none" className="overflow-visible">
              {/* Ejes y líneas de guía */}
              <g className="grid">
                {[0, 1, 2, 3, 4].map((val, i) => (
                  <line 
                    key={`gridY-${i}`}
                    x1="40" 
                    y1={40 + i * 40} 
                    x2="380" 
                    y2={40 + i * 40} 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3].map((val, i) => (
                  <line 
                    key={`gridX-${i}`}
                    x1={40 + i * 110} 
                    y1="40" 
                    x2={40 + i * 110} 
                    y2="200" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="1"
                  />
                ))}
              </g>
              
              {/* Etiquetas de ejes */}
              <g className="labels text-xs">
                {[20, 15, 10, 5, 0].map((val, i) => (
                  <text 
                    key={`labelY-${i}`}
                    x="35" 
                    y={45 + i * 40} 
                    textAnchor="end" 
                    fill="white" 
                    fontSize="10"
                  >{val}</text>
                ))}
                {resultados.tiemposRespuesta.map((item, i) => (
                  <text 
                    key={`labelX-${i}`}
                    x={40 + i * 110} 
                    y="215" 
                    textAnchor="middle" 
                    fill="white" 
                    fontSize="10"
                  >{item.mes}</text>
                ))}
              </g>
              
              {/* Línea "Antes" */}
              <path
                d={`M40,${200 - resultados.tiemposRespuesta[0].antes * 8} ${resultados.tiemposRespuesta.map((item, i) => `L${40 + i * 110},${200 - item.antes * 8}`).join(' ')}`}
                fill="none"
                stroke="#8884d8"
                strokeWidth="3"
                strokeDasharray={isVisible ? "none" : "5,5"}
                opacity={isVisible ? 1 : 0.5}
                className="transition-all duration-1000"
                style={{ transitionDelay: '800ms' }}
              />
              
              {/* Línea "Después" con animación */}
              <path
                d={`M40,${200 - resultados.tiemposRespuesta[0].despues * 8} ${resultados.tiemposRespuesta.map((item, i) => `L${40 + i * 110},${200 - item.despues * 8}`).join(' ')}`}
                fill="none"
                stroke="#82ca9d"
                strokeWidth="3"
                strokeDasharray={isVisible ? "none" : "1000"}
                strokeDashoffset={isVisible ? "0" : "1000"}
                className="transition-all duration-1500 ease-out"
                style={{ transitionDelay: '1200ms' }}
              />
              
              {/* Puntos "Después" */}
              {resultados.tiemposRespuesta.map((item, i) => (
                <circle 
                  key={`pointAfter-${i}`}
                  cx={40 + i * 110} 
                  cy={200 - item.despues * 8} 
                  r="5"
                  fill="#82ca9d"
                  className={`transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                  style={{ transitionDelay: `${1500 + i * 200}ms` }}
                />
              ))}
              
              {/* Etiquetas de mejora */}
              {resultados.tiemposRespuesta.map((item, i) => (
                <g 
                  key={`improvement-${i}`}
                  className={`transition-all duration-500 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${1800 + i * 200}ms` }}
                >
                  {i > 0 && (
                    <text 
                      x={40 + i * 110} 
                      y={200 - item.despues * 8 - 15}
                      textAnchor="middle" 
                      fill="#82ca9d" 
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {calcularMejora(item.despues, i).toFixed(1)}%
                    </text>
                  )}
                </g>
              ))}
              
              {/* Leyenda */}
              <g className="legend" transform="translate(260, 40)">
                <rect x="0" y="0" width="120" height="40" fill="rgba(0,0,0,0.3)" rx="4" />
                <circle cx="15" cy="15" r="4" fill="#8884d8" />
                <text x="25" y="18" fill="white" fontSize="10">Antes</text>
                <circle cx="15" cy="30" r="4" fill="#82ca9d" />
                <text x="25" y="33" fill="white" fontSize="10">Después</text>
              </g>
            </svg>
          </div>
        </div>
        
        {/* Resultados Cualitativos */}
        <div 
          className={`bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">📋</span>
            Resultados Cualitativos
          </h2>
          <ul className="space-y-4">
            {[
              { text: 'Mejor organización de datos con estructura estandarizada y nomenclaturas uniformes', icon: '📁' },
              { text: 'Aumento de competencias digitales en el 40% del personal mediante capacitación', icon: '🧠' },
              { text: 'Desarrollo de un prototipo funcional de sistema de seguimiento de solicitudes', icon: '🔍' },
              { text: 'Fomento de una cultura de mejora continua y actitud colaborativa en el equipo', icon: '🤝' }
            ].map((item, index) => (
              <li 
                key={index} 
                className={`flex items-start bg-black bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <span className="text-xl mr-3 mt-1">{item.icon}</span>
                <p className="text-sm lg:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Logros Principales */}
        <div 
          className={`bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">🏆</span>
            Logros Principales
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { 
                titulo: 'Digitalización', 
                contenido: 'Digitalización del 15% de registros críticos, permitiendo acceso más rápido y seguro a la información.', 
                icono: '📄', 
                color: 'from-blue-600 to-cyan-600'
              },
              { 
                titulo: 'Capacitación', 
                contenido: 'Formación de 5 colaboradores en herramientas digitales básicas, con 1 alcanzando nivel avanzado.', 
                icono: '👨‍💻', 
                color: 'from-green-600 to-teal-600'
              },
              { 
                titulo: 'Tiempo de Respuesta', 
                contenido: 'Reducción del 25% en los tiempos de atención a solicitudes, beneficiando directamente a la comunidad.', 
                icono: '⏱️', 
                color: 'from-purple-600 to-pink-600'
              },
              { 
                titulo: 'Estandarización', 
                contenido: 'Creación de protocolos y formatos uniformes para la gestión y organización de información.', 
                icono: '📋', 
                color: 'from-yellow-600 to-orange-600'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-lg p-4 transform transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'} ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`} 
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-white text-lg">{item.titulo}</h3>
                  <span className="text-2xl">{item.icono}</span>
                </div>
                <p className="text-sm mt-2 text-white">{item.contenido}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer con información de contacto */}
      <div 
        className={`mt-8 flex justify-between items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        style={{ transitionDelay: '1100ms' }}
      >
        <div className="flex items-center space-x-4">
          <img 
            src="https://github.com/ABoldCodeU/imagenes-para-proyectos/blob/main/imagenes/tlal_gob.png?raw=true"
            alt="Gobierno Tlalpujahua"
            className="h-10 object-contain"
          />
          <img
            src="https://github.com/ABoldCodeU/imagenes-para-proyectos/blob/main/imagenes/uveg_logo.jpg?raw=true"
            alt="UVEG"
            className="h-10 object-contain"
          />
        </div>
        <div className="text-right">
          <p className="text-sm opacity-80">Desarrollado por</p>
          <p className="text-base font-medium">Alfonso Boldo</p>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaResultados;