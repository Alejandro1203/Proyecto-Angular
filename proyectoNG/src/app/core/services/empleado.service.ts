import {empleados} from './json.service';
import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado.model";

@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {
    getAllEmpleados(): Empleado[] {
        return empleados;
    }

    getEmpleadosByDepartamento(departamentoId: number): Empleado[] {
        return empleados.filter(empleado => empleado.id_departamento === departamentoId);
    }
}