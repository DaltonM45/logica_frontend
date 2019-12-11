import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports:[
    NgxMaskModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BsDatepickerModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
