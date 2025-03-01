import React, { useState, useEffect } from 'react';

const DiapositivaMetodologia = () => {
  // Estados para animaciones e interactividad
  const [activePhase, setActivePhase] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animación del gradiente de fondo
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Función para cambiar la fase activa
  const handlePhaseClick = (id) => {
    setActivePhase(id === activePhase ? null : id);
    setActiveDetail(null); // Resetear el detalle al cambiar de fase
  };

  // Función para cambiar el detalle activo
  const handleDetailClick = (id) => {
    setActiveDetail(id === activeDetail ? null : id);
  };

  // Función para obtener clase de animación con retardo
  const getAnimationClass = (delay = 0) => {
    return isLoaded ? `opacity-100 translate-y-0 transition-all duration-700 delay-${delay}` : 'opacity-0 translate-y-4';
  };

  // Datos de las fases metodológicas
  const phases = [
    {
      id: 1,
      title: "Diagnóstico",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      subtitle: "Mapeo de procesos, encuestas, observaciones",
      color: "purple",
      details: [
        {
          id: "diag1",
          title: "Mapeo de procesos y procedimientos",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          ),
          points: [
            "Identificación de cuellos de botella y actividades redundantes",
            "Revisión de formatos en papel y dispersión de información"
          ]
        },
        {
          id: "diag2",
          title: "Encuestas y entrevistas al personal",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          ),
          points: [
            "Detección de brechas tecnológicas y competencias digitales",
            "Recopilación de percepciones sobre limitaciones"
          ]
        },
        {
          id: "diag3",
          title: "Observaciones de campo",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          points: [
            "Verificación in situ del flujo de documentación",
            "Evaluación de la infraestructura disponible"
          ]
        },
        {
          id: "diag4",
          title: "Resultados del diagnóstico",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          points: [
            "Principales problemas: duplicidad, archivos extraviables, rezago",
            "Fundamentación para diseñar un plan de digitalización básica"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Diseño e Implementación",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      subtitle: "Desarrollo de herramientas digitales, estandarización",
      color: "indigo",
      details: [
        {
          id: "impl1",
          title: "Diseño de plan de trabajo escalonado",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          ),
          points: [
            "Definición de fases priorizando programas de mayor demanda",
            "Creación de cronograma con metas parciales y revisiones"
          ]
        },
        {
          id: "impl2",
          title: "Desarrollo de herramientas digitales",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          points: [
            "Uso de hojas de cálculo para centralizar información",
            "Creación de plantillas y nomenclaturas estandarizadas"
          ]
        },
        {
          id: "impl3",
          title: "Estandarización de procesos",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
          points: [
            "Elaboración de manuales y flujogramas para trámites",
            "Unificación de criterios de registro"
          ]
        },
        {
          id: "impl4",
          title: "Implementación piloto",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          points: [
            "Digitalización inicial de expedientes críticos",
            "Sistema de seguimiento con tablas dinámicas y reportes"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Capacitación",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      subtitle: "Formación de personal, guías de uso",
      color: "blue",
      details: [
        {
          id: "cap1",
          title: "Detección de necesidades formativas",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          points: [
            "Cuestionarios para medir nivel de dominio en ofimática",
            "Identificación de perfiles: principiante, intermedio, avanzado"
          ]
        },
        {
          id: "cap2",
          title: "Talleres y microcapacitaciones",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          points: [
            "Enfoque práctico con datos reales de la dependencia",
            "Mentores internos para reforzar el aprendizaje colaborativo"
          ]
        },
        {
          id: "cap3",
          title: "Guías de uso y manuales",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          points: [
            "Documentos breves con pasos concretos",
            "Fomento de la práctica constante y cambio cultural"
          ]
        },
        {
          id: "cap4",
          title: "Resultados en el personal",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          ),
          points: [
            "Aumento en confianza y motivación hacia transformación digital",
            "Reducción de resistencia al cambio gracias a demostración de beneficios"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Evaluación",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      subtitle: "Indicadores de mejora, retroalimentación",
      color: "violet",
      details: [
        {
          id: "eval1",
          title: "Indicadores de mejora",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          points: [
            "Porcentaje de expedientes digitalizados vs. total",
            "Tiempos promedio de atención antes y después"
          ]
        },
        {
          id: "eval2",
          title: "Retroalimentación y ajustes",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          points: [
            "Reuniones periódicas para revisar avances",
            "Identificación de áreas para reforzar capacitación"
          ]
        },
        {
          id: "eval3",
          title: "Documentación y sistematización",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          points: [
            "Elaboración de reportes que muestran logros y brechas",
            "Propuestas de mejora continua"
          ]
        },
        {
          id: "eval4",
          title: "Proyección a futuro",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          points: [
            "Justificación ante autoridades para inversión en tecnología",
            "Posibilidad de replicar el modelo en otras dependencias"
          ]
        }
      ]
    }
  ];

  // Estadísticas clave
  const statistics = [
    { label: "Expedientes digitalizados", value: "15%", icon: "📄", description: "Del total de registros críticos" },
    { label: "Personal capacitado", value: "80%", icon: "👥", description: "Del equipo del área" },
    { label: "Reducción de tiempos", value: "20%", icon: "⏱️", description: "En tiempo de respuesta" },
    { label: "Reducción de errores", value: "35%", icon: "✓", description: "En registro de datos" }
  ];

  // Resultados principales
  const mainResults = [
    "Reducción de tiempos de respuesta en 20%",
    "Digitalización del 15% de expedientes críticos",
    "Capacitación del 80% del personal",
    "Mejora en la transparencia y rendición de cuentas"
  ];

  return (
    <div 
      className="min-h-screen w-full relative text-white overflow-hidden" 
      style={{ 
        background: `linear-gradient(${angle}deg, #4f3c92, #6d48d6, #7e57ff)`,
        backgroundSize: "400% 400%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Patrón de cuadrícula de fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500 blur-3xl animate-pulse"></div>
      </div>

      {/* Encabezado */}
      <div className={`relative z-10 flex justify-between items-center px-6 py-4 ${getAnimationClass(0)}`}>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
          alt="UVEG Logo" 
          className="h-10 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-200">
            METODOLOGÍA
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-1"></div>
        </div>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
          alt="Gobierno de Tlalpujahua" 
          className="h-10 rounded shadow-lg"
        />
      </div>

      {/* Descripción general */}
      <div className={`mx-6 bg-purple-900/20 backdrop-blur-sm p-3 rounded-xl mb-4 border border-purple-500/20 ${getAnimationClass(100)}`}>
        <p className="text-center text-white">
          La metodología implementada se enfoca en transformar gradualmente la gestión administrativa
          del Área de Desarrollo Social, priorizando la adaptación del personal y el uso eficiente
          de los recursos disponibles.
        </p>
      </div>

      {/* Contenedor principal - Haciendo que use todo el espacio disponible */}
      <div className="px-6 grid grid-cols-4 gap-4 flex-grow">
        {/* Fases de la metodología */}
        {phases.map((phase, index) => (
          <div 
            key={phase.id} 
            className={`${getAnimationClass(150 + index * 50)} flex flex-col`}
          >
            <div 
              className={`bg-${phase.color}-900/30 backdrop-blur-sm rounded-xl border border-${phase.color}-500/30 overflow-hidden transition-all duration-300 flex-grow ${activePhase === phase.id ? 'ring-2 ring-white/50' : 'hover:ring-2 hover:ring-white/20'}`}
            >
              {/* Encabezado de la fase */}
              <div 
                className={`p-4 cursor-pointer ${activePhase === phase.id ? `bg-${phase.color}-800/50` : `bg-${phase.color}-900/40 hover:bg-${phase.color}-800/40`}`} 
                onClick={() => handlePhaseClick(phase.id)}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-14 h-14 rounded-full bg-${phase.color}-600 flex items-center justify-center mr-3 ${activePhase === phase.id ? 'animate-pulse' : ''}`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <p className="text-sm text-indigo-200">{phase.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-indigo-200">
                    {activePhase === phase.id ? "Haz clic para contraer" : "Haz clic para expandir"}
                  </span>
                  <span className="text-indigo-300">
                    {activePhase === phase.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
              
              {/* Detalles de la fase (visible solo cuando está activa) */}
              <div 
                className={`transition-all duration-500 overflow-hidden ${activePhase === phase.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 pt-0">
                  {phase.details.map((detail) => (
                    <div 
                      key={detail.id} 
                      className={`mt-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeDetail === detail.id ? `bg-${phase.color}-700/40 border border-${phase.color}-500/30` : `bg-${phase.color}-800/20 hover:bg-${phase.color}-700/30`}`}
                      onClick={() => handleDetailClick(detail.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full bg-${phase.color}-700/60 flex items-center justify-center mr-2`}>
                            {detail.icon}
                          </div>
                          <h4 className="text-base font-semibold">{detail.title}</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${activeDetail === detail.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Puntos del detalle */}
                      <div className={`mt-2 pl-12 transition-all duration-300 ${activeDetail === detail.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <ul className="text-sm space-y-2 list-disc">
                          {detail.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estadísticas clave - Aumentando tamaño */}
      <div className={`mx-6 mt-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20 ${getAnimationClass(350)}`}>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-center mb-5 text-indigo-100">Resultados Clave</h3>
          <div className="grid grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="bg-indigo-700/30 rounded-lg p-5 text-center border border-indigo-500/30 hover:bg-indigo-700/40 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-base font-semibold text-indigo-200">{stat.label}</div>
                <div className="text-sm text-indigo-300 mt-2">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mensaje de conclusión - Más espacio y elementos más grandes */}
      <div className={`mx-6 mt-6 mb-8 bg-indigo-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30 ${getAnimationClass(400)}`}>
        <p className="text-center text-lg mb-4">
          Esta metodología ha permitido transformar la gestión administrativa del Área de Desarrollo Social, 
          mejorando la eficiencia en un <span className="font-bold text-yellow-300 text-xl">20%</span> y reduciendo 
          los tiempos de respuesta en más de un <span className="font-bold text-yellow-300 text-xl">15%</span>.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {mainResults.map((result, index) => (
            <div 
              key={index}
              className="bg-indigo-700/20 px-4 py-2 rounded-full text-base border border-indigo-500/20 flex items-center animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {result}
            </div>
          ))}
        </div>
      </div>
      
      {/* Elemento decorativo para ocupar el espacio restante */}
      <div className="w-full h-16 bg-gradient-to-t from-purple-900 to-transparent opacity-50"></div>
    </div>
  );
};

export default DiapositivaMetodologia;