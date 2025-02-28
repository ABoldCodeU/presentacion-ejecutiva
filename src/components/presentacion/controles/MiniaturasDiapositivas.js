import React from 'react';

const MiniaturasDiapositivas = ({ cantidad, activa, irADiapositiva }) => {
  return (
    <div className="hidden md:flex space-x-2">
      {Array.from({ length: cantidad }).map((_, index) => (
        <button
          key={index}
          onClick={() => irADiapositiva(index)}
          className={`w-3 h-3 rounded-full ${
            index === activa ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          aria-label={`Ir a diapositiva ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default MiniaturasDiapositivas;