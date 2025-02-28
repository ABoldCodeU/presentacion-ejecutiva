import React, { useState, useEffect, useRef } from 'react';

// Importamos todas las diapositivas
import DiapositivaPortada from './diapositivas/DiapositivaPortada';
import DiapositivaContenido from './diapositivas/DiapositivaContenido';
import DiapositivaProblema from './diapositivas/DiapositivaProblema';
import DiapositivaSolucion from './diapositivas/DiapositivaSolucion';
import DiapositivaFundamento from './diapositivas/DiapositivaFundamento';
import DiapositivaMetodologia from './diapositivas/DiapositivaMetodologia';
import DiapositivaResultados from './diapositivas/DiapositivaResultados';
import DiapositivaBeneficios from './diapositivas/DiapositivaBeneficios';
import DiapositivaConclusiones from './diapositivas/DiapositivaConclusiones';

// Importamos los controles
import ControlNavegacion from './controles/ControlNavegacion';
import IndicadorDiapositiva from './controles/IndicadorDiapositiva';
import MiniaturasDiapositivas from './controles/MiniaturasDiapositivas';

// Importamos los estilos CSS
import '../../styles/animaciones.css';

const PresentacionPowerPoint = () => {
  // Estados para manejar la presentación
  const [diapositivaActiva, setDiapositivaActiva] = useState(0);
  const [reproduccionAutomatica, setReproduccionAutomatica] = useState(false);
  const [tiempoTransicion] = useState(10); // segundos - eliminamos el set para evitar la advertencia
  
  // Referencias
  const intervalRef = useRef(null);
  const totalDiapositivas = 9;

  // Controlar la reproducción automática
  useEffect(() => {
    if (reproduccionAutomatica) {
      intervalRef.current = setInterval(() => {
        setDiapositivaActiva((prev) => (prev < totalDiapositivas - 1 ? prev + 1 : 0));
      }, tiempoTransicion * 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [reproduccionAutomatica, tiempoTransicion]);

  // Funciones de navegación
  const siguienteDiapositiva = () => {
    if (diapositivaActiva < totalDiapositivas - 1) {
      setDiapositivaActiva(diapositivaActiva + 1);
    }
  };

  const anteriorDiapositiva = () => {
    if (diapositivaActiva > 0) {
      setDiapositivaActiva(diapositivaActiva - 1);
    }
  };

  const toggleReproduccion = () => {
    setReproduccionAutomatica(!reproduccionAutomatica);
  };

  const irADiapositiva = (index) => {
    setDiapositivaActiva(index);
  };

  // Array de componentes de diapositivas
  const diapositivas = [
    <DiapositivaPortada key="portada" />,
    <DiapositivaContenido key="contenido" irADiapositiva={irADiapositiva} />,
    <DiapositivaProblema key="problema" />,
    <DiapositivaSolucion key="solucion" />,
    <DiapositivaFundamento key="fundamento" />,
    <DiapositivaMetodologia key="metodologia" />,
    <DiapositivaResultados key="resultados" />,
    <DiapositivaBeneficios key="beneficios" />,
    <DiapositivaConclusiones key="conclusiones" />,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Diapositiva actual con efecto de transición */}
      <div className="w-full h-full transition-transform duration-700 ease-in-out">
        {diapositivas[diapositivaActiva]}
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-black bg-opacity-70 text-white z-10">
        <ControlNavegacion 
          anteriorDiapositiva={anteriorDiapositiva}
          siguienteDiapositiva={siguienteDiapositiva}
          toggleReproduccion={toggleReproduccion}
          reproduccionAutomatica={reproduccionAutomatica}
          diapositivaActiva={diapositivaActiva}
          totalDiapositivas={totalDiapositivas}
        />
        
        <IndicadorDiapositiva 
          actual={diapositivaActiva + 1} 
          total={totalDiapositivas} 
        />
        
        <MiniaturasDiapositivas 
          cantidad={totalDiapositivas}
          activa={diapositivaActiva}
          irADiapositiva={irADiapositiva}
        />
      </div>
    </div>
  );
};

export default PresentacionPowerPoint;