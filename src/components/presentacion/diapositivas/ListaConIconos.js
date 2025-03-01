import React from 'react';

/**
 * Componente ListaConIconos mejorado
 * 
 * @param {Object} props - Props del componente
 * @param {Array} props.items - Lista de elementos a mostrar (strings u objetos)
 * @param {string} props.tipoIcono - Tipo de icono a mostrar: 'numero', 'check', 'alert', 'dot', 'personalizado'
 * @param {string} props.colorIcono - Color base para los iconos (Ej: 'blue', 'green', 'red')
 * @param {string} props.tamanioIcono - Tamaño de los iconos: 'pequeno', 'normal', 'grande'
 * @param {string} props.espaciado - Espaciado entre elementos: 'compacto', 'normal', 'amplio'
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.animado - Si debe usar animación en los elementos de la lista
 * @param {string} props.tipoAnimacion - Tipo de animación: 'fade', 'slide-left', 'slide-right', 'slide-top', 'slide-bottom' 
 * @param {boolean} props.interactivo - Si los elementos deben tener efectos al hacer hover
 * @param {boolean} props.bordeSuave - Si se debe mostrar un borde suave entre elementos
 * @param {boolean} props.fondoAlternado - Si se debe alternar el fondo de los elementos
 * @param {Function} props.onClick - Función a ejecutar al hacer clic en un elemento
 * @returns {JSX.Element}
 */
const ListaConIconos = ({
  items = [],
  tipoIcono = 'numero', // 'numero', 'check', 'alert', 'dot', 'personalizado'
  colorIcono = 'blue',
  tamanioIcono = 'normal', // 'pequeno', 'normal', 'grande'
  espaciado = 'normal', // 'compacto', 'normal', 'amplio'
  className = "",
  animado = false,
  tipoAnimacion = 'fade', // 'fade', 'slide-left', 'slide-right', 'slide-top', 'slide-bottom'
  interactivo = false,
  bordeSuave = false,
  fondoAlternado = false,
  onClick = null
}) => {
  // Mapeo de tamaños para clases de tamaño de iconos
  const tamanoIconoClases = {
    pequeno: {
      contenedor: 'w-5 h-5',
      svg: 'h-3 w-3',
      texto: 'text-xs'
    },
    normal: {
      contenedor: 'w-6 h-6',
      svg: 'h-4 w-4',
      texto: 'text-sm'
    },
    grande: {
      contenedor: 'w-10 h-10',
      svg: 'h-6 w-6',
      texto: 'text-base'
    }
  };
  
  // Mapeo para clases de espaciado
  const espaciadoClases = {
    compacto: 'space-y-1',
    normal: 'space-y-3',
    amplio: 'space-y-5'
  };
  
  // Mapeo para clases de animación
  const animacionClases = {
    'fade': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'slide-top': 'animate-slide-in-top', 
    'slide-bottom': 'animate-slide-in-bottom'
  };
  
  // Funciones auxiliares para obtener clases
  const getTamanoClase = (tipo) => tamanoIconoClases[tamanioIcono]?.[tipo] || tamanoIconoClases.normal[tipo];
  const getEspaciadoClase = () => espaciadoClases[espaciado] || espaciadoClases.normal;
  const getAnimacionClase = () => animado ? animacionClases[tipoAnimacion] || 'animate-fade-in' : '';
  
  // Determinar clases para elementos interactivos
  const getInteractiveClasses = interactivo 
    ? 'transition-all duration-200 hover:bg-opacity-10 hover:bg-gray-500 cursor-pointer'
    : '';
    
  return (
    <ul className={`${getEspaciadoClase()} ${className}`} role="list">
      {items.map((item, index) => {
        // Determinar retraso de animación basado en el índice
        const delayClass = animado ? `delay-${(index % 5) * 100}` : '';
        
        // Determinar clase de fondo alternado
        const alternatingBgClass = fondoAlternado && index % 2 === 1 
          ? 'bg-gray-100 bg-opacity-5' 
          : '';
          
        // Determinar clase de borde
        const borderClass = bordeSuave && index !== items.length - 1
          ? 'border-b border-gray-200 border-opacity-10 pb-2'
          : '';
          
        return (
          <li 
            key={index} 
            className={`flex items-start ${getAnimacionClase()} ${delayClass} ${alternatingBgClass} ${borderClass} ${getInteractiveClasses} rounded-md ${interactivo ? 'p-2 -ml-2' : ''}`}
            onClick={onClick ? () => onClick(item, index) : undefined}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
          >
            {/* Icono tipo número */}
            {tipoIcono === 'numero' && (
              <div className={`flex-shrink-0 ${getTamanoClase('contenedor')} bg-${colorIcono}-500 bg-opacity-90 rounded-full flex items-center justify-center mr-3 mt-0.5`}>
                <span className={`${getTamanoClase('texto')} text-white font-medium`}>{index + 1}</span>
              </div>
            )}
            
            {/* Icono tipo check */}
            {tipoIcono === 'check' && (
              <div className={`flex-shrink-0 ${getTamanoClase('contenedor')} bg-${colorIcono}-500 bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-0.5`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`${getTamanoClase('svg')} text-${colorIcono}-500`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            
            {/* Icono tipo alert */}
            {tipoIcono === 'alert' && (
              <div className={`flex-shrink-0 ${getTamanoClase('contenedor')} bg-${colorIcono}-500 rounded-full flex items-center justify-center mr-3 mt-0.5`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`${getTamanoClase('svg')} text-white`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            )}
            
            {/* Icono tipo dot (punto) */}
            {tipoIcono === 'dot' && (
              <div className={`flex-shrink-0 h-2 w-2 bg-${colorIcono}-500 rounded-full mr-3 mt-2`}></div>
            )}
            
            {/* Icono personalizado */}
            {tipoIcono === 'personalizado' && item.icono && (
              <div className="flex-shrink-0 mr-3 mt-0.5">
                {item.icono}
              </div>
            )}
            
            {/* Contenido del elemento */}
            <div className={`flex-1 ${onClick ? 'min-w-0' : ''}`}>
              {typeof item === 'string' ? (
                <p className="text-sm">{item}</p>
              ) : (
                <>
                  {item.titulo && <p className="font-medium text-sm">{item.titulo}</p>}
                  {item.descripcion && (
                    <p className="text-sm opacity-80 mt-1 font-light">{item.descripcion}</p>
                  )}
                  {item.contenido}
                </>
              )}
            </div>
            
            {/* Flecha o indicador para elementos interactivos */}
            {interactivo && onClick && (
              <div className={`flex-shrink-0 ml-2 text-${colorIcono}-400 opacity-70`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

/**
 * Ejemplo de uso:
 * 
 * // Lista simple
 * <ListaConIconos 
 *   items={["Elemento 1", "Elemento 2", "Elemento 3"]} 
 * />
 * 
 * // Lista con objetos
 * <ListaConIconos 
 *   items={[
 *     { titulo: "Elemento 1", descripcion: "Descripción del elemento 1" },
 *     { titulo: "Elemento 2", descripcion: "Descripción del elemento 2" }
 *   ]} 
 *   tipoIcono="check"
 *   colorIcono="green"
 * />
 * 
 * // Lista con iconos personalizados
 * <ListaConIconos 
 *   items={[
 *     { 
 *       titulo: "Elemento 1", 
 *       descripcion: "Descripción del elemento 1",
 *       icono: <MiComponenteIcono color="red" />
 *     }
 *   ]} 
 *   tipoIcono="personalizado"
 * />
 * 
 * // Lista animada e interactiva
 * <ListaConIconos 
 *   items={["Elemento 1", "Elemento 2", "Elemento 3"]} 
 *   animado={true}
 *   tipoAnimacion="slide-left"
 *   interactivo={true}
 *   onClick={(item, index) => console.log(`Clic en ${item} (índice: ${index})`)}
 * />
 */

export default ListaConIconos;