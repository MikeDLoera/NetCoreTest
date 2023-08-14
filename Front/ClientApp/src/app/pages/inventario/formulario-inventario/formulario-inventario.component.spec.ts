import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInventarioComponent } from './formulario-inventario.component';

describe('FormularioInventarioComponent', () => {
  let component: FormularioInventarioComponent;
  let fixture: ComponentFixture<FormularioInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
