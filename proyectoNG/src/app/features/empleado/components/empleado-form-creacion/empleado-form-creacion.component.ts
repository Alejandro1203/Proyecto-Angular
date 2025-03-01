import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departamento } from '../../../../core/models/departamento.model';
import { DepartamentoService } from '../../../../core/services/departamento.service';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empleado-form-creacion',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './empleado-form-creacion.component.html',
  styleUrl: './empleado-form-creacion.component.css'
})
export class EmpleadoFormCreacionComponent {
  createForm: FormGroup;
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService, private fb: FormBuilder) {
    this.departamentos = this.departamentoService.getAllDepartamentos();  
    
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
      jobPosition: ['', Validators.required],
      idDepartamento: [1 ,Validators.required]
    });
  }
}
