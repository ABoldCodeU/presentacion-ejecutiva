import React from 'react';

const DiapositivaPortada = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white p-8 overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Líneas decorativas animadas */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-in-left"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-slide-in-right delay-300"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-slide-in-top delay-100"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-slide-in-bottom delay-200"></div>
        </div>
        
        {/* Círculos decorativos con animación */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-600 opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-600 opacity-10 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 opacity-5 animate-ping" style={{animationDuration: '4s'}}></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Logos institucionales */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/uveg_logo.jpg" 
              alt="UVEG Logo" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal_gob.png" 
              alt="Gobierno de Tlalpujahua" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Contenido principal */}
          <div className="md:w-2/3 text-left">
            {/* Título principal con efecto de aparición y sombra para mejor legibilidad */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Presentación Ejecutiva
              </span>
            </h1>
            
            {/* Subtítulo con efecto de aparición retrasado */}
            <h2 className="text-2xl md:text-3xl font-light mb-8 leading-relaxed animate-fade-in-delay">
              <span className="border-l-4 border-blue-400 pl-4">
                Modernización Administrativa en el Área de Desarrollo Social
              </span>
            </h2>
            
            {/* Datos de identificación con fondo de cristal mejorado */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md shadow-xl border border-white border-opacity-10 rounded-xl p-8 animate-fade-in-delay-2">
              <div className="flex items-center mb-6">
                <div className="w-2 h-10 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-blue-200">
                  Estadía Profesional
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Estudiante</p>
                      <p className="text-lg font-semibold">Alan Alfonso Boldo Reyes</p>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Matrícula</p>
                      <p className="text-lg font-semibold">22018548</p>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Asesor Académico</p>
                      <p className="text-lg font-semibold">José David Filoteo Razo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Asesor Organizacional</p>
                      <p className="text-lg font-semibold">Lic. Jovany García García</p>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Organización</p>
                      <p className="text-lg font-semibold">H. Ayuntamiento de Tlalpujahua</p>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300 opacity-80 mb-1">Fecha</p>
                      <p className="text-lg font-semibold">Febrero 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo del municipio */}
          <div className="md:w-1/3 flex flex-col items-center animate-fade-in-delay-3">
            <div className="w-56 h-56 relative p-2 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-30 animate-pulse"></div>
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-full backdrop-blur-sm border border-white border-opacity-20">
                <img 
                  src="https://raw.githubusercontent.com/ABoldCodeU/imagenes-para-proyectos/main/imagenes/tlal.png" 
                  alt="Tlalpujahua" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-blue-200">Pueblo Mágico</p>
          </div>
        </div>
        
        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
      </div>
    </div>
  );
};

export default DiapositivaPortada;

/* Nota: Asegúrate de tener las clases de animación que compartiste en tu CSS:
  .animate-fade-in
  .animate-fade-in-delay
  .animate-fade-in-delay-2
  .animate-fade-in-delay-3
  .animate-slide-in-left
  .animate-slide-in-right
  .animate-slide-in-top
  .animate-slide-in-bottom
  .delay-100
  .delay-200
  .delay-300
*/