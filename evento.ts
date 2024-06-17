export class Evento {
    nombre: string;
    fecha: Date;
    capacidadMaxima: number;
    reservas: number;

    constructor(nombre: string, fecha: Date, capacidadMaxima: number) {
        if (fecha <= new Date()) {
            throw new Error("La fecha del evento debe ser en el futuro.");
        }

        this.nombre = nombre;
        this.fecha = fecha;
        this.capacidadMaxima = capacidadMaxima;
        this.reservas = 0;
    }

    reservar(cantidad: number): boolean {
        if (this.reservas + cantidad <= this.capacidadMaxima) {
            this.reservas += cantidad;
            return true;
        }
        return false;
    }

    cancelarReserva(cantidad: number): boolean {
        if (cantidad <= this.reservas) {
            this.reservas -= cantidad;
            return true;
        }
        return false;
    }

    disponibilidad(): number {
        return this.capacidadMaxima - this.reservas;
    }
}
