import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  id: number;
  nom: string;
  age: number;
  constructor(private servicepersonne: PersonServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    const person = this.servicepersonne.getpersonne(this.id);
    // this.nom = person.nom;
    // this.age = person.age;
  }

}
