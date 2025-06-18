# Sistema de Mensajes Motivacionales por Edad

Un programa simple en JavaScript que muestra mensajes personalizados según la edad del usuario, con validación de entrada y mensajes motivacionales.

## Características principales

- Interfaz interactiva con `prompt()` y `alert()`
- Nombre de usuario opcional (valor por defecto: "Amigo")
- Validación estricta de edad (solo números enteros positivos 1-120)
- Mensajes motivacionales personalizados:
  - Para menores de 18 años
  - Para mayores o iguales a 18 años
-  Mensajes de error claros para entradas inválidas

## Cómo usar

1. **Ejecución en navegador:**
   - Copia el código JavaScript
   - Abre la consola del navegador (F12)
   - Pega el código y presiona Enter

2. **Ejecución con HTML:**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Sistema de Mensajes por Edad</title>
   </head>
   <body>
       <script src="mensajes-edad.js"></script>
   </body>
   </html>

3. **Ejemplos:**
A. Entrada:
  Nombre: (vacío)
  Edad: 16

Salida:
  ¡Hola! 
  Con tus 16 años tienes todo un futuro por delante. 
  ¡Sigue aprendiendo y creciendo! 
  Cada línea de código que escribes te acerca a tus sueños.

B. Entrada:
  Nombre: María
  Edad: 25

Salida:
  ¡Hola María! 
  Con tus 25 años tienes una gran experiencia de vida. 
  El mundo de la programación está lleno de oportunidades para ti. 
  ¡Sigue adelante y alcanza tus metas!

C. Entrada:
  Edad: "dieciséis"

Salida:
  Por favor ingresa solo números enteros positivos. Ejemplo: 16  