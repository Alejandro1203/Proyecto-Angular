import { departamentos } from "./json.service";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento.model";

@Injectable({
    providedIn: 'root'
})

export class DepartamentoService {
    
    getAllDepartamentos(): Departamento[] {
        return departamentos;
    }
}