import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Departamento } from '../../../../core/models/departamento.model';
import { DepartamentoService } from '../../../../core/services/departamento.service';

@Component({
  selector: 'app-departamento-list',
  imports: [CommonModule],
  templateUrl: './departamento-list.component.html',
  styleUrl: './departamento-list.component.css'
})

export class DepartamentoListComponent {

  departamentos: Departamento[] = [];
  nombreDepartamento: string = '';
  
  empleados: Empleado[] = [];
  empleadosList: Empleado[] = [];
  
  constructor(private departamentoService: DepartamentoService, private empleadoService: EmpleadoService) {
    this.departamentoService.getAllDepartamentos().then(departamentos => {
      this.departamentos = departamentos;
    });

    this.empleadoService.getAllEmpleados().then(empleados => {
      this.empleados = empleados;
    });
  }

  mostrarEmpleados(departamentoId: number, departamentoNombre: string) {
    

    this.empleadosList = this.empleados.filter(empleado => empleado.id_departamento == departamentoId);
      this.nombreDepartamento = departamentoNombre;

    console.log(this.empleados);
    
  }
}