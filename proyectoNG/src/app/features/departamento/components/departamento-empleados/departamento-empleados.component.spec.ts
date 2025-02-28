import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoEmpleadosComponent } from './departamento-empleados.component';

describe('DepartamentoEmpleadosComponent', () => {
  let component: DepartamentoEmpleadosComponent;
  let fixture: ComponentFixture<DepartamentoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
