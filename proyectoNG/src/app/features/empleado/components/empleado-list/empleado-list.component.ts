import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Departamento } from '../../../../core/models/departamento.model';
import { DepartamentoService } from '../../../../core/services/departamento.service';

@Component({
  selector: 'app-empleado-list',
  imports: [CommonModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {
  empleados: Empleado[] = [];
  departamentos: Departamento[] = [];

  constructor(private empleadoService: EmpleadoService, private departamentoService: DepartamentoService) {
    this.empleados = this.empleadoService.getAllEmpleados();
    this.departamentos = this.departamentoService.getAllDepartamentos();
  }

  getEmpleadosByDepartamento(): Empleado[] {
    const slc_departamento = document.getElementById('slc_departamento') as HTMLSelectElement;

    this.empleados = slc_departamento.value === '0' ? this.empleadoService.getAllEmpleados() : this.empleadoService.getEmpleadosByDepartamento(Number(slc_departamento.value));


    return this.empleados;
  }

}
