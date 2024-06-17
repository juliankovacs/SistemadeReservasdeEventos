import { Evento } from './evento';
import { SistemaReservas } from './sistemaReservas';

function main() {
    const sistema = new SistemaReservas();

    const evento1 = new Evento("Concierto Rock", new Date("2024-07-01"), 100);
    const evento2 = new Evento("Obra de Teatro", new Date("2024-08-15"), 50);

    //------------------------------Agregar eventos al sistema de reservas---------------------------------
    sistema.agregarEvento(evento1);
    sistema.agregarEvento(evento2);

    //--------------------------------Listar eventos ordenados por fecha---------------------------------
    console.log("Lista de eventos ordenados por fecha:");
    sistema.listarEventosOrdenadosPorFecha();

    //------------------------------Mostrar disponibilidad antes de reservar-----------------------------
    console.log(`Disponibilidad para Concierto Rock: ${evento1.disponibilidad()}`);
    console.log(`Disponibilidad para Obra de Teatro: ${evento2.disponibilidad()}`);

    //---------------------------------Realizar una reserva----------------------------------------------
    const reservaExitosa = sistema.realizarReserva("Concierto Rock", 10);
    if (reservaExitosa) {
        console.log("Reserva realizada con éxito.");
    } else {
        console.log("No se pudo realizar la reserva.");
    }

    //-----------------------Cancelar una reserva--------------------------------------------------------
    const cancelacionExitosa = sistema.cancelarReserva("Concierto Rock", 5);
    if (cancelacionExitosa) {
        console.log("Reserva cancelada con éxito.");
    } else {
        console.log("No se pudo cancelar la reserva.");
    }

    //--------------------Listar eventos después de las reservas y cancelaciones--------------------------
    console.log("Lista de eventos después de las reservas y cancelaciones:");
    sistema.listarEventosOrdenadosPorFecha();
}

main();
