import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  personnes = [ {id : 1, nom : 'Najmi', age: 25 }, {id : 2, nom : 'Alami', age: 42 }];

  constructor() { }
  // tslint:disable-next-line:typedef
  getpersonne(id: number){return this.personnes.find(e => e.id === +id); }
  // tslint:disable-next-line:typedef
  deletepersonne(id: number) {this.personnes.splice(  this.personnes.findIndex(e => e.id === +id), 1); }
  // tslint:disable-next-line:typedef
  addpersonne(id: number, nom: string, age: number) {
        this.personnes.push({id, nom, age});

       }
// tslint:disable-next-line:typedef
  getListpersonnes(){return this.personnes; }
}
