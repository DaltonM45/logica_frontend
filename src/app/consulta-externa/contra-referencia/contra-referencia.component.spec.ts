import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraReferenciaComponent } from './contra-referencia.component';

describe('ContraReferenciaComponent', () => {
  let component: ContraReferenciaComponent;
  let fixture: ComponentFixture<ContraReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
