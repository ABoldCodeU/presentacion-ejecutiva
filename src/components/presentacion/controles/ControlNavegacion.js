import React from 'react';

const ControlNavegacion = ({ 
  anteriorDiapositiva, 
  siguienteDiapositiva, 
  toggleReproduccion,
  reproduccionAutomatica,
  diapositivaActiva,
  totalDiapositivas
}) => {
  return (
    <div className="flex items-center space-x-3">
      <button 
        onClick={anteriorDiapositiva} 
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
        disabled={diapositivaActiva === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={toggleReproduccion} 
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
      >
        {reproduccionAutomatica ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      
      <button 
        onClick={siguienteDiapositiva} 
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
        disabled={diapositivaActiva === totalDiapositivas - 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ControlNavegacion;