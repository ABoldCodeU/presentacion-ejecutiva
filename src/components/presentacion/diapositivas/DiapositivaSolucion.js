import React from 'react';

const DiapositivaSolucion = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-green-800 to-teal-700 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Propuesta de Solución y Objetivo
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-1/2 flex items-center justify-center animate-slide-in-left">
          <div className="w-full h-4/5 bg-white bg-opacity-10 rounded-xl overflow-hidden p-6">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-center">Componentes de la Solución</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Digitalización de Procesos</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Diseño de formularios digitales</li>
                    <li>Migración de datos a hojas de cálculo</li>
                    <li>Creación de sistema de seguimiento</li>
                    <li>Implementación de protocolos de respaldo</li>
                  </ul>
                </div>
                
                <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Optimización Tecnológica</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Mantenimiento de equipos existentes</li>
                    <li>Uso de herramientas en la nube</li>
                    <li>Implementación de software libre</li>
                    <li>Mejora de la infraestructura de red</li>
                  </ul>
                </div>
                
                <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">3. Capacitación del Personal</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Evaluación de competencias digitales</li>
                    <li>Programa de formación escalonado</li>
                    <li>Mentoría interna y acompañamiento</li>
                    <li>Evaluación continua de avances</li>
                  </ul>
                </div>
                
                <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">4. Estandarización de Procesos</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Creación de manuales de procedimientos</li>
                    <li>Diseño de flujos de trabajo optimizados</li>
                    <li>Implementación de formatos uniformes</li>
                    <li>Establecimiento de indicadores de desempeño</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center mt-6 text-white opacity-80">
                Una solución integral adaptada a las necesidades y recursos locales
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 flex flex-col justify-center pl-8 animate-slide-in-right">
          <div className="bg-black bg-opacity-30 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Solución Propuesta</h2>
            <p className="text-xl mb-6">
              Implementación de mejoras graduales y sostenibles en los procesos administrativos del Área de Desarrollo Social, utilizando tecnologías accesibles para aumentar la eficiencia en la gestión de programas sociales.
            </p>
            
            <div className="mb-6 p-4 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold">Objetivo General</h3>
              <p className="mt-2">Mejorar la calidad del servicio a la comunidad mediante la digitalización de procesos, capacitación del personal y optimización de recursos existentes.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Objetivos Específicos</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">1</span>
                </div>
                <p>Digitalizar el 15% de los registros de beneficiarios de los programas más críticos</p>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">2</span>
                </div>
                <p>Capacitar al 80% del personal en habilidades informáticas básicas</p>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">3</span>
                </div>
                <p>Reducir los tiempos de respuesta en al menos un 20% en nueve meses</p>
              </li>
            </ul>
            
            <div className="mt-6 text-right">
              <p className="inline-block bg-green-600 px-4 py-2 rounded-lg">
                Duración: 6 meses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaSolucion;