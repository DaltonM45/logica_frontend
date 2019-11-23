import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaReferenciaComponent } from './nota-referencia.component';

describe('NotaReferenciaComponent', () => {
  let component: NotaReferenciaComponent;
  let fixture: ComponentFixture<NotaReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
