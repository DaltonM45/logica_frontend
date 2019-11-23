import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaExternaComponent } from './consulta-externa.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { NotaEvolucionComponent } from './nota-evolucion/nota-evolucion.component';
import { InicioConsultaExternaComponent } from './inicio-consulta-externa/inicio-consulta-externa.component';
import { ConsultaExternaRoutingModule } from './consulta-externa-routing.module';
import { NotaReferenciaComponent } from './nota-referencia/nota-referencia.component';
import { NotaInterconsultaComponent } from './nota-interconsulta/nota-interconsulta.component';
import { SharedModule } from '../shared/shared.module';
import { ContraReferenciaComponent } from './contra-referencia/contra-referencia.component';



@NgModule({
  declarations: [
    ConsultaExternaComponent, 
    HistoriaClinicaComponent, 
    NotaEvolucionComponent, 
    InicioConsultaExternaComponent, 
    NotaReferenciaComponent, NotaInterconsultaComponent, ContraReferenciaComponent
  ],
  imports: [
    CommonModule,
    ConsultaExternaRoutingModule,
    SharedModule
  ],
  exports:[
    ConsultaExternaComponent, 
    HistoriaClinicaComponent, 
    NotaEvolucionComponent, 
    InicioConsultaExternaComponent,
    NotaReferenciaComponent
  ]
})
export class ConsultaExternaModule { }
