import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from '../person-service.service';
import { Observable } from 'rxjs';
/* import { PersonServiceService } from '../person-service.service'; */

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  nom: any;
  age: Observable<any>;
  person: Observable<any>;
  constructor(private servicepersonne: PersonServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    /*   const person = this.servicepersonne.getpersonne(this.id); */
    // this.person =
    this.servicepersonne.getpersonne(this.id).subscribe(person => {
      this.nom = person.nom;
      this.age = person.age;

    });
    // console.log(this.person);
    // this.nom = this.person.nom;
    // this.age = this.person.age;


  }
  // updatePerson() { }
}


/*  id: number;
 nom: string;
 age: string;
 constructor(private route: ActivatedRoute) { }

 ngOnInit(): void {
   this.id = this.route.snapshot.params.id;
   this.nom = this.route.snapshot.params.nom;
   this.age = this.route.snapshot.params.age;
 } */
