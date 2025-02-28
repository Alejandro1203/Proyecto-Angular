import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';

@Component({
  selector: 'app-empleado-list',
  imports: [CommonModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {
    this.empleados = this.empleadoService.getAllEmpleados();
  }
}
