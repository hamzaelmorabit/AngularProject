import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  /*
   public persons = [ {id : 12, nom : 'Najmi', age: 25 },
   {id : 2, nom : 'Alami', age: 4112 }]; */
  persons: Observable<any>;
  constructor(private servicepersonne: PersonServiceService) { }

  ngOnInit(): void {

    this.persons = this.servicepersonne.getListpersonnes();
    //  console.log(this.persons);
  }
  // tslint:disable-next-line:typedef
  reloadData() {
    console.log('reloadData');
    this.persons = this.servicepersonne.getListpersonnes();
  }

  // tslint:disable-next-line:typedef
  DeletePerson(id: number) {
    // console.log('delete ');
    if (confirm('You want to delete the person ?')) {
      //  this.servicepersonne.deletepersonneS(id);
      this.servicepersonne.deletepersonneS(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();

          },
          error => console.log(error));

    }
  }

}
