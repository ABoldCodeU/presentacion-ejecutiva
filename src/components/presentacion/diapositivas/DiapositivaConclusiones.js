import React from 'react';

const DiapositivaConclusiones = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-slide-in-top">
        Conclusiones y Reflexión
      </h1>
      
      <div className="flex flex-grow">
        <div className="w-full grid grid-cols-2 gap-8">
          {/* Conclusiones */}
          <div className="animate-slide-in-left">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-blue-400">
              Conclusiones
            </h2>
            
            <div className="space-y-4 pr-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border-l-4 border-blue-500">
                <p>La digitalización progresiva ha demostrado ser un catalizador efectivo para la modernización administrativa, mejorando la eficiencia y transparencia del Área de Desarrollo Social.</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border-l-4 border-blue-500">
                <p>El capital humano y su capacitación son factores críticos para el éxito de cualquier transformación tecnológica, especialmente en entornos con recursos limitados.</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border-l-4 border-blue-500">
                <p>Las soluciones de bajo costo y adaptadas al contexto local pueden generar impactos significativos, incluso con restricciones presupuestarias y tecnológicas.</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Logros del Proyecto</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digitalización inicial completada en programas críticos</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reducción del 10% en tiempos de respuesta</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creación de estructura organizativa estandarizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Reflexión */}
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-purple-400">
              Reflexión Personal
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Aprendizajes</h3>
                <p className="mb-4">Esta experiencia de estadía profesional ha sido extremadamente enriquecedora, permitiéndome aplicar conocimientos teóricos a desafíos reales y desarrollar nuevas habilidades.</p>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded-lg text-sm">
                    Gestión de proyectos en entornos de recursos limitados
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded-lg text-sm">
                    Implementación de soluciones tecnológicas adaptadas
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded-lg text-sm">
                    Desarrollo de competencias comunicativas y colaborativas
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded-lg text-sm">
                    Capacidad de adaptación ante desafíos inesperados
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Desafíos Superados</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Resistencia al cambio tecnológico</p>
                      <p className="text-sm opacity-80 mt-1">Superado mediante: capacitación personalizada y demostraciones de beneficios inmediatos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Limitaciones tecnológicas severas</p>
                      <p className="text-sm opacity-80 mt-1">Superado mediante: optimización creativa de recursos y soluciones adaptadas al contexto</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Cita final */}
          <div className="col-span-2 mt-6 animate-slide-in-bottom">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-xl text-center">
              <svg className="w-10 h-10 text-white opacity-50 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic">
                "Esta experiencia ha demostrado que, incluso con recursos limitados, es posible generar cambios significativos cuando existe voluntad, creatividad y un enfoque centrado en las necesidades de la comunidad. La transformación digital no es solo una cuestión tecnológica, sino un camino hacia servicios públicos más humanos y eficientes."
              </p>
              <p className="mt-4 font-light">— Estadía Profesional en Tlalpujahua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiapositivaConclusiones;