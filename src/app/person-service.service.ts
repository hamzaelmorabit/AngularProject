import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  personnes = [{ id: 1, nom: 'Najmi', age: 25 }, { id: 2, nom: 'Alami', age: 42 }];
  backEndURL = 'http://localhost:9090/api/displayAll';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getpersonne(id: number) { return this.personnes.find(e => e.id === +id); }
  // tslint:disable-next-line:typedef
  deletepersonne(id: number) { this.personnes.splice(this.personnes.findIndex(e => e.id === +id), 1); }
  // tslint:disable-next-line:typedef
  addpersonne(id: number, nom: string, age: number) {
    this.personnes.push({ id, nom, age });

  }
  // tslint:disable-next-line:typedef
  getListpersonnes(): Observable<any> { return this.http.get(this.backEndURL); }
  // tslint:disable-next-line:typedef
  updatePerson(id, nom, age) {
    console.log(typeof (id));
    this.personnes[this.personnes.findIndex(e => e.id === +id)] = {
      id, nom, age
    };
    //    this.personnes.forEach(person => { if (this.getpersonne(id) === person) { person = { id, age, nom }; } });
  }
}
