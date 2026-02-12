const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let saldoActual = 1000;
const PIN_SISTEMA = "1234";

// =========================================================
// BLOQUE 1: GESTIÓN DE ACCESO (LOGIN)
// Tareas: Validar PIN, contar intentos y bloquear acceso.
// =========================================================
function flujoLogin() {
    // ESCRIBE TU CÓDIGO AQUÍ
}


// =========================================================
// BLOQUE 2: MENÚ E INTERACCIÓN DE USUARIO
// Tareas: Mostrar opciones visuales y capturar la entrada del usuario.
// =========================================================
function mostrarMenu() {
    // ESCRIBE TU CÓDIGO AQUÍ
}


// =========================================================
// BLOQUE 3: LÓGICA DE DEPÓSITOS Y RETIROS
// Tareas: Realizar cálculos de saldo y validar montos ingresados.
// =========================================================
function procesarTransaccion(tipo) {
    // ESCRIBE TU CÓDIGO AQUÍ
}


// =========================================================
// BLOQUE 4: CONSULTAS Y CIERRE
// Tareas: Mostrar saldo actual y finalizar la sesión de forma segura.
// =========================================================
function finalizarSesion() {
    console.log("\nCerrando sesión...");
    console.log("¡Gracias por usar nuestro cajero!");
    rl.close();
}


// INICIO DEL PROGRAMA
console.log("--- BIENVENIDO AL CAJERO AUTOMATICO ---");
flujoLogin(); 