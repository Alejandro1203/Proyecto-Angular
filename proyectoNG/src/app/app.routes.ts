import { Routes } from '@angular/router';
import { DepartamentoListComponent } from './features/departamento/components/departamento-list/departamento-list.component';

export const routes: Routes = [
    { path: 'departamentos', component: DepartamentoListComponent, title: 'Departamentos'}
];
