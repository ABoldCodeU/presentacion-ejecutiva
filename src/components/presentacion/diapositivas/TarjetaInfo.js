import React from 'react';

const TarjetaInfo = ({ 
  titulo, 
  contenido, 
  color = "blue", 
  icono,
  className = "",
  animacion = "",
  bordeIzquierdo = false,
  opacidadFondo = "30",
  centrarTitulo = false
}) => {
  // Determinar los estilos de borde
  const estilosBorde = bordeIzquierdo 
    ? `border-l-4 border-${color}-500` 
    : '';
  
  return (
    <div className={`bg-${color}-800 bg-opacity-${opacidadFondo} p-4 rounded-lg backdrop-blur-sm ${estilosBorde} ${className} ${animacion}`}>
      {titulo && (
        <h3 className={`font-semibold mb-2 ${centrarTitulo ? 'text-center' : ''}`}>
          {titulo}
        </h3>
      )}
      
      {contenido && (
        typeof contenido === 'string' ? (
          <p className="mt-1">{contenido}</p>
        ) : Array.isArray(contenido) ? (
          <ul className="list-disc pl-5 space-y-1">
            {contenido.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : contenido
      )}
      
      {icono && (
        <div className="mt-2 flex justify-center">
          {icono}
        </div>
      )}
    </div>
  );
};

export default TarjetaInfo;