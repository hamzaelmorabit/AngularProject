import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /*  id: number;
   nom: string;
   age: number; */
  constructor(private servicepersonne: PersonServiceService) { }
  // tslint:disable-next-line:typedef
  addpersonne(id: number, nom: string, age: number) {
    if (id && nom && age) { this.servicepersonne.addpersonne(id, nom, age); }
  }

  ngOnInit(): void {
  }


}
