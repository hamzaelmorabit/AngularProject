import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../Person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person;
  /*  id: number;
   nom: string;
   age: number; */
  constructor(private servicepersonne: PersonServiceService) { }
  // tslint:disable-next-line:typedef
  addpersonne(id: number, nom: string) {
    // let person = new Person(id, nom, age);

    if (id && nom) {
      // this.person = new Person();
      // console.log(id, "id_", "nom_", nom, "age_", age);
      // this.person = { id, nom, age };
      this.servicepersonne
        .createEmployee(this.person).subscribe(data => {
          console.log(data);
          // person = new Person(id, nom, age);

        },
          error => console.log(error));

      // this.servicepersonne.addpersonne(new Person(id, nom, age));
    }
  }





  ngOnInit(): void {
    this.person = new Person(1, ' ', 1);
  }


}
