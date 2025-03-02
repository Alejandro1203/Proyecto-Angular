import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departamento } from '../../../../core/models/departamento.model';
import { DepartamentoService } from '../../../../core/services/departamento.service';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';

@Component({
  selector: 'app-empleado-form-creacion',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './empleado-form-creacion.component.html',
  styleUrl: './empleado-form-creacion.component.css'
})
export class EmpleadoFormCreacionComponent {
  createForm: FormGroup;
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService, private fb: FormBuilder, private empleadoService: EmpleadoService) {
    this.departamentoService.getAllDepartamentos().then(departamentos => {
      this.departamentos = departamentos;
    });
    
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.minLength(2)]],
      puesto: ['', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.minLength(3)]],
      id_departamento: [1, Validators.required]
    });
  }

  agregarEmpleado() {
    let nuevoEmpleado: Empleado = this.createForm.value;
    this.empleadoService.agregarEmpleado(nuevoEmpleado);
    console.log('Empleado agregado');
    this.createForm.reset();
  }
}