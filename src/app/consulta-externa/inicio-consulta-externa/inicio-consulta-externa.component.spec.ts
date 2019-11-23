import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioConsultaExternaComponent } from './inicio-consulta-externa.component';

describe('InicioConsultaExternaComponent', () => {
  let component: InicioConsultaExternaComponent;
  let fixture: ComponentFixture<InicioConsultaExternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioConsultaExternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioConsultaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
