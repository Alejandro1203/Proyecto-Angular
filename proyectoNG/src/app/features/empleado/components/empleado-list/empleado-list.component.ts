import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Departamento } from '../../../../core/models/departamento.model';
import { DepartamentoService } from '../../../../core/services/departamento.service';

@Component({
  selector: 'app-empleado-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {
  empleados: Empleado[] = [];
  departamentos: Departamento[] = [];
  activarEditar: boolean = false;
  updateForm: FormGroup;
  id_empleado: string = '';

  constructor(private empleadoService: EmpleadoService, private departamentoService: DepartamentoService, private fb: FormBuilder) {
    this.empleadoService.getAllEmpleados().then(empleados => {
      this.empleados = empleados;
    });

    this.departamentoService.getAllDepartamentos().then(departamentos => {
      this.departamentos = departamentos;
    });

    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
      puesto: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
      id_departamento: [1 ,Validators.required]
    });
  }

  getEmpleadosByDepartamento(): Empleado[] {
    const slc_departamento = Number((document.getElementById('slc_departamento') as HTMLSelectElement).value);

    if (slc_departamento == 0) {
      this.empleadoService.getAllEmpleados().then(empleados => {
        this.empleados = empleados;
      });
    } else {
      this.empleados = this.empleadoService.getEmpleadosByDepartamento(slc_departamento);
    }
    
    return this.empleados;
  }

  eliminarEmpleado(empleadoId: number): void {
    if(confirm('¿Está seguro de eliminar este empleado?')) {
      this.empleadoService.eliminarEmpleado(empleadoId).then(() => {
        this.empleadoService.getAllEmpleados().then(empleados => {
          this.empleados = empleados;
        });
      });
    }
  }

  activarForm(empleadoId: number ,empleadoName: string, empleadoPuesto: string, empleadoIdDepartamento: number): void {
    this.activarEditar = true;
    this.id_empleado = String(empleadoId);

    this.updateForm.setValue({
      name: empleadoName,
      puesto: empleadoPuesto,
      id_departamento: empleadoIdDepartamento
    });
  }

  actualizarEmpleado(): void {
    if(confirm('¿Está seguro de actualizar este empleado?')) {
      let nuevoEmpleado: Empleado = this.updateForm.value;
      this.empleadoService.actualizarEmpleado(nuevoEmpleado, this.id_empleado).then(() => {
        this.empleadoService.getAllEmpleados().then(empleados => {
          this.empleados = empleados;
        });
        this.activarEditar = false;
        console.log('Empleado actualizado');
      }); 
    }
  }
}