import { JsonService } from "./json.service";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento.model";

@Injectable({
    providedIn: 'root'
})

export class DepartamentoService {

    constructor(private jsonService: JsonService) {}
    
    async getAllDepartamentos(): Promise<Departamento[]> {
        const data = await fetch(this.jsonService.url_departamentos);
        return await data.json() ?? [];
    }
}