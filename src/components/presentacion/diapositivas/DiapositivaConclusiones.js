import React, { useState, useEffect } from 'react';

const DiapositivaConclusiones = () => {
  // Estados para animaciones e interactividad
  const [angle, setAngle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('conclusiones');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [hoverItem, setHoverItem] = useState(null);

  // Efecto para animar el fondo
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Función para mostrar detalles en modal
  const showDetails = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  // Función para la animación de entrada
  const getAnimationClass = (delay = 0) => {
    return isLoaded
      ? `opacity-100 translate-y-0 transition-all duration-700 delay-${delay}`
      : 'opacity-0 translate-y-4';
  };

  // Datos de conclusiones
  const conclusiones = [
    {
      id: 1,
      title: "Enfoque Escalonado",
      description: "La implementación gradual y priorización estratégica permitió generar resultados tangibles que motivaron a continuar el proceso.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      details: "La implementación de sistemas digitales requiere un diseño cuidadoso, capacitación adecuada y ajustes continuos. La priorización de programas con mayor impacto ciudadano permitió conseguir resultados tempranos que fortalecieron el compromiso del equipo. Dividir las acciones en fases también facilitó que el personal pudiera balancear sus responsabilidades habituales con la adopción de nuevas metodologías de trabajo."
    },
    {
      id: 2,
      title: "Formación Continua",
      description: "El desarrollo de competencias digitales en el personal es fundamental para la adopción efectiva y sostenibilidad de los nuevos sistemas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      details: "La implementación efectiva y sostenible de herramientas digitales está directamente relacionada con las habilidades que desarrolle el equipo. Un plan de formación estructurado y continuo garantiza que los avances conseguidos perduren y evolucionen con el tiempo. Los talleres prácticos y el sistema de mentores internos demostraron ser particularmente efectivos para facilitar la transferencia de conocimientos y reducir la curva de aprendizaje."
    },
    {
      id: 3,
      title: "Soluciones Adaptativas",
      description: "La utilización de herramientas accesibles y sistemas flexibles permitió avanzar a pesar de las limitaciones de infraestructura.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      details: "Las aplicaciones ofimáticas y los sistemas de respaldo local resultaron ser soluciones efectivas y accesibles para contextos con conectividad variable. La experiencia de trabajar con sincronizaciones programadas y procesos híbridos demuestra que es posible avanzar en la transformación digital con un enfoque pragmático y flexible, adaptándose a la realidad de los recursos disponibles."
    },
    {
      id: 4,
      title: "Transformación Integral",
      description: "La digitalización implica un cambio en procedimientos y también en la cultura organizacional, requiriendo comunicación y participación.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      details: "La transición hacia formatos digitales conlleva un replanteamiento de las dinámicas de trabajo y los valores organizacionales. La comunicación abierta, la participación inclusiva y la celebración de logros fueron factores clave para lograr una verdadera apropiación del cambio. La aceptación tecnológica depende tanto de la percepción de sus beneficios como de su facilidad de uso, aspectos que requieren acompañamiento constante."
    },
    {
      id: 5,
      title: "Respaldo Institucional",
      description: "El apoyo constante de las autoridades es esencial para la sostenibilidad de la modernización y la asignación de recursos necesarios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: "Para consolidar los avances iniciales, es fundamental contar con el respaldo de directivos y autoridades municipales que faciliten la renovación programada de infraestructura, la capacitación permanente y el seguimiento de los procesos implementados. La articulación con diferentes instancias gubernamentales potencia la asignación de recursos para dar continuidad a las iniciativas más allá del periodo de implementación inicial."
    }
  ];

  // Datos de áreas de oportunidad
  const areasOportunidad = [
    {
      id: 1,
      title: "Ampliación Digital",
      description: "Extender progresivamente la digitalización a más expedientes e integrar el sistema de seguimiento a todos los programas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      details: "Existe una oportunidad para avanzar en la digitalización de más documentos y expedientes, integrándolos a la base de datos central para mayor eficiencia. La extensión del sistema de seguimiento a todos los programas sociales permitirá obtener una visión más completa e integrada de la operación del área, facilitando la toma de decisiones y mejorando la atención ciudadana."
    },
    {
      id: 2,
      title: "Desarrollo de Habilidades",
      description: "Profundizar la formación en herramientas avanzadas de análisis de datos, seguridad digital y generación de reportes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      details: "Si bien ya se capacitó al personal en competencias digitales básicas, existe la oportunidad de fortalecer conocimientos en áreas más especializadas como análisis de datos, funcionalidades avanzadas de hojas de cálculo, seguridad de la información y elaboración de reportes estadísticos. Un programa semestral de formación continua permitirá el crecimiento progresivo de las competencias y asegurará la integración efectiva de nuevos colaboradores."
    },
    {
      id: 3,
      title: "Fortalecimiento Tecnológico",
      description: "Planificar la evolución gradual de la infraestructura tecnológica para ampliar las capacidades de los sistemas implementados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      details: "Las estrategias implementadas han permitido avanzar considerablemente con los recursos actuales. Para la siguiente fase, sería oportuno desarrollar un plan de fortalecimiento tecnológico progresivo que facilite la adopción de herramientas colaborativas en la nube y mejore la conectividad. La planificación oportuna permitirá justificar adecuadamente la inversión en infraestructura ante las autoridades correspondientes."
    },
    {
      id: 4,
      title: "Estandarización de Procesos",
      description: "Formalizar los procedimientos implementados mediante documentación estructurada para asegurar su continuidad institucional.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: "Los procedimientos que actualmente funcionan en la práctica requieren ser documentados formalmente para convertirse en estándares institucionales. La formalización de estos procesos facilitará la inducción de nuevo personal y reducirá la dependencia de la memoria institucional. Los manuales de procedimientos también contribuirán a mantener la consistencia en la ejecución y calidad del servicio independientemente de cambios en el equipo."
    },
    {
      id: 5,
      title: "Métricas de Desempeño",
      description: "Implementar indicadores de gestión que permitan evaluar objetivamente los resultados y guiar mejoras continuas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: "Para visualizar el impacto de la modernización y orientar las mejoras futuras, sería valioso establecer indicadores de desempeño específicos como: tiempo promedio de atención por tipo de apoyo, eficiencia en la detección de solicitudes duplicadas, y generación periódica de reportes analíticos. La revisión regular de estos indicadores en reuniones de trabajo permitirá identificar oportunamente áreas de ajuste y fundamentar decisiones en datos concretos."
    }
  ];

  // Datos de propuestas
  const propuestas = [
    {
      id: 1,
      title: "Plan de Digitalización Integral",
      description: "Establecer metas graduales de digitalización con objetivos medibles por trimestre para los próximos 12 meses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      details: "Partiendo de la experiencia adquirida en programas prioritarios, se propone establecer un plan estructurado con metas progresivas y realistas de digitalización. Este plan incluiría la estandarización de datos complementarios como CURP, localidad y teléfono de contacto en la base centralizada, facilitando la generación de reportes más completos y la comunicación con beneficiarios."
    },
    {
      id: 2,
      title: "Sistema de Análisis Estadístico",
      description: "Crear un módulo que permita visualizar tendencias, distribución geográfica y tiempos de respuesta de los programas sociales.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      details: "Aprovechar los datos organizados en el sistema de seguimiento para implementar un panel de análisis que refleje gráficamente el comportamiento de las solicitudes, los tiempos de resolución y la distribución geográfica de los beneficiarios. Esta herramienta facilitará la identificación de tendencias y necesidades, respaldando la planeación estratégica y la justificación de recursos adicionales."
    },
    {
      id: 3,
      title: "Colaboración en la Nube",
      description: "Evaluar la implementación gradual de herramientas colaborativas en línea con las medidas de seguridad adecuadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      details: "Conforme se fortalezca la infraestructura de conectividad, evaluar la migración progresiva hacia plataformas colaborativas como Google Workspace o Microsoft 365 que permitirían la actualización en tiempo real de la información y la colaboración simultánea. Esta transición requeriría un plan de capacitación específico y la implementación de protocolos de seguridad con roles y permisos diferenciados para proteger la información sensible."
    },
    {
      id: 4,
      title: "Integración Interdepartamental",
      description: "Promover la colaboración digital entre áreas municipales para crear un ecosistema de información integrado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: "La experiencia de modernización puede extenderse a otras áreas del municipio como Tesorería u Obras Públicas mediante acuerdos de colaboración. La creación de un ecosistema digital municipal facilitaría la comunicación interdepartamental, permitiría compartir información relevante y optimizaría los procesos que involucran a múltiples áreas, mejorando la gestión integral del municipio."
    },
    {
      id: 5,
      title: "Comunidad de Aprendizaje",
      description: "Establecer espacios regulares para compartir conocimientos, reconocer logros y fomentar la innovación continua.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: "Institucionalizar reuniones periódicas donde el personal pueda compartir experiencias, resolver dudas técnicas y proponer mejoras al sistema, fomentando un aprendizaje colaborativo. Complementar estas sesiones con un sistema de reconocimiento que valore tanto las contribuciones individuales como los logros del equipo, fortaleciendo la cultura de innovación y el compromiso con la mejora continua."
    }
  ];

  // Datos de aprendizajes personales
  const aprendizajes = [
    {
      title: "Gestión en Entornos Limitados",
      description: "Coordinación de recursos y planificación estratégica bajo restricciones presupuestarias y tecnológicas."
    },
    {
      title: "Soluciones Adaptativas",
      description: "Diseño e implementación de tecnologías a medida para contextos específicos y usuarios diversos."
    },
    {
      title: "Comunicación Efectiva",
      description: "Desarrollo de habilidades para transmitir conocimientos técnicos a personal sin formación especializada."
    },
    {
      title: "Resiliencia Profesional",
      description: "Capacidad para mantener la motivación y creatividad ante obstáculos y resistencias al cambio."
    }
  ];

  // Datos de desafíos superados
  const desafios = [
    {
      title: "Resistencia al Cambio",
      description: "Superado mediante: capacitación personalizada, demostraciones prácticas y estrategias de comunicación.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Infraestructura Deficiente",
      description: "Superado mediante: optimización de recursos, soluciones offline y estrategias de respaldo local.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Sostenibilidad a Largo Plazo",
      description: "Superado mediante: documentación detallada, mentorías internas y capacitación de multiplicadores.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  // Datos de logros principales
  const logros = [
    {
      title: "Digitalización Inicial",
      description: "15% de expedientes prioritarios convertidos a formato digital estructurado."
    },
    {
      title: "Capacitación del Personal",
      description: "80% del personal capacitado en habilidades digitales básicas y operación del sistema."
    },
    {
      title: "Reducción en Tiempos",
      description: "Disminución de 10% en tiempos de procesamiento de solicitudes prioritarias."
    }
  ];

  return (
    <div
      className="h-screen w-full relative text-white overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(${angle}deg, #0f172a, #1e3a8a, #312e81)`,
        backgroundSize: "400% 400%",
        transition: "background-position 0.5s ease"
      }}
    >
      {/* Elementos de fondo animados */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-400 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400 blur-3xl animate-pulse"
          style={{ animationDelay: "2.2s" }}
        ></div>
        
        {/* Elementos decorativos adicionales */}
        <div className="absolute top-40 right-32 w-16 h-16 rounded-full bg-blue-600 opacity-20"></div>
        <div className="absolute bottom-40 left-64 w-24 h-24 rounded-full border-4 border-indigo-500 opacity-20 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full border-4 border-purple-500 opacity-20 animate-ping" style={{ animationDuration: '6s' }}></div>
        
        {/* Patrones decorativos */}
        <div className="absolute top-48 right-48 w-48 h-48 opacity-10 border-2 border-dashed border-white/30 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-64 h-64 opacity-10 border-2 border-dotted border-white/30 rounded-full"></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Barra superior */}
      <div className={`relative z-10 flex justify-between items-center px-8 py-3 bg-black/20 backdrop-blur-sm ${getAnimationClass(0)}`}>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
          alt="UVEG Logo" 
          className="h-10 rounded shadow-lg"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-indigo-200">
            CONCLUSIONES Y RECOMENDACIONES
          </h1>
          <div className="h-1 w-96 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
        </div>
        <img 
          src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
          alt="Gobierno de Tlalpujahua" 
          className="h-10 rounded shadow-lg"
        />
      </div>

      {/* Panel principal con tabs laterales */}
      <div className="flex-grow flex mt-2 px-2">
        {/* Sidebar con tabs verticales */}
        <div className="w-56 bg-black/30 backdrop-blur-sm rounded-l-xl flex flex-col p-1">
          <button
            className={`flex items-center p-3 mb-1 rounded-lg text-left transition-all ${
              activeTab === 'conclusiones' 
                ? 'bg-blue-700 text-white' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('conclusiones')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Lecciones Aprendidas</span>
          </button>
          <button
            className={`flex items-center p-3 mb-1 rounded-lg text-left transition-all ${
              activeTab === 'oportunidades' 
                ? 'bg-indigo-700 text-white' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('oportunidades')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>Áreas de Oportunidad</span>
          </button>
          <button
            className={`flex items-center p-3 mb-1 rounded-lg text-left transition-all ${
              activeTab === 'propuestas' 
                ? 'bg-purple-700 text-white' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('propuestas')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Propuestas</span>
          </button>
          <button
            className={`flex items-center p-3 mb-1 rounded-lg text-left transition-all ${
              activeTab === 'reflexion' 
                ? 'bg-violet-700 text-white' 
                : 'hover:bg-white/10 text-white/80'
            }`}
            onClick={() => setActiveTab('reflexion')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>Reflexión Personal</span>
          </button>
          
          <div className="flex-grow"></div>
          
          {/* Resumen del proyecto */}
          <div className="bg-black/20 p-3 rounded-lg mb-2">
            <h3 className="font-bold text-sm text-center mb-1">Datos del Proyecto</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-white/70">Duración:</span>
                <span className="font-semibold">6 meses</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Digitalización:</span>
                <span className="font-semibold">15% completada</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Personal capacitado:</span>
                <span className="font-semibold">80%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel de contenido principal */}
        <div className="flex-grow bg-black/10 backdrop-blur-sm rounded-r-xl p-4 overflow-y-auto">
          {/* Contenido - Lecciones Aprendidas */}
          {activeTab === 'conclusiones' && (
            <div className="h-full flex flex-col">
              <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-3 border border-blue-500/30 mb-3">
                <p className="text-center text-base">
                  El proyecto ha establecido las bases para una transformación digital en el Área de Desarrollo Social, 
                  demostrando que un enfoque gradual y adaptativo puede generar cambios significativos 
                  incluso en contextos con disponibilidad limitada de recursos tecnológicos.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-3">
                {conclusiones.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className={`bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20 cursor-pointer hover:bg-blue-900/30 transition-all ${
                      hoverItem === `conc-${item.id}` ? 'ring-1 ring-blue-400' : ''
                    }`}
                    onClick={() => showDetails(item.title, item.details)}
                    onMouseEnter={() => setHoverItem(`conc-${item.id}`)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1 text-blue-100">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                {conclusiones.slice(3, 5).map((item) => (
                  <div
                    key={item.id}
                    className={`bg-blue-900/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20 cursor-pointer hover:bg-blue-900/30 transition-all ${
                      hoverItem === `conc-${item.id}` ? 'ring-1 ring-blue-400' : ''
                    }`}
                    onClick={() => showDetails(item.title, item.details)}
                    onMouseEnter={() => setHoverItem(`conc-${item.id}`)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1 text-blue-100">{item.title}</h3>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 text-blue-100">Logros Principales</h3>
              <div className="grid grid-cols-3 gap-3">
                {logros.map((logro, index) => (
                  <div key={index} className="bg-blue-800/20 border border-blue-500/20 backdrop-blur-sm p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-base font-semibold text-blue-100">{logro.title}</h4>
                    </div>
                    <p className="text-sm text-blue-50 pl-10">{logro.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex-grow mt-4">
                <div className="grid grid-cols-4 gap-3 h-full">
                  {/* Se ha modificado esta sección para que la imagen sea más grande */}
                  <div className="col-span-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-3 h-full flex flex-col items-center justify-center border border-blue-500/20">
                    <img 
                      src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/final_2.png" 
                      alt="Transformación digital final" 
                      className="mb-3 max-h-80 object-contain"  // <-- Aumentado a max-h-80
                    />
                    <p className="text-center text-sm italic">
                      "La transformación digital iniciada en el Área de Desarrollo Social no es solo un cambio tecnológico,
                      sino un proceso integral que combina capacitación, adaptación de procesos y un renovado enfoque de servicio
                      centrado en la eficiencia y la transparencia en beneficio de la comunidad."
                    </p>
                  </div>
                  <div className="bg-blue-800/20 rounded-lg border border-blue-500/20 p-3 h-full flex flex-col justify-center items-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-xs text-center">Proyecto exitoso con potencial de replicabilidad en otros municipios</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido - Áreas de Oportunidad */}
          {activeTab === 'oportunidades' && (
            <div className="h-full flex flex-col">
              <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-3 border border-indigo-500/30 mb-3">
                <p className="text-center text-base">
                  Para consolidar los avances y asegurar la sostenibilidad a largo plazo de la modernización iniciada,
                  es importante atender las siguientes áreas de oportunidad identificadas durante la implementación.
                </p>
              </div>
              
              <div className="grid grid-cols-5 gap-3 flex-grow">
                {areasOportunidad.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col bg-indigo-900/20 backdrop-blur-sm rounded-lg border border-indigo-500/20 cursor-pointer hover:bg-indigo-900/30 transition-all ${
                      hoverItem === `area-${item.id}` ? 'ring-1 ring-indigo-400' : ''
                    }`}
                    onClick={() => showDetails(item.title, item.details)}
                    onMouseEnter={() => setHoverItem(`area-${item.id}`)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <div className="p-3 flex flex-col items-center text-center flex-grow">
                      <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold mb-1 text-indigo-100">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                    <div className="bg-indigo-800/30 p-2 rounded-b-lg">
                      <span className="text-sm text-indigo-200 hover:text-indigo-100 inline-flex items-center justify-center w-full">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="col-span-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-3 border border-indigo-500/20">
                  <h3 className="text-xl font-bold mb-1 text-center text-indigo-100">Visión de Sostenibilidad</h3>
                  <p className="text-center text-base">
                    Estas áreas de oportunidad están interrelacionadas y su abordaje integral permitirá
                    garantizar que los avances conseguidos se mantengan, evolucionen y se multipliquen.
                    El desarrollo de estas áreas fortalecerá las bases para una administración pública municipal
                    más moderna, eficiente y cercana a la ciudadanía.
                  </p>
                </div>
                <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-3 border border-indigo-500/20 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-indigo-300 mb-1">5</div>
                  <div className="text-base text-center">Áreas clave para fortalecer</div>
                  <div className="text-sm text-center text-indigo-200 mt-2">Prioridad: Media-Alta</div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido - Propuestas */}
          {activeTab === 'propuestas' && (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-5 gap-3 flex-grow">
                <div className="col-span-2 bg-purple-900/20 backdrop-blur-sm rounded-xl p-3 border border-purple-500/30 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-center text-purple-100">Propuestas de Mejora</h3>
                  <p className="text-base text-center mb-3">
                    Con base en los resultados obtenidos y las áreas de oportunidad identificadas,
                    se plantean las siguientes propuestas para consolidar y ampliar la transformación
                    digital del Área de Desarrollo Social.
                  </p>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    {/* Gráfico de implementación */}
                    <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-lg p-3 border border-purple-500/20 mb-3">
                      <h4 className="font-bold text-base mb-2 text-center">Mapa de Implementación</h4>
                      <div className="relative h-48 mx-auto">
                        {/* Círculo central */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-600/70 rounded-full flex items-center justify-center text-xs text-center border-2 border-white/30">
                          Transformación Digital
                        </div>
                        
                        {/* Elementos orbitando */}
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-purple-400/30 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600/70 rounded-full flex items-center justify-center text-xs border border-white/30">Fase 1</div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-purple-400/20 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-blue-600/70 rounded-full flex items-center justify-center text-xs border border-white/30">Fase 2</div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-purple-400/10 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-violet-600/70 rounded-full flex items-center justify-center text-xs border border-white/30">Fase 3</div>
                          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600/70 rounded-full flex items-center justify-center text-xs border border-white/30">Fase 4</div>
                        </div>
                        
                        {/* Líneas de conexión */}
                        <div className="absolute top-1/2 left-1/2 w-full h-px bg-white/20 transform -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-px h-full bg-white/20 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-lg p-3 border border-purple-500/20">
                      <p className="text-sm italic text-center">
                        "El proyecto de modernización ha demostrado que, con un enfoque estructurado,
                        la combinación de formación digital, ajuste de procesos y respaldo institucional
                        puede transformar de manera relevante la administración pública local."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 grid grid-rows-5 gap-3">
                  {propuestas.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center bg-purple-900/20 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 cursor-pointer hover:bg-purple-900/30 transition-all ${
                        hoverItem === `prop-${item.id}` ? 'ring-1 ring-purple-400' : ''
                      }`}
                      onClick={() => showDetails(item.title, item.details)}
                      onMouseEnter={() => setHoverItem(`prop-${item.id}`)}
                      onMouseLeave={() => setHoverItem(null)}
                    >
                      <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1 text-purple-100">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                      <div className="ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-3 bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-3 border border-purple-500/20 flex items-center">
                <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Implementación Recomendada</h3>
                  <p className="text-base">
                    Se sugiere desarrollar estas propuestas de manera progresiva y articulada, comenzando por el Plan de Digitalización
                    Integral y la Comunidad de Aprendizaje, que brindarán las bases para el resto de iniciativas propuestas.
                    Cada elemento permitirá avanzar hacia una administración más eficiente, transparente y centrada en la ciudadanía.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contenido - Reflexión Personal */}
          {activeTab === 'reflexion' && (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {/* Columna izquierda - Aprendizajes */}
                <div className="bg-violet-900/20 backdrop-blur-sm rounded-xl p-3 border border-violet-500/30">
                  <h3 className="text-xl font-bold mb-2 text-violet-100 text-center">Aprendizajes Profesionales</h3>
                  <p className="mb-3 text-center text-base">
                    Esta experiencia de estadía profesional ha permitido aplicar conocimientos teóricos
                    a desafíos reales y desarrollar nuevas competencias prácticas en un entorno de trabajo.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {aprendizajes.map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-violet-900/40 rounded-lg p-2 transition-all duration-300 hover:scale-105"
                      >
                        <h4 className="font-bold text-sm text-violet-200 mb-1">{item.title}</h4>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3">
                    <h4 className="font-bold text-base text-center mb-2">Competencias Desarrolladas</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="bg-violet-700/50 px-2 py-1 rounded-full text-sm">Liderazgo</span>
                      <span className="bg-violet-700/50 px-2 py-1 rounded-full text-sm">Gestión de proyectos</span>
                      <span className="bg-violet-700/50 px-2 py-1 rounded-full text-sm">Resolución de problemas</span>
                      <span className="bg-violet-700/50 px-2 py-1 rounded-full text-sm">Adaptabilidad</span>
                      <span className="bg-violet-700/50 px-2 py-1 rounded-full text-sm">Innovación</span>
                    </div>
                  </div>
                </div>
                
                {/* Columna derecha - Desafíos */}
                <div className="bg-violet-900/20 backdrop-blur-sm rounded-xl p-3 border border-violet-500/30">
                  <h3 className="text-xl font-bold mb-2 text-violet-100 text-center">Desafíos Superados</h3>
                  <p className="mb-3 text-center text-base">
                    El proyecto presentó diversas situaciones que requirieron creatividad, 
                    perseverancia y adaptabilidad para resolverse efectivamente.
                  </p>
                  
                  <div className="space-y-2">
                    {desafios.map((item, index) => (
                      <div 
                        key={index}
                        className="bg-violet-900/40 rounded-lg p-2 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-red-900/50 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-violet-200 mb-1">{item.title}</h4>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-2 border border-violet-500/20">
                    <h3 className="text-base font-bold mb-1 text-center text-violet-100">Satisfacción Personal</h3>
                    <p className="text-center text-sm">
                      La experiencia ha sido gratificante al observar el impacto positivo
                      en la comunidad y en el personal, reforzando mi compromiso con la innovación
                      en el sector público y la mejora continua de los servicios a la ciudadanía.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Cita reflexiva */}
              <div className="mt-3 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-violet-900/40 backdrop-blur-sm rounded-xl p-3 border border-indigo-500/20 flex items-center">
                <svg className="w-12 h-12 text-white opacity-50 mr-3" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-base italic">
                  "Esta experiencia ha demostrado que el compromiso, la creatividad y el enfoque centrado 
                  en las necesidades de la comunidad permiten generar cambios significativos incluso con recursos limitados. 
                  La transformación digital es una herramienta para construir servicios públicos más accesibles y eficientes."
                </p>
                <div className="ml-auto pl-3 border-l border-indigo-500/30">
                  <p className="font-light text-sm">Estadía Profesional <br />Tlalpujahua 2023</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalles */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative w-full max-w-2xl rounded-xl p-6 shadow-2xl border animate-scale-in bg-gradient-to-r from-blue-900/90 to-indigo-900/90 border-blue-400/30">
            <button 
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold mb-3 text-blue-200">
              {modalContent.title}
            </h3>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/90">{modalContent.content}</p>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg font-medium transition-all text-sm"
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

export default DiapositivaConclusiones;
