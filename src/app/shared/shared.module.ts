import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    NgSelectModule,
    FormsModule
  ],
  exports:[
    NgxMaskModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
