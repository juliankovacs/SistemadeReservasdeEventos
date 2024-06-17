import { Evento } from './evento';

export class SistemaReservas {
    eventos: Array<Evento>;

    constructor() {
        this.eventos = [];
    }

    agregarEvento(evento: Evento): void {
        this.eventos.push(evento);
    }

    listarEventosOrdenadosPorFecha(): void {
        this.eventos.sort((a, b) => a.fecha.getTime() - b.fecha.getTime()); //la funcion sort sirve para ordenar los elementos del array eventos
        this.eventos.forEach(evento => {
            console.log(`Nombre: ${evento.nombre}`);
            console.log(`Fecha: ${evento.fecha}`);
            console.log(`Capacidad Máxima: ${evento.capacidadMaxima}`);
            console.log(`Reservas: ${evento.reservas}`);
            console.log(`Disponibilidad: ${evento.disponibilidad()}`);
            console.log('---'); 
        });
    }

    realizarReserva(nombre: string, cantidad: number): boolean {
        const evento = this.eventos.find(e => e.nombre === nombre);
        if (evento) {
            if (evento.disponibilidad() >= cantidad) {
                return evento.reservar(cantidad);
            } else {
                console.log(`No hay suficientes entradas disponibles para el evento '${nombre}'.`);
                return false;
            }
        }
        console.log(`No se encontró el evento '${nombre}' para realizar la reserva.`);
        return false;
    }

    cancelarReserva(nombre: string, cantidad: number): boolean {
        const evento = this.eventos.find(e => e.nombre === nombre);
        if (evento) {
            return evento.cancelarReserva(cantidad);
        }
        console.log(`No se encontró el evento '${nombre}' para cancelar la reserva.`);
        return false;
    }
}
