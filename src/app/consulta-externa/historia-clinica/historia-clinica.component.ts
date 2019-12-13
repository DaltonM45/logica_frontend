import { Component, OnInit } from '@angular/core';
import { AllFormsManagerService } from 'src/app/core/services/all-forms-manager.service';
import { FormGroup } from '@angular/forms';

//DATE BOOTSTRAP
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esDoLocale } from 'ngx-bootstrap/locale';
defineLocale('de', esDoLocale);



@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {


  // ATIBUTOS
  FichaIdentificacionForm: FormGroup

  datePickerConfig: Partial<BsDatepickerConfig>;
  locale = 'de';

  constructor(
    private formsBuilder: AllFormsManagerService,
    private formsManager: AllFormsManagerService,
    private localeService: BsLocaleService
  ) {
    this.datePickerConfig = Object.assign({}, {
      containerClass:'theme-dark-blue'
    })
   }

  selectedCars = [3];
  cars = [
    { id: 1, name: 'Diabetes' },
    { id: 3, name: 'Cardiopatias' },
    { id: 4, name: 'Hipertension' },
    { id: 4, name: 'Cancer' },
    { id: 4, name: 'Epilepsia' },
    { id: 4, name: 'Hipo / Hipertiroidismo' },
    { id: 4, name: 'Falcemia' },
  ];

  sexo = [
    {id:1 , text:'MASCULINO' },
    {id:2, text: 'FEMENINO'}
  ]

  sangre = [
    {id:1 , text: '+A'},
    {id:2 , text: '+B'},
    {id:3 , text: '+AB'},
    {id:4 , text: '+O'},
    {id:5 , text: '-A'},
    {id:6 , text: '+B'},
    {id:7 , text: '+AB'},
    {id:8 , text: '-O'},
  ]

  EstadoCivil = [
    {id:1 , text:'SOLTERO/A' },
    {id:2, text: 'CASADO/A'},
    {id:3, text: 'UNION LIBRE'}
  ]

  antecedentesPersonales = [
    {id: 1 , text: 'Hipertension'},
    {id: 2 , text: 'Accidente Cerebrovascular'},
    {id: 3 , text: 'Hipo / Hipertiroidismo'},
    {id: 4 , text: 'Sangrado Gastrointestinal'},
    {id: 5 , text: 'Ex-alcoholico'},
    {id: 6 , text: 'Diabetes'},
    {id: 7 , text: 'Hepatitis'},
    {id: 8 , text: 'Cancer'},
    {id: 10 , text: 'Falcemia'},
    {id: 11 , text: 'Ex-adicto'},
    {id: 12 , text: 'Tuberculósis'},
    {id: 13, text: 'Traumatismo'},
    {id: 14, text: 'Transfusión'},
    {id: 15, text: 'Intermaniento'},
    {id: 16, text: 'Ex-fumador'}
  ]

  ngOnInit() {
    console.log('adasd')
    this.formsManager.setForms();
    this.localeService.use(this.locale);
    this.FichaIdentificacionForm = this.formsManager.getichaIdentificacionForms()
  }

}
