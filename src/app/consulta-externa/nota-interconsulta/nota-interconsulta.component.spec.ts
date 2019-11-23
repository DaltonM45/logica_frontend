import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaInterconsultaComponent } from './nota-interconsulta.component';

describe('NotaInterconsultaComponent', () => {
  let component: NotaInterconsultaComponent;
  let fixture: ComponentFixture<NotaInterconsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaInterconsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
