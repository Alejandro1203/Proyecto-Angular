import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class JsonService {
    url_departamentos = 'http://localhost:3000/lista_departamentos';
    url_empleados = 'http://localhost:3001/lista_empleados';
}