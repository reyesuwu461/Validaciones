/**
 * Programa que muestra mensajes motivacionales según la edad
 * - Nombre opcional (acepta cualquier entrada)
 * - Valida que la edad sea número entero positivo (1-120)
 * - Mensajes personalizados para menores y mayores de edad
 */

// Obtener datos del usuario
const nombreUsuario = prompt("¿Cómo te llamas? (opcional)");
const edadIngresada = prompt("Por favor, ingresa tu edad:");

// Validar la edad
if (!/^\d+$/.test(edadIngresada)) {
    alert("Por favor ingresa solo números enteros positivos.");
} else {
    const edad = parseInt(edadIngresada);
    
    if (edad < 1 || edad > 120) {
        alert("La edad debe ser entre 1 y 120 años");
    } else if (edad < 18) {
        // Mensaje motivacional para menores de edad
        alert(`¡Hola${nombreUsuario}! 
        Con tus ${edad} años tienes todo un futuro por delante. 
        ¡Sigue aprendiendo y creciendo! 
        Cada línea de código que escribes te acerca a tus sueños.`);
    } else {
        // Mensaje motivacional para mayores de edad
        alert(`¡Hola ${nombreUsuario}! 
        Con tus ${edad} años tienes una gran experiencia de vida. 
        El mundo de la programación está lleno de oportunidades para ti. 
        ¡Sigue adelante y alcanza tus metas!`);
    }
}