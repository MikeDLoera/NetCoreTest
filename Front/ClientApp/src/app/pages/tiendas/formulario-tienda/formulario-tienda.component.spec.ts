import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTiendaComponent } from './formulario-tienda.component';

describe('FormularioTiendaComponent', () => {
  let component: FormularioTiendaComponent;
  let fixture: ComponentFixture<FormularioTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
