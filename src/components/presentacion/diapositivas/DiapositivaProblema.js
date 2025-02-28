import React from 'react';
import SeccionDiapositiva from './SeccionDiapositiva';
import ListaConIconos from './ListaConIconos';
import TarjetaInfo from './TarjetaInfo';

const DiapositivaProblema = () => {
  // Datos estructurados para la diapositiva
  const desafios = [
    "Dependencia de archivos en papel y hojas de cálculo dispersas que complicaban la consulta y actualización de información",
    "Infraestructura tecnológica limitada con equipos obsoletos y conectividad inestable",
    "Disparidad en las competencias digitales del personal y falta de capacitación adecuada"
  ];

  const limitaciones = [
    "Procesos manuales sin digitalizar",
    "Falta de un sistema integral de seguimiento",
    "Equipos de cómputo obsoletos",
    "Falta de capacitación tecnológica"
  ];

  const diagnostico = [
    "Solo 3 computadoras (2 con limitaciones severas)",
    "Conexión a internet inestable (2Mbps)",
    "80% de los registros en formato papel",
    "Promedio de competencias digitales: 40%"
  ];

  const impacto = "Demoras en la entrega de apoyos sociales a familias en situación de vulnerabilidad, afectando a más de 2,000 beneficiarios potenciales.";

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-800 to-orange-700 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Planteamiento del Problema
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-1/2 flex flex-col justify-center pr-8 animate-slide-in-left">
          <div className="bg-black bg-opacity-30 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-xl mb-6">
              El Área de Desarrollo Social enfrentaba los siguientes desafíos:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm">1</span>
                </div>
                <p>Dependencia de archivos en papel y hojas de cálculo dispersas que complicaban la consulta y actualización de información</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm">2</span>
                </div>
                <p>Infraestructura tecnológica limitada con equipos obsoletos y conectividad inestable</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm">3</span>
                </div>
                <p>Disparidad en las competencias digitales del personal y falta de capacitación adecuada</p>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
              <p className="text-lg font-semibold">Impacto Negativo:</p>
              <p className="mt-2">Tiempos de respuesta prolongados, duplicación de esfuerzos, errores en el registro de datos y dificultades para monitorear el impacto de los programas sociales, afectando directamente a la población vulnerable.</p>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 flex items-center justify-center animate-slide-in-right">
          <div className="w-full h-4/5 bg-white bg-opacity-10 rounded-xl overflow-hidden p-6">
            <div className="h-full flex flex-col justify-center space-y-6">
              <div className="bg-red-800 bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Principales Limitaciones</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Procesos manuales sin digitalizar</li>
                  <li>Falta de un sistema integral de seguimiento</li>
                  <li>Equipos de cómputo obsoletos</li>
                  <li>Falta de capacitación tecnológica</li>
                </ul>
              </div>
              
              <div className="bg-red-800 bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Diagnóstico Inicial</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Solo 3 computadoras (2 con limitaciones severas)</li>
                  <li>Conexión a internet inestable (2Mbps)</li>
                  <li>80% de los registros en formato papel</li>
                  <li>Promedio de competencias digitales: 40%</li>
                </ul>
              </div>
              
              <div className="bg-red-800 bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Impacto en la Comunidad</h3>
                <p>Demoras en la entrega de apoyos sociales a familias en situación de vulnerabilidad, afectando a más de 2,000 beneficiarios potenciales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaProblema;