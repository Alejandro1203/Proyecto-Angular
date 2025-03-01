import { JsonService } from "./json.service";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado.model";

@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {
    empleados: Empleado[] = [];

    constructor(private jsonService: JsonService) { }

    async getAllEmpleados(): Promise<Empleado[]> {
        const data = await fetch(this.jsonService.url_empleados);
        this.empleados = await data.json() ?? [];
        return this.empleados;
    }

    async agregarEmpleado(empleado: Empleado): Promise<void> {
        await fetch(this.jsonService.url_empleados, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empleado)
        });
    }

    getEmpleadosByDepartamento(departamentoId: number): Empleado[] {
        return this.empleados.filter(empleado => empleado.id_departamento === departamentoId);
    }
}