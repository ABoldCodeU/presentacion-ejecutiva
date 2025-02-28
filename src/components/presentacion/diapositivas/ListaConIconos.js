import React from 'react';

const ListaConIconos = ({ 
  items, 
  tipoIcono = 'numero', // 'numero', 'check', 'alert', 'personalizado'
  colorIcono = 'blue', 
  className = "",
  tamanioIcono = 'normal', // 'pequeno', 'normal', 'grande'
  espaciado = 'normal' // 'compacto', 'normal', 'amplio'
}) => {
  // Mapeo de tamaños para clases de tamaño de iconos
  const tamanoIconoClases = {
    pequeno: { 
      contenedor: 'w-5 h-5',
      svg: 'h-4 w-4',
      texto: 'text-xs'
    },
    normal: { 
      contenedor: 'w-6 h-6',
      svg: 'h-5 w-5',
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
    amplio: 'space-y-4'
  };

  const getTamanoClase = (tipo) => tamanoIconoClases[tamanioIcono][tipo] || tamanoIconoClases.normal[tipo];
  const getEspaciadoClase = () => espaciadoClases[espaciado] || espaciadoClases.normal;

  return (
    <ul className={`${getEspaciadoClase()} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {tipoIcono === 'numero' && (
            <div className={`flex-shrink-0 ${getTamanoClase('contenedor')} bg-${colorIcono}-500 rounded-full flex items-center justify-center mr-3 mt-1`}>
              <span className={getTamanoClase('texto')}>{index + 1}</span>
            </div>
          )}
          
          {tipoIcono === 'check' && (
            <svg xmlns="http://www.w3.org/2000/svg" className={`${getTamanoClase('svg')} text-${colorIcono}-400 mr-2 mt-1 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}

          {tipoIcono === 'alert' && (
            <div className={`${getTamanoClase('contenedor')} bg-${colorIcono}-500 rounded-full flex-shrink-0 flex items-center justify-center mr-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`${getTamanoClase('svg')} text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          )}
          
          {tipoIcono === 'personalizado' && item.icono}
          
          <div>
            {typeof item === 'string' ? (
              <p>{item}</p>
            ) : (
              <>
                {item.titulo && <p className="font-medium">{item.titulo}</p>}
                {item.descripcion && <p className="text-sm opacity-80 mt-1">{item.descripcion}</p>}
                {item.contenido}
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaConIconos;