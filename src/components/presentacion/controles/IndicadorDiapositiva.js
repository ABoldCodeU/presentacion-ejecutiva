import React from 'react';

const IndicadorDiapositiva = ({ actual, total }) => {
  return (
    <div className="text-sm">
      {actual} / {total}
    </div>
  );
};

export default IndicadorDiapositiva;