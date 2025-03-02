import React, { useState, useEffect } from 'react';

const DiapositivaFundamento = () => {
  // Estados para animaciones e interactividad
  const [activeSection, setActiveSection] = useState(1);
  const [angle, setAngle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(null);

  // Efecto para animar el fondo
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Función para mostrar detalles al hacer hover
  const handleSectionHover = (id) => {
    setActiveSection(id);
  };

  // Función para la animación de entrada
  const getAnimationClass = (delay = 0) => {
    return isLoaded
      ? `opacity-100 translate-y-0 transition-all duration-700 delay-${delay}`
      : 'opacity-0 translate-y-4';
  };

  // Función para mostrar/ocultar preview
  const togglePreview = (id) => {
    setShowPreview(showPreview === id ? null : id);
  };

  // URLs para las bibliografías
  const bibUrls = {
    estrategia: "https://www.gob.mx/cms/uploads/attachment/file/17083/Estrategia_Digital_Nacional.pdf",
    competencias: "https://www.abogadogeneral.unam.mx/sites/default/files/archivos/RepositorioCont/6_Dependencias/147_DireccionGeneraldeServiciosAdministrativos/64_Guiametodologicaparaeldesarrollodecompetencias.pdf",
    reingenieria: "https://biblat.unam.mx/hevila/Cienciasdelainformacion/2011/vol42/no3/4.pdf",
    normativo: "https://dof.gob.mx/nota_detalle.php?codigo=5628886&fecha=06/09/2021"
  };

  // Datos de las secciones del fundamento teórico
  const sections = [
    {
      id: 1,
      title: "Estrategia Digital Nacional",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      summary: "La digitalización en la administración pública no solo moderniza los procesos, sino que también incrementa la transparencia y eficiencia en la prestación de servicios (SFP, 2023).",
      expanded: "La incorporación de la tecnología en el ámbito gubernamental es clave para optimizar procesos administrativos, transparentar la gestión y brindar mejores servicios a la ciudadanía. La Estrategia Digital Nacional del Gobierno de México señala la necesidad de \"construir una nueva relación entre la sociedad y el gobierno\" a través de la adopción de tecnologías digitales.",
      source: "SFP, 2023",
      color: "blue",
      bibUrl: "estrategia",
      previewImg: "https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/estrategia_nac.png"
    },
    {
      id: 2,
      title: "Modelo de Reingeniería",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      summary: "La reingeniería de procesos en la gestión pública mejora la eficiencia administrativa, reduciendo redundancias y optimizando recursos.",
      expanded: "La reingeniería busca rediseñar radicalmente trámites y procedimientos con miras a reducir costos, eliminar redundancias y mejorar la calidad del servicio. Implica un análisis profundo y rediseño radical de los procesos existentes, con el objetivo de eliminar ineficiencias y establecer métodos de trabajo más ágiles y productivos.",
      source: "Rafoso Pomar & Artiles Visbal, 2011",
      color: "indigo",
      bibUrl: "reingenieria",
      previewImg: "https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/reingenieria_procesos.png"
    },
    {
      id: 3,
      title: "Desarrollo de Competencias",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      summary: "La capacitación tecnológica del personal es esencial para superar la resistencia al cambio y asegurar la sostenibilidad de la transformación digital.",
      expanded: "Aun con el mejor diseño de procesos y la dotación de tecnologías, la eficacia de la modernización depende en gran medida del capital humano. La formación continua en TIC y reingeniería de procesos contribuye a una mayor cultura de la innovación y la adopción de métodos de trabajo orientados a la mejora continua.",
      source: "Córdova Calderón, 2019",
      color: "purple",
      bibUrl: "competencias",
      previewImg: "https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/desarrollo_competencias.png"
    },
    {
      id: 4,
      title: "Marco Normativo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      summary: "El proyecto se alinea con la Ley General de Transparencia y Acceso a la Información Pública y los lineamientos de transformación digital.",
      expanded: "La modernización administrativa en México se encuentra respaldada por un marco legal que promueve la transparencia y la rendición de cuentas. La transparencia en la gestión pública y la rendición de cuentas no son fines en sí mismos, sino un medio para fortalecer la confianza de la ciudadanía en su gobierno.",
      source: "DOF, 2021",
      color: "violet",
      bibUrl: "normativo",
      previewImg: "https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/diario_oficial_estrategia_dig.png"
    }
  ];

  // Estructura del modelo teórico aplicado
  const modelStructure = [
    {
      id: 1,
      title: "Modernización Administrativa",
      description: "Mejora de eficiencia, racionalización, optimización de servicios",
      source: "Gobierno de Río Negro, 2018"
    },
    {
      id: 2,
      title: "Estrategia Digital Nacional",
      description: "Marco institucional para la digitalización gubernamental",
      source: "SFP, 2023"
    },
    {
      id: 3,
      title: "Reingeniería de Procesos",
      description: "Rediseño radical para mejorar rendimiento y calidad",
      source: "Rafoso Pomar & Artiles Visbal, 2011"
    },
    {
      id: 4,
      title: "Gobierno Electrónico",
      description: "Integración de TIC para servicios eficientes y transparentes",
      source: "CEPAL, s.f."
    }
  ];

  return (
    <div 
      className="min-h-screen w-full relative text-white overflow-hidden flex flex-col" 
      style={{ 
        background: `linear-gradient(${angle}deg, #1e3a8a, #312e81, #2e1065)`,
        backgroundSize: "400% 400%"
      }}
    >
      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-600 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Encabezado */}
      <div className={`relative z-10 flex justify-between items-center px-6 py-4 ${getAnimationClass(0)}`}>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
          alt="UVEG Logo" 
          className="h-10 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-100 to-violet-200">
            FUNDAMENTO TEÓRICO
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-1"></div>
        </div>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
          alt="Gobierno de Tlalpujahua" 
          className="h-10 rounded shadow-lg"
        />
      </div>

      {/* Contenedor principal */}
      <div className="flex-grow flex flex-col px-6 py-4">
        {/* Descripción general (opcional) */}
        <div className={`bg-indigo-900/20 backdrop-blur-sm p-3 rounded-xl mb-4 border border-indigo-500/20 ${getAnimationClass(100)}`}>
          <p className="text-center text-white">
            La transformación digital en el ámbito municipal se sustenta en principios teóricos 
            y marcos legales que orientan la implementación de mejoras en la gestión administrativa.
          </p>
        </div>

        {/* Grid de secciones del fundamento teórico */}
        <div className="grid grid-cols-2 gap-6 flex-grow">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`bg-${section.color}-900/30 backdrop-blur-sm rounded-xl border border-${section.color}-500/30 shadow-xl flex flex-col overflow-hidden transition-all duration-500 ${activeSection === section.id ? 'scale-105 ring-2 ring-white/20' : 'hover:scale-102'} ${getAnimationClass(150 + index * 50)}`}
              onMouseEnter={() => handleSectionHover(section.id)}
              onMouseLeave={() => handleSectionHover(null)}
            >
              <div className="p-5">
                <div className="flex items-start">
                  <div className={`w-16 h-16 rounded-full bg-${section.color}-600 flex items-center justify-center mr-4 ${activeSection === section.id ? 'animate-pulse' : ''}`}>
                    {section.icon}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 text-${section.color}-300`}>
                      <a 
                        href={bibUrls[section.bibUrl]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(bibUrls[section.bibUrl], '_blank');
                        }}
                      >
                        {section.title}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </h2>
                    <p className={`text-sm ${activeSection === section.id ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} transition-all duration-500 overflow-hidden`}>
                      {section.summary}
                    </p>
                    <div className={`${activeSection === section.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 overflow-hidden`}>
                      <p className="text-sm mb-2">{section.expanded}</p>
                      <div className="flex items-center text-xs text-indigo-300 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Fuente: {section.source}</span>
                        <button 
                          className="ml-2 text-blue-300 hover:text-blue-100 flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePreview(section.id);
                          }}
                        >
                          {showPreview === section.id ? 'Ocultar Vista Previa' : 'Ver Vista Previa'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vista previa del documento */}
                {showPreview === section.id && (
                  <div className="mt-4 p-2 bg-white/10 rounded-lg overflow-hidden relative">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold">Vista Previa del Documento</h4>
                      <a 
                        href={bibUrls[section.bibUrl]}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-white flex items-center"
                      >
                        Ver Documento Completo
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div className="relative h-64 bg-gray-800 rounded overflow-hidden">
                      {/* Imagen de la vista previa */}
                      <img 
                        src={section.previewImg} 
                        alt={`Vista previa de ${section.title}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x200?text=Vista+Previa+No+Disponible";
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Línea decorativa */}
              <div className={`mt-auto h-1 w-full bg-gradient-to-r from-${section.color}-600/80 to-transparent`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Estructura conceptual + Bibliografía en dos columnas */}
      <div className={`mx-6 mt-6 flex gap-6 ${getAnimationClass(400)}`}>
        {/* Columna izquierda: Bibliografía */}
        <div className="w-1/3 bg-gradient-to-r from-blue-900/40 to-violet-900/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30">
          <h3 className="text-xl font-bold mb-4 text-center">Bibliografía</h3>
          <ul className="list-disc list-inside text-sm text-indigo-200 space-y-2">
            {/* Estrategia Digital Nacional */}
            <li id="bib-estrategia">
              <span className="font-semibold">
                Secretaría de la Función Pública. (2023).
              </span>{" "}
              Estrategia Digital Nacional. <br />
              <a 
                href={bibUrls.estrategia}
                className="underline text-blue-300 hover:text-blue-400" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://www.gob.mx/cms/uploads/attachment/file/17083/Estrategia_Digital_Nacional.pdf
              </a>
            </li>
            {/* Desarrollo de Competencias */}
            <li id="bib-competencias">
              <span className="font-semibold">
                Córdova Calderón, F. A. (2019).
              </span>{" "}
              Guía metodológica para el desarrollo de competencias. <br />
              <span className="text-xs">
                Elaboró: Dr. Fernando A. Córdova Calderón. Revisó: Lic. Francisco Salgado Rico. Autorizó: Dr. Gustavo González Bonilla. GM-CH 01, Revisión: 02, Entrada en vigor: 15/01/2019.
              </span><br />
              <a 
                href={bibUrls.competencias}
                className="underline text-blue-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.abogadogeneral.unam.mx/sites/default/files/archivos/RepositorioCont/6_Dependencias/147_DireccionGeneraldeServiciosAdministrativos/64_Guiametodologicaparaeldesarrollodecompetencias.pdf
              </a>
            </li>
            {/* Reingeniería */}
            <li id="bib-reingenieria">
              <span className="font-semibold">
                Rafoso Pomar, S., & Artiles Visbal, S. (2011).
              </span>{" "}
              Reingeniería de procesos: conceptos, enfoques y nuevas aplicaciones. <br />
              <em>Ciencias de la Información, 42(3), pp. 29-37.</em> <br />
              <a
                href={bibUrls.reingenieria}
                className="underline text-blue-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://biblat.unam.mx/hevila/Cienciasdelainformacion/2011/vol42/no3/4.pdf
              </a>
            </li>
            {/* Marco Normativo */}
            <li id="bib-normativo">
              <span className="font-semibold">
                Diario Oficial de la Federación. (2021).
              </span>{" "}
              Transformación digital de la administración pública. <br />
              <a 
                href={bibUrls.normativo}
                className="underline text-blue-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dof.gob.mx/nota_detalle.php?codigo=5628886&fecha=06/09/2021
              </a>
            </li>
          </ul>
          
          <h4 className="text-lg font-semibold mt-6 mb-2 text-center">Referencias adicionales</h4>
          <ul className="list-disc list-inside text-sm text-indigo-200 space-y-2">
            <li>
              <span className="font-semibold">
                Ángeles Hernández, R. (2014).
              </span>{" "}
              Reforma digital en la Administración Pública Federal de México. <br />
              <a 
                href="https://revistas.unam.mx/index.php/encrucijada/article/download/58378/51633"
                className="underline text-blue-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://revistas.unam.mx/index.php/encrucijada/article/download/58378/51633
              </a>
            </li>
          </ul>
        </div>

        {/* Columna derecha: Estructura Conceptual */}
        <div className="w-2/3 bg-gradient-to-r from-blue-900/40 to-violet-900/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30">
          <h3 className="text-xl font-bold text-center mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Estructura Conceptual del Modelo Teórico
          </h3>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Líneas de conexión */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-500/50"></div>
              <div className="absolute top-[calc(50%-40px)] left-1/4 w-0.5 h-20 bg-indigo-500/50"></div>
              <div className="absolute top-[calc(50%-40px)] left-1/2 w-0.5 h-20 bg-indigo-500/50"></div>
              <div className="absolute top-[calc(50%-40px)] left-3/4 w-0.5 h-20 bg-indigo-500/50"></div>
              
              {/* Conceptos teóricos */}
              <div className="grid grid-cols-4 gap-4 relative">
                {modelStructure.map((item) => (
                  <div 
                    key={item.id}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold mb-2 shadow-lg shadow-indigo-900/50 z-10">
                      {item.id}
                    </div>
                    <div className="bg-indigo-800/50 p-3 rounded-lg w-full text-center border border-indigo-500/30">
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-indigo-200 mt-1">{item.description}</p>
                      <div className="mt-2 text-xs text-indigo-300 italic font-light">
                        <span>{item.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-indigo-200">
              "La modernización administrativa y digital es clave para mejorar la eficiencia interna y 
              la calidad de los servicios sociales, logrando una administración más ágil, transparente 
              y orientada al ciudadano." <span className="italic">- Gobierno de Río Negro, 2018</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaFundamento;