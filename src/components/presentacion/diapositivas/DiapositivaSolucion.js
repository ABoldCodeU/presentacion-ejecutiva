import React, { useState, useEffect } from 'react';

const DiapositivaSolucion = () => {
  // Estados para las animaciones y elementos interactivos
  const [angle, setAngle] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  // Efecto para rotar el fondo gradiente
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Información para cada componente de la solución con más detalles
  const componentes = [
    {
      id: 1,
      title: "Digitalización de Procesos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 
                01-2-2V5a2 2 0 
                012-2h5.586a1 1 0 
                01.707.293l5.414 5.414a1 1 0 
                01.293.707V19a2 2 0 
                01-2 2z" />
        </svg>
      ),
      items: [
        "Diseño de formularios digitales accesibles",
        "Migración gradual de datos a hojas de cálculo",
        "Creación de sistema de seguimiento centralizado",
        "Implementación de protocolos de respaldo automático"
      ],
      details: "Transformación de expedientes físicos a formatos digitales estructurados y seguros, priorizando los programas sociales más críticos y de mayor impacto en la comunidad."
    },
    {
      id: 2,
      title: "Optimización Tecnológica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 
                01-2-2V6a2 2 0 
                012-2h14a2 2 0 
                012 2v4a2 2 0 
                01-2 2M5 12a2 2 0 
                00-2 2v4a2 2 0 
                002 2h14a2 2 0 
                002-2v-4a2 2 0 
                00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      items: [
        "Mantenimiento y actualización de equipos existentes",
        "Implementación de herramientas en la nube gratuitas",
        "Uso estratégico de software de código abierto",
        "Mejora de la infraestructura de red local"
      ],
      details: "Maximizar el rendimiento de los recursos tecnológicos actuales mediante actualización de componentes críticos (SSD, RAM) y migración a sistemas operativos más ligeros como distribuciones Linux."
    },
    {
      id: 3,
      title: "Capacitación del Personal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 
                7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 
                5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 
                5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 
                1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 
                0-3.332.477-4.5 1.253" />
        </svg>
      ),
      items: [
        "Evaluación integral de competencias digitales",
        "Programa de formación escalonado por niveles",
        "Sistema de mentoría interna y acompañamiento",
        "Evaluación continua y reforzamiento periódico"
      ],
      details: "Programa de capacitación adaptado a las necesidades específicas del personal, con cursos básicos, intermedios y avanzados para reducir las brechas digitales y potenciar las habilidades existentes."
    },
    {
      id: 4,
      title: "Estandarización de Procesos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 5a1 1 0 
                011-1h14a1 1 0 
                011 1v2a1 1 0 
                01-1 1H5a1 1 0 
                01-1-1V5zM4 13a1 1 0 
                011-1h6a1 1 0 
                011 1v6a1 1 0 
                01-1 1H5a1 1 0 
                01-1-1v-6zM16 13a1 1 0 
                011-1h2a1 1 0 
                011 1v6a1 1 0 
                01-1 1h-2a1 1 0 
                01-1-1v-6z" />
        </svg>
      ),
      items: [
        "Documentación detallada de procedimientos clave",
        "Diseño e implementación de flujos de trabajo optimizados",
        "Desarrollo de formatos uniformes para cada trámite",
        "Establecimiento de indicadores de desempeño medibles"
      ],
      details: "Creación e implementación de manuales de procedimientos que establezcan claramente las responsabilidades, tiempos y criterios de calidad para cada proceso administrativo."
    }
  ];

  // Fases de implementación
  const fases = [
    {
      id: 1,
      title: "Diagnóstico y Planificación",
      duration: "Mes 1",
      tasks: [
        "Análisis detallado de procesos actuales",
        "Evaluación de competencias del personal",
        "Definición de prioridades y cronograma",
        "Asignación de responsabilidades"
      ]
    },
    {
      id: 2,
      title: "Mejoras Tecnológicas Iniciales",
      duration: "Meses 2-3",
      tasks: [
        "Optimización de equipos existentes",
        "Configuración de herramientas en la nube",
        "Instalación de software prioritario",
        "Capacitación básica inicial"
      ]
    },
    {
      id: 3,
      title: "Digitalización y Capacitación",
      duration: "Meses 3-5",
      tasks: [
        "Migración de datos prioritarios",
        "Capacitación intermedia del personal",
        "Implementación de protocolos digitales",
        "Pruebas y ajustes de procesos"
      ]
    },
    {
      id: 4,
      title: "Consolidación y Seguimiento",
      duration: "Meses 5-6",
      tasks: [
        "Evaluación de resultados iniciales",
        "Ajustes en base a retroalimentación",
        "Capacitación avanzada",
        "Documentación de lecciones aprendidas"
      ]
    }
  ];

  // Función para mostrar detalles en modal
  const showDetails = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div
      className="min-h-screen w-full overflow-y-auto relative text-white"
      style={{
        background: `linear-gradient(${angle}deg, #064e3b, #047857, #059669, #10b981)`,
        backgroundSize: '400% 400%',
        transition: 'background-position 0.5s ease'
      }}
    >
      {/* Elementos de fondo animados (círculos borrosos) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-green-300 blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-green-400 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300 blur-3xl animate-pulse"
          style={{ animationDelay: '2.2s' }}
        />
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Barra superior con logos */}
      <div className="relative z-10 flex justify-between items-center px-8 py-3 bg-black/20 backdrop-blur-md border-b border-white/10">
        <img 
          src="/api/placeholder/160/40" 
          alt="UVEG Logo" 
          className="h-10 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-white to-emerald-200">
            PROPUESTA DE SOLUCIÓN
          </h1>
          <div className="h-1 w-96 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
        </div>
        <img 
          src="/api/placeholder/160/40" 
          alt="Gobierno de Tlalpujahua" 
          className="h-10 rounded shadow-lg"
        />
      </div>

      {/* Botones de navegación (home e índice) */}
      <div className="absolute top-4 right-4 z-20 flex space-x-2">
        <button 
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg"
          title="Ir a portada"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 
                  001 1h3m10-11l2 2m-2-2v10a1 1 0 
                  01-1 1h-3m-6 0a1 1 0 
                  001-1v-4a1 1 0 
                  011-1h2a1 1 0 
                  011 1v4a1 1 0 
                  001 1m-6 0h6" />
          </svg>
        </button>
        
        <button 
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg"
          title="Ir al índice"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col pt-4 px-8 pb-12">
        {/* Banner superior con texto de introducción */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20 shadow-lg animate-fade-in">
          <p className="text-lg font-medium text-center text-emerald-100">
            Las soluciones propuestas están diseñadas para responder de manera integral a los desafíos
            identificados en el área de Desarrollo Social de Tlalpujahua, priorizando acciones inmediatas
            y planificación estratégica sostenible.
          </p>
        </div>
        
        {/* Contenido principal en filas */}
        <div className="flex mb-6 space-x-6">
          {/* Columna izquierda */}
          <div className="w-1/2 flex flex-col animate-slide-in-left">
            {/* Removido h-full para que crezca según contenido */}
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-2xl flex flex-col">
              <h2 className="text-3xl font-bold mb-4 text-center text-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 21V5a2 2 0 
                        00-2-2H7a2 2 0 
                        00-2 2v16m14 0h2m-2 0h-5m-9 
                        0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 
                        4h1m-5 10v-5a1 1 0 
                        011-1h2a1 1 0 
                        011 1v5m-4 0h4" />
                </svg>
                Componentes de la Solución
              </h2>
              
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {componentes.map((componente) => (
                  <div 
                    key={componente.id}
                    className={`bg-emerald-900/40 p-4 rounded-lg shadow-lg transform transition-all duration-300 
                      ${activeCard === componente.id
                        ? 'scale-105 bg-emerald-900/70 ring-2 ring-green-400'
                        : 'hover:scale-105 hover:bg-emerald-900/60'}`}
                    onMouseEnter={() => setActiveCard(componente.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => showDetails(componente.title, componente.details)}
                  >
                    <h3 className="text-xl font-semibold text-green-200 mb-3 flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-2 text-white font-bold">
                        {componente.id}
                      </div>
                      {componente.title}
                    </h3>
                    <ul className="text-base space-y-2 pl-3">
                      {componente.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-emerald-800/40 rounded-lg text-center">
                <p className="text-lg font-semibold text-green-100 italic">
                  Una solución integral adaptada a las necesidades y recursos locales
                </p>
              </div>
            </div>
          </div>
          
          {/* Columna derecha */}
          <div className="w-1/2 flex flex-col animate-slide-in-right">
            {/* Removido h-full y overflow-hidden para que no corte el texto */}
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl flex flex-col">
              <div className="p-5">
                <h2 className="text-3xl font-bold mb-4 text-green-100 text-center flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Solución Propuesta
                </h2>
                <div className="bg-emerald-800/30 p-4 rounded-lg mb-5 border border-emerald-600/30">
                  <p className="text-lg text-white">
                    Implementación de mejoras graduales y sostenibles en los procesos administrativos
                    del Área de Desarrollo Social, utilizando tecnologías accesibles para aumentar la
                    eficiencia en la gestión de programas sociales.
                  </p>
                </div>
                
                <div className="bg-emerald-900/30 p-4 rounded-lg mb-5">
                  <h3 className="text-2xl font-semibold text-green-200 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 
                            11-18 0 9 9 0 
                            0118 0z" />
                    </svg>
                    Objetivo General
                  </h3>
                  <p className="text-lg text-white/90">
                    Mejorar la calidad del servicio a la comunidad mediante la digitalización de procesos,
                    capacitación del personal y optimización de recursos existentes.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold text-green-200 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 
                          002 2h10a2 2 0 
                          002-2V7a2 2 0 
                          00-2-2h-2M9 5a2 2 0 
                          002 2h2a2 2 0 
                          002-2M9 5a2 2 0 
                          012-2h2a2 2 0 
                          012 2" />
                  </svg>
                  Objetivos Específicos
                </h3>
                <ul className="space-y-4 mb-5">
                  <li className="flex items-center bg-emerald-900/20 p-3 rounded-lg transform transition-all duration-300 hover:bg-emerald-900/40 hover:translate-x-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                      <span className="text-white text-xl font-bold">1</span>
                    </div>
                    <p className="text-lg">Digitalizar el 15% de los registros de beneficiarios de los programas más críticos</p>
                  </li>
                  <li className="flex items-center bg-emerald-900/20 p-3 rounded-lg transform transition-all duration-300 hover:bg-emerald-900/40 hover:translate-x-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                      <span className="text-white text-xl font-bold">2</span>
                    </div>
                    <p className="text-lg">Capacitar al 80% del personal en habilidades informáticas básicas</p>
                  </li>
                  <li className="flex items-center bg-emerald-900/20 p-3 rounded-lg transform transition-all duration-300 hover:bg-emerald-900/40 hover:translate-x-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                      <span className="text-white text-xl font-bold">3</span>
                    </div>
                    <p className="text-lg">Reducir los tiempos de respuesta en al menos un 20% en nueve meses</p>
                  </li>
                </ul>
                
                {/* Fases de implementación */}
                <div className="mb-5">
                  <h3 className="text-2xl font-semibold text-green-200 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 9l-7 7-7-7" />
                    </svg>
                    Plan de Implementación
                  </h3>
                  <div className="relative">
                    {/* Línea de tiempo */}
                    <div className="absolute left-5 top-6 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-green-600"></div>
                    <div className="space-y-6 relative">
                      {fases.map((fase) => (
                        <div key={fase.id} className="ml-12 relative">
                          {/* Marcador de fase */}
                          <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-emerald-700 shadow-lg"></div>
                          
                          {/* Contenido de fase */}
                          <div className="bg-emerald-900/20 p-3 rounded-lg hover:bg-emerald-900/30 transition-all duration-300">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-lg font-semibold text-green-200">{fase.title}</h4>
                              <span className="text-sm bg-emerald-800/60 px-2 py-1 rounded-full text-green-200">
                                {fase.duration}
                              </span>
                            </div>
                            <ul className="text-sm text-white/90 space-y-1">
                              {fase.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-emerald-700/50 px-4 py-2 rounded-lg flex items-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 
                            002-2V7a2 2 0 
                            00-2-2H5a2 2 0 
                            00-2 2v12a2 2 0 
                            002 2z" />
                    </svg>
                    <span className="font-semibold">Duración: 6 meses</span>
                  </div>
                  
                  <div className="bg-emerald-700/50 px-4 py-2 rounded-lg flex items-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 
                            2s1.343 2 3 2 3 .895 3 
                            2-1.343 2-3 2m0-8c1.11 
                            0 2.08.402 2.599 
                            1M12 8V7m0 1v8m0 
                            0v1m0-1c-1.11 
                            0-2.08-.402-2.599-1M21 
                            12a9 9 0 11-18 
                            0 9 9 0 
                            0118 0z" />
                    </svg>
                    <span className="font-semibold">Costo: Bajo</span>
                  </div>
                </div>
              </div>
              
              {/* Enfoque metodológico */}
              <div className="p-5 bg-gradient-to-r from-emerald-900/70 to-green-800/70 mt-auto">
                <h3 className="text-2xl font-bold mb-3 text-green-100 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 19v-6a2 2 0 
                          00-2-2H5a2 2 0 
                          00-2 2v6a2 2 0 
                          002 2h2a2 2 0 
                          002-2zm0 0V9a2 2 0 
                          012-2h2a2 2 0 
                          012 2v10m-6 0a2 2 0 
                          002 2h2a2 2 0 
                          002-2m0 0V5a2 2 0 
                          012-2h2a2 2 0 
                          012 2v14a2 2 0 
                          01-2 2h-2a2 2 0 
                          01-2-2z" />
                </svg>
                Enfoque Metodológico
              </h3>
                <p className="text-lg text-white/90 mb-3">
                  La implementación seguirá un enfoque ágil e incremental, priorizando las áreas de mayor
                  impacto y construyendo sobre los avances realizados, con evaluaciones continuas para
                  ajustar el rumbo según sea necesario.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-emerald-800/40 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-200">Adopción gradual</span>
                  </div>
                  <div className="flex items-center bg-emerald-800/40 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-200">Monitoreo constante</span>
                  </div>
                  <div className="flex items-center bg-emerald-800/40 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-200">Retroalimentación inmediata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banner inferior con beneficios clave */}
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg animate-fade-in-delay">
          <h3 className="text-2xl font-bold text-center text-green-100 mb-4">Beneficios Esperados</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-emerald-900/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2 text-center">Mayor Eficiencia</h4>
              <p className="text-center text-sm">Reducción de tiempos y aumento de productividad en procesos administrativos</p>
            </div>
            
            <div className="flex flex-col items-center bg-emerald-900/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 
                        00-5.356-1.857M17 20H7m10 
                        0v-2c0-.656-.126-1.283-.356-1.857M7 
                        20H2v-2a3 3 0 
                        015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 
                        0a5.002 5.002 0 
                        019.288 0M15 7a3 3 0 
                        11-6 0 3 3 0 
                        016 0zm6 3a2 2 0 
                        11-4 0 2 2 0 
                        014 0zM7 10a2 2 0 
                        11-4 0 2 2 0 
                        014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2 text-center">Servicio Mejorado</h4>
              <p className="text-center text-sm">Atención más ágil y de mayor calidad para los beneficiarios de programas sociales</p>
            </div>
            
            <div className="flex flex-col items-center bg-emerald-900/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 
                        0112 2.944a11.955 11.955 0 
                        01-8.618 3.04A12.02 12.02 0 
                        003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 
                        9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2 text-center">Mayor Seguridad</h4>
              <p className="text-center text-sm">Protección de datos sensibles y copias de seguridad automatizadas</p>
            </div>
            
            <div className="flex flex-col items-center bg-emerald-900/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 
                        4M3 4h18M4 4h16v12a1 1 0 
                        01-1 1H5a1 1 0 
                        01-1-1V4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2 text-center">Mejor Seguimiento</h4>
              <p className="text-center text-sm">Monitoreo en tiempo real del progreso e impacto de los programas sociales</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal para detalles */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-emerald-900/90 w-full max-w-xl rounded-xl p-6 shadow-2xl border border-emerald-400/30 animate-scale-in">
            <button 
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-4 text-green-200">{modalContent.title}</h3>
            <p className="text-white/90">{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiapositivaSolucion;
