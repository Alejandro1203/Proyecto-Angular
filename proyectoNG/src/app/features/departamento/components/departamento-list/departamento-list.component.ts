import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoService } from '../../../../core/services/departamento.service';
import { Departamento } from '../../../../core/models/departamento.model';

@Component({
  selector: 'app-departamento-list',
  imports: [CommonModule],
  templateUrl: './departamento-list.component.html',
  styleUrl: './departamento-list.component.css'
})
export class DepartamentoListComponent {

  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService) {
    this.departamentos = this.departamentoService.getAllDepartamentos();
  }

}
