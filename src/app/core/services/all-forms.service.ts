import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
    providedIn:'root'
})
export class AllFormsServices{


    constructor(
        private fb : FormBuilder
    ){}


    public FichaIdentificacionBuilder(){
        return this.fb.group({
            'Nombres': [null, [Validators.required]],
            'Apellidos': [null, [Validators.required]],
            'Apodo': [null],
            'Sexo': [null, [Validators.required]],
            'FechaNacimiento': [null, [Validators.required]],
            'Sangre': [null, [Validators.required]],
            'EstadoCivil': [null, [Validators.required]],
            'Escolaridad': [null, [Validators.required]],
            'Ocupacion': [null, [Validators.required]],
            'Telefono': [null, [Validators.required]],
            'Celular': [null],
            'Email': [null],
            'Pais': [null, [Validators.required]],
            'Provincia': [null, [Validators.required]],
            'Municipio': [null, [Validators.required]],
            'Sector': [null, [Validators.required]]
        })
    }

}   