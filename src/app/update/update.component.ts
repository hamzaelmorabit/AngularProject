import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  upage: string;
  upid: string;
  upnom: string;
  action: string;
  hidden = false;
  title: string;

  constructor(private route: ActivatedRoute, private servicePerson: PersonServiceService) { }

  ngOnInit(): void {
    this.upid = this.route.snapshot.params.id.toString();
    // const person = this.servicePerson.getpersonne(+this.upid);
    // this.upage = person.age.toString();
    // this.upnom = person.nom.toString();
    this.title = ' Update   Person ' + this.upnom;
    this.servicePerson.getpersonne(+this.upid).subscribe(person => {
      this.upnom = person.nom;
      this.upage = person.age;
    });


    // tslint:disable-next-line:typedef


  }
  // tslint:disable-next-line:typedef
  updatePerson(action, id: number, age: number, nom: string) {
    const v = { id, age, nom };
    this.servicePerson.updatePersonS(id, v);

  }
}
