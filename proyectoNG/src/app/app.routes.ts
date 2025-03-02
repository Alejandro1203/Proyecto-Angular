import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartamentoListComponent } from './features/departamento/components/departamento-list/departamento-list.component';
import { EmpleadoListComponent } from './features/empleado/components/empleado-list/empleado-list.component';
import { EmpleadoFormCreacionComponent } from './features/empleado/components/empleado-form-creacion/empleado-form-creacion.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'departamentos', component: DepartamentoListComponent, title: 'Departamentos'},
    { path: 'empleados', component: EmpleadoListComponent, title: 'Empleados'},
    { path: 'crear-empleado', component: EmpleadoFormCreacionComponent, title: 'Crear Empleado'}
];