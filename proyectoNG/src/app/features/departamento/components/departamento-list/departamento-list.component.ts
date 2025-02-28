import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoService } from '../../../../core/services/departamento.service';
import { Departamento } from '../../../../core/models/departamento.model';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';

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
  empleadosDepartamentoId: Empleado[] = [];
  

  constructor(private departamentoService: DepartamentoService, private empleadoService: EmpleadoService) {
    this.departamentos = this.departamentoService.getAllDepartamentos();
    this.empleados = this.empleadoService.getAllEmpleados();
  }

  mostrarEmpleados(departamentoId: number, departamentoNombre: string) {
    this.empleadosDepartamentoId = this.empleadoService.getEmpleadosByDepartamento(departamentoId);
    this.nombreDepartamento = departamentoNombre;
  }

}
