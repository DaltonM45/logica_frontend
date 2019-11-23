import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaExternaComponent } from './consulta-externa.component';
import { InicioConsultaExternaComponent } from './inicio-consulta-externa/inicio-consulta-externa.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { NotaEvolucionComponent } from './nota-evolucion/nota-evolucion.component';
import { NotaReferenciaComponent } from './nota-referencia/nota-referencia.component';
import { NotaInterconsultaComponent } from './nota-interconsulta/nota-interconsulta.component';
import { ContraReferenciaComponent } from './contra-referencia/contra-referencia.component';

const routes : Routes = [
  {
    path: '',
    component: ConsultaExternaComponent,
    children: [
      {
        path: '',
        component: InicioConsultaExternaComponent
      },
      {
        path: 'historia-clinica',
        component: HistoriaClinicaComponent
      },
      {
        path: 'nota-interconsulta',
        component: NotaInterconsultaComponent
      },
      {
        path:'nota-evolucion',
        component: NotaEvolucionComponent
      },
      {
        path:'nota-referencia',
        component: NotaReferenciaComponent
      },
      {
        path:'contra-referencia',
        component: ContraReferenciaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsultaExternaRoutingModule { }
