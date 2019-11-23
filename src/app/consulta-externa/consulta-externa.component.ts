import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-externa',
  templateUrl: './consulta-externa.component.html',
  styleUrls: ['./consulta-externa.component.css']
})
export class ConsultaExternaComponent implements OnInit {

  constructor( 
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit() {
  }

  back(){
    let currentRoute = this.router.url.split('/');
    currentRoute.pop();
    this.router.navigate([currentRoute.join('/')]);
  }

}
