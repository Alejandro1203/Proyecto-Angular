import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFormCreacionComponent } from './empleado-form-creacion.component';

describe('EmpleadoFormCreacionComponent', () => {
  let component: EmpleadoFormCreacionComponent;
  let fixture: ComponentFixture<EmpleadoFormCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoFormCreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoFormCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
