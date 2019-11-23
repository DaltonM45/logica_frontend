import { AllFormsServices } from './all-forms.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class AllFormsManagerService {

    mainForms: FormGroup


    constructor(
        private allForms : AllFormsServices,
        private fb : FormBuilder
    ){}

    setForms(){
        this.mainForms = this.fb.group({
            'FichaIdentificacion': this.allForms.FichaIdentificacionBuilder()
        })
    }

    public getichaIdentificacionForms(){
       return  this.mainForms.get('FichaIdentificacion') as FormGroup
    }


}