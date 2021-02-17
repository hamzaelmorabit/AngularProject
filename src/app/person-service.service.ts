import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PersonServiceService {

  personnes = [{ id: 1, nom: 'Najmi', age: 25 }, { id: 2, nom: 'Alami', age: 42 }];

  backEndURL = 'http://localhost:9090/api/displayAll';


  backEndURLid = 'http://localhost:9090/api/findByid1';

  private baseUrl = 'http://localhost:9090/api/addperson';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getpersonne(id: number): Observable<any> {
    console.log(this.personnes);
    // return this.personnes.find(e => e.id === +id);
    return this.http.get(
      // this.backEndURLid + '/' + id
      'http://localhost:9090/api/findByid1/' + id);
  }

  // tslint:disable-next-line:typedef
  deletepersonne(id: number) { this.personnes.splice(this.personnes.findIndex(e => e.id === +id), 1); }

  deletepersonneS(id: number): Observable<any> {
    return this.http.delete('http://localhost:9090/api/deleteperson/' + id, { responseType: 'text' });
  }

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:ban-types
  addpersonne(id: number, nom: string, age: number): Observable<Object> {
    // this.personnes.push({ id, nom, age });
    const person = { id, nom, age };
    // console.log(person);
    // const body = JSON.stringify(person);
    // const headers = { 'content-type': 'application/json' };
    console.log('add_form');

    // console.log(body);
    return this.http.post(
      'http://localhost:9090/api/addperson', person, { responseType: 'text' });
  }

  createEmployee(perons: object): Observable<any> {
    console.log('person', perons);
    return this.http.post(
      'http://localhost:9090/api/addperson', perons, { responseType: 'text' });
  }

  // tslint:disable-next-line:typedef
  getListpersonnes(): Observable<any> {
    //   console.log(this.http.get(this.backEndURL));
    return this.http.get(this.backEndURL);
  }


  // tslint:disable-next-line:typedef
  updatePerson(id, nom, age) {
    // console.log(typeof (id));
    this.personnes[this.personnes.findIndex(e => e.id === +id)] = {
      id, nom, age
    };
    //    this.personnes.forEach(person => { if (this.getpersonne(id) === person) { person = { id, age, nom }; } });
  }

  // tslint:disable-next-line:typedef
  updatePersonS(id, value) {
    // console.log(typeof (id));

    return this.http.put(`${this.baseUrl}/${id}`, value, { responseType: 'text' });
  }
  //    this.personnes.forEach(person => { if (this.getpersonne(id) === person) { person = { id, age, nom }; } });
}

