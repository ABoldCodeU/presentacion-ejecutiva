import React, { useState, useEffect } from 'react';

const DiapositivaBeneficios = () => {
  // Estados para animaciones e interactividad
  const [angle, setAngle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', category: '' });
  const [activeTab, setActiveTab] = useState('organizacion');

  // Efecto para animar el fondo
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Función para mostrar detalles al hacer click
  const showDetails = (title, content, category) => {
    setModalContent({ title, content, category });
    setShowModal(true);
  };

  // Función para la animación de entrada
  const getAnimationClass = (delay = 0) => {
    return isLoaded
      ? `opacity-100 translate-y-0 transition-all duration-700 delay-${delay}`
      : 'opacity-0 translate-y-4';
  };

  // Datos estructurados para los beneficios
  const beneficios = {
    organizacion: [
      {
        id: 1,
        title: "Mejora en la Eficiencia",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        summary: "Reducción en tiempos de procesamiento y respuesta, optimizando la capacidad para atender solicitudes.",
        content: "La creación de un repositorio digital de expedientes y la adopción de un sistema de seguimiento permiten disminuir la dependencia en búsquedas manuales y reduce notablemente los errores de duplicación de datos. Esta reorganización de procesos repercute en ahorros de tiempo y mayor productividad. Asimismo, la estandarización de formatos y la utilización de hojas de cálculo facilitan la elaboración de reportes, permitiendo evidenciar el uso eficiente de recursos y la correcta administración de los apoyos sociales.",
        color: "green"
      },
      {
        id: 2,
        title: "Transparencia y Rendición",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
        summary: "Mayor transparencia y capacidad de respuesta ante solicitudes de información y auditorías.",
        content: "Al contar con registros digitales y un tablero de seguimiento, se mejora la capacidad de respuesta ante auditorías o solicitudes de información, ya que toda la documentación se encuentra resguardada de forma sistematizada. Protocolos de respaldo y nomenclaturas estandarizadas favorecen las revisiones internas, mitigando riesgos de manipulación de datos y contribuyendo a proyectar una imagen confiable ante instancias superiores y la comunidad.",
        color: "green"
      },
      {
        id: 3,
        title: "Cultura de Mejora Continua",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        summary: "Introducción de una actitud receptiva ante la innovación y la búsqueda constante de soluciones.",
        content: "La introducción de capacitaciones y herramientas digitales impulsa la idea de que los procesos pueden y deben actualizarse en un entorno de cambio permanente. Al interior del Área de Desarrollo Social, se consolida una actitud receptiva ante la innovación, reforzando la búsqueda constante de soluciones más eficientes. Esta mentalidad proactiva también incrementa la capacidad de respuesta ante situaciones emergentes. Al tener un inventario actualizado de datos y empleados con destrezas digitales, el equipo puede adaptarse mejor a eventualidades.",
        color: "green"
      },
      {
        id: 4,
        title: "Sinergia Interdepartamental",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        summary: "Coordinación más estrecha con otras entidades municipales y estatales.",
        content: "La gestión modernizada del Área de Desarrollo Social abre la puerta a una coordinación más estrecha con entidades municipales y estatales, tales como la Tesorería y Obras Públicas, facilitando proyectos interinstitucionales. La capacidad de compartir información consolidada en un formato estandarizado permite que las dependencias alineen esfuerzos, intercambien datos y generen reportes conjuntos más precisos, redundando en una atención integral a las necesidades de la comunidad.",
        color: "green"
      }
    ],
    trabajadores: [
      {
        id: 1,
        title: "Desarrollo Profesional",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        summary: "Adquisición de nuevas habilidades digitales que aumentan la satisfacción laboral y empleabilidad.",
        content: "Las capacitaciones enfocadas en herramientas ofimáticas, organización digital y buenas prácticas de seguridad amplían el perfil profesional del personal, dotándolos de habilidades demandadas en el mercado laboral. Estas competencias TIC se convierten en un activo transferible a otras áreas, al tiempo que fortalecen la resiliencia de la administración pública, pues el equipo se vuelve más flexible y polivalente.",
        color: "blue"
      },
      {
        id: 2,
        title: "Autonomía en Decisiones",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        summary: "Mayor independencia para atender solicitudes ciudadanas sin múltiples aprobaciones.",
        content: "Contar con datos centralizados y accesibles confiere al personal la independencia necesaria para atender solicitudes ciudadanas con mayor rapidez, sin requerir múltiples aprobaciones o búsquedas de información en distintas oficinas. Asimismo, el mejor entendimiento de los procesos internos y la claridad de los procedimientos permiten que los trabajadores realicen propuestas de mejora, ajustándose ágilmente a los cambios o nuevas políticas establecidas por el ayuntamiento.",
        color: "blue"
      },
      {
        id: 3,
        title: "Reducción de Estrés Laboral",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        summary: "Elimina tareas repetitivas y la presión por entregar resultados con urgencia.",
        content: "El cambio de expedientes físicos a una base de datos digital alivia la presión de buscar información entre montones de documentos, previniendo el extravío de archivos o la duplicación de tareas. Paralelamente, la distribución más equitativa de tareas y la claridad en los roles se traducen en un mejor clima laboral, pues los colaboradores perciben que el trabajo diario es más organizado y menos susceptible a imprevistos.",
        color: "blue"
      },
      {
        id: 4,
        title: "Aprendizaje Colaborativo",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        summary: "Promueve un ambiente colaborativo donde el personal comparte conocimientos.",
        content: "La figura de 'mentores internos' —el personal con mayor experiencia digital que apoya a quienes están en proceso de formación— promueve un ambiente colaborativo de aprendizaje. Este enfoque horizontal fortalece la cohesión del equipo y facilita la transmisión de conocimientos, de modo que la organización deja de depender de uno o dos especialistas. A largo plazo, se genera un espíritu de confianza mutua y co-creación de soluciones.",
        color: "blue"
      }
    ],
    // Mantengo replicabilidad aquí para usarlo en la franja
    replicabilidad: [
      {
        id: 1,
        title: "Modelo Escalable",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        summary: "Prácticas aplicables a otras dependencias con cargas administrativas similares.",
        content: "Las prácticas introducidas —desde la digitalización con herramientas de bajo costo hasta la capacitación modular del personal— pueden extrapolarse a otras dependencias con cargas administrativas similares. Esto se vuelve especialmente relevante en municipios pequeños o con limitaciones presupuestales. La metodología aplicada en Tlalpujahua, basada en soluciones sencillas y en el uso de software ampliamente disponible, demuestra que la modernización no requiere de sistemas costosos si existe una estrategia clara y voluntad política para implementarla.",
        color: "purple"
      },
      {
        id: 2,
        title: "Alineación con Políticas",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        ),
        summary: "Convergencia con lineamientos estatales y federales de mejora regulatoria.",
        content: "Dado que los esfuerzos de simplificación y digitalización se contemplan en lineamientos estatales y federales, el caso de Tlalpujahua —como el de muchos municipios— puede servir de inspiración para impulsar acciones análogas en otros contextos. El hecho de que el Área de Desarrollo Social obtenga resultados positivos al reducir tiempos de respuesta y mejorar la rendición de cuentas impulsa la adopción de este tipo de proyectos en otros entornos, reforzando la convergencia con las políticas de transparencia y modernización.",
        color: "purple"
      },
      {
        id: 3,
        title: "Sistemas Avanzados",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
        summary: "Base para conectar con plataformas estatales y federales en tiempo real.",
        content: "Con la consolidación de los procesos digitales y la adopción de políticas de respaldo y seguridad, se abre la oportunidad de interconectar los distintos sistemas municipales o acceder a plataformas estatales/federales que permitan el intercambio de datos en tiempo real. La automatización de reportes, la interoperabilidad con otras áreas gubernamentales y el registro unificado de beneficiarios se vuelven metas alcanzables en el mediano plazo, siempre que se aseguren los recursos necesarios y se mantenga el acompañamiento formativo del personal.",
        color: "purple"
      },
      {
        id: 4,
        title: "Multiplicador de Conocimientos",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        summary: "Personal capacitado funciona como agentes de cambio en otros departamentos.",
        content: "Los empleados que han reforzado sus competencias digitales pueden fungir como agentes de cambio en otros departamentos, impulsando la mejora en la gestión de expedientes y trámites. Este 'efecto cascada' fomenta la creación de una cultura de modernización a nivel municipal, incrementando gradualmente la eficiencia global de la administración pública y repercutiendo directamente en la calidad de los servicios que se brindan a la ciudadanía.",
        color: "purple"
      }
    ]
  };

  // Datos del impacto social
  const impactoSocial = {
    title: "Impacto Social",
    description: "La modernización administrativa ha permitido que una gran cantidad de beneficiarios reciban apoyos sociales de manera más ágil y confiable, mejorando el impacto de los programas sociales en la comunidad de Tlalpujahua.",
    stats: [
      { label: "Aumento de eficiencia", value: "15%" },
      { label: "Reducción en tiempo de respuesta", value: "30%" },
      { label: "Satisfacción del area", value: "83%" }
    ]
  };

  return (
    <div 
      className="min-h-screen w-full relative text-white overflow-auto"
      style={{ 
        background: `linear-gradient(${angle}deg, #064e3b, #047857, #059669, #10b981)`,
        backgroundSize: "400% 400%",
        transition: "background-position 0.5s ease"
      }}
    >
      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-green-300 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-emerald-400 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300 blur-3xl animate-pulse"
          style={{ animationDelay: "2.2s" }}
        ></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Encabezado */}
      <div className={`relative z-10 flex justify-between items-center px-8 py-4 ${getAnimationClass(0)}`}>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
          alt="UVEG Logo" 
          className="h-10 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-white to-emerald-200">
            BENEFICIOS SOCIALES
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
        </div>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
          alt="Gobierno de Tlalpujahua" 
          className="h-10 rounded shadow-lg"
        />
      </div>

      {/* Descripción general */}
      <div className={`relative z-10 mx-auto px-8 mt-2 ${getAnimationClass(100)}`}>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
          <p className="text-lg">
            El proceso de digitalización, la capacitación del personal y el desarrollo de sistemas
            de seguimiento no solo optimizan la operación interna, sino que generan impactos positivos
            que trascienden la rutina administrativa y se manifiestan en diferentes ámbitos.
          </p>
        </div>
      </div>

      {/* Navegación por pestañas (solo Organización y Trabajadores) */}
      <div className={`relative z-10 flex justify-center mt-6 px-8 ${getAnimationClass(150)}`}>
        <div className="bg-black/20 backdrop-blur-sm rounded-full p-1 inline-flex">
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === 'organizacion' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('organizacion')}
          >
            Para la Organización
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === 'trabajadores' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('trabajadores')}
          >
            Para los Trabajadores
          </button>
        </div>
      </div>

      {/* Contenido principal - Grid de beneficios (Organización / Trabajadores) */}
      <div className={`relative z-10 px-8 mt-2 mb-2 ${getAnimationClass(200)}`}>
        {/* Para la Organización */}
        <div className={`grid grid-cols-2 gap-6 transition-opacity duration-500 ${
          activeTab === 'organizacion' ? 'opacity-100' : 'opacity-0 absolute -left-full'
        }`}>
          {beneficios.organizacion.map((beneficio) => (
            <div
              key={beneficio.id}
              className={`bg-green-900/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 transform transition-all duration-300 hover:scale-105 hover:bg-green-900/50 hover:border-green-400/40 cursor-pointer ${
                activeCard === `org-${beneficio.id}` ? 'ring-2 ring-green-400' : ''
              }`}
              onClick={() => showDetails(beneficio.title, beneficio.content, 'organizacion')}
              onMouseEnter={() => setActiveCard(`org-${beneficio.id}`)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-lg shadow-green-900/50">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-100">{beneficio.title}</h3>
                  <p>{beneficio.summary}</p>
                  <div className="mt-2 flex justify-end">
                    <span className="text-sm text-green-200 hover:text-green-100 flex items-center">
                      Ver más detalles
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Para los Trabajadores */}
        <div className={`grid grid-cols-2 gap-6 transition-opacity duration-500 ${
          activeTab === 'trabajadores' ? 'opacity-100' : 'opacity-0 absolute -left-full'
        }`}>
          {beneficios.trabajadores.map((beneficio) => (
            <div
              key={beneficio.id}
              className={`bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:bg-blue-900/50 hover:border-blue-400/40 cursor-pointer ${
                activeCard === `trab-${beneficio.id}` ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => showDetails(beneficio.title, beneficio.content, 'trabajadores')}
              onMouseEnter={() => setActiveCard(`trab-${beneficio.id}`)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-lg shadow-blue-900/50">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-100">{beneficio.title}</h3>
                  <p>{beneficio.summary}</p>
                  <div className="mt-2 flex justify-end">
                    <span className="text-sm text-blue-200 hover:text-blue-100 flex items-center">
                      Ver más detalles
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impacto Social */}
      <div className={`relative z-10 px-8 pb-0 ${getAnimationClass(300)}`}>
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-3 gap-0">
            {/* Columna izquierda */}
            <div className="col-span-2 p-3">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-100 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {impactoSocial.title}
                </h3>
                <p className="text-lg mb-2">
                  {impactoSocial.description}
                </p>
                
                {/* Estadísticas */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {impactoSocial.stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/10 rounded-lg p-4 text-center transform transition-transform hover:scale-105"
                    >
                      <p className="text-3xl font-bold text-emerald-200">{stat.value}</p>
                      <p className="text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 text-center">
                  <p className="italic text-emerald-200 text-sm">
                    "Este círculo virtuoso —que va de la capacitación a la transparencia, y de la 
                    digitalización a la colaboración— permite anticipar un futuro más eficiente 
                    y participativo para la administración pública de Tlalpujahua."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Columna derecha */}
            <div className="bg-black/20 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 p-3 text-center">
                <div className="w-64 h-48 bg-gradient-to-br from-emerald-800/40 to-emerald-900/40 backdrop-blur-sm rounded-lg border border-emerald-500/30 flex items-center justify-center shadow-lg">
                  <img 
                    src="https://github.com/ABoldCodeU/imagenes-para-proyectos/blob/main/imagenes/beneficio.png?raw=true" 
                    alt="Comunidad Beneficiada" 
                    className="w-full h-full object-cover rounded-lg"
                    style={{ maxHeight: "100%", width: "100%" }}
                  />
                </div>
                
                <div className="mt-2">
                  <button 
                    className="px-4 py-2 bg-emerald-700/70 hover:bg-emerald-700 rounded-full text-white font-medium transition-all flex items-center mx-auto"
                    onClick={() => showDetails(
                      "Transformación Social",
                      "La modernización del Área de Desarrollo Social conlleva beneficios multisectoriales: fortalece la organización interna, enriquece las competencias y la motivación del personal, y sienta precedentes para que otras dependencias adopten prácticas similares.",
                      "impacto"
                    )}
                  >
                    Ver Transformación
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Círculos decorativos */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-emerald-500/20 blur-xl"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full bg-emerald-500/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FRANJA DE REPLICABILIDAD (abajo) */}
      <div className={`relative z-10 px-8 pb-4 ${getAnimationClass(400)}`}>
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-200">
          Replicabilidad
        </h2>
        {/* Un row con 4 columnas */}
        <div className="grid grid-cols-4 gap-6">
          {beneficios.replicabilidad.map((beneficio) => (
            <div
              key={beneficio.id}
              className={`bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 transform transition-all duration-300 hover:scale-105 hover:bg-purple-900/50 hover:border-purple-400/40 cursor-pointer ${
                activeCard === `rep-${beneficio.id}` ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => showDetails(beneficio.title, beneficio.content, 'replicabilidad')}
              onMouseEnter={() => setActiveCard(`rep-${beneficio.id}`)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-lg shadow-purple-900/50">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-100">{beneficio.title}</h3>
                  <p>{beneficio.summary}</p>
                  <div className="mt-2 flex justify-end">
                    <span className="text-sm text-purple-200 hover:text-purple-100 flex items-center">
                      Ver más detalles
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className={`relative w-full max-w-2xl rounded-xl p-8 shadow-2xl border animate-scale-in
            ${modalContent.category === 'organizacion' ? 'bg-green-900/90 border-green-400/30' : 
              modalContent.category === 'trabajadores' ? 'bg-blue-900/90 border-blue-400/30' :
              modalContent.category === 'replicabilidad' ? 'bg-purple-900/90 border-purple-400/30' :
              'bg-emerald-900/90 border-emerald-400/30'}`}>
            
            <button 
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className={`text-2xl font-bold mb-4 
              ${modalContent.category === 'organizacion' ? 'text-green-200' : 
               modalContent.category === 'trabajadores' ? 'text-blue-200' :
               modalContent.category === 'replicabilidad' ? 'text-purple-200' :
               'text-emerald-200'}`}>
              {modalContent.title}
            </h3>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/90">{modalContent.content}</p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-all
                  ${modalContent.category === 'organizacion' ? 'bg-green-700 hover:bg-green-600' : 
                   modalContent.category === 'trabajadores' ? 'bg-blue-700 hover:bg-blue-600' :
                   modalContent.category === 'replicabilidad' ? 'bg-purple-700 hover:bg-purple-600' :
                   'bg-emerald-700 hover:bg-emerald-600'}`}
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiapositivaBeneficios;
