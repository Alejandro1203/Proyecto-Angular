import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartamentoListComponent } from './features/departamento/components/departamento-list/departamento-list.component';
import { EmpleadoListComponent } from './features/empleado/components/empleado-list/empleado-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'departamentos', component: DepartamentoListComponent, title: 'Departamentos'},
    { path: 'empleados', component: EmpleadoListComponent, title: 'Empleados'}
];
