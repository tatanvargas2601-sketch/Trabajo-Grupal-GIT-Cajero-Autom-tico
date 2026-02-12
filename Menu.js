function mostrarMenu() {
    console.log("\n===== MENÚ PRINCIPAL =====");
    console.log("1. Consultar saldo");
    console.log("2. Depositar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                console.log(`Su saldo actual es: $${saldoActual}`);
                mostrarMenu();
                break;
            case "2":
                procesarTransaccion("deposito");
                break;
            case "3":
                procesarTransaccion("retiro");
                break;
            case "4":
                finalizarSesion();
                break;
            default:
                console.log("Opción inválida ");
                mostrarMenu();
        }
    });
}
