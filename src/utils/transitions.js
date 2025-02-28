/**
 * Utilidades para animaciones y transiciones
 */

/**
 * Genera clases de animación con retrasos secuenciales
 * @param {string} baseAnimation - Nombre de la animación base (ej: 'animate-fade-in')
 * @param {number} count - Número de elementos a animar
 * @param {number} delayStep - Incremento de retraso entre elementos (en décimas de segundo)
 * @returns {Array} - Array de strings con clases de animación
 */
export const getSequentialAnimations = (baseAnimation, count, delayStep = 1) => {
    const animations = [];
    for (let i = 0; i < count; i++) {
      animations.push(`${baseAnimation} delay-${i * delayStep}00`);
    }
    return animations;
  };
  
  /**
   * Obtiene un color para un valor en una escala
   * Útil para mapear valores a colores (ej: porcentajes para un mapa de calor)
   * @param {number} value - Valor a representar (entre min y max)
   * @param {number} min - Valor mínimo
   * @param {number} max - Valor máximo
   * @param {string} lowColor - Color para valores bajos (ej: 'blue-100')
   * @param {string} highColor - Color para valores altos (ej: 'blue-900')
   * @returns {string} - Clase de color Tailwind
   */
  export const getColorForValue = (value, min, max, lowColor = 'blue-100', highColor = 'blue-900') => {
    // Determinar cuál es el color base
    const baseColor = lowColor.split('-')[0];
    
    // Calcular intensidad en escala 1-9 para Tailwind
    const intensity = Math.floor(((value - min) / (max - min)) * 8) + 1;
    
    return `${baseColor}-${intensity * 100}`;
  };
  
  /**
   * Retrasa la ejecución de una función
   * @param {Function} fn - Función a ejecutar
   * @param {number} ms - Milisegundos de retraso
   */
  export const delay = (fn, ms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = fn();
        resolve(result);
      }, ms);
    });
  };