import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {


  minute: number;
  second: any;
  heure: number;
  compt: number;

  constructor() { }

  ngOnInit(): void {
    this.minute = 0;
    this.heure = 0;
    this.compt = 1;
    const data$ = new Observable(
      observe => {
        setInterval(() => {
          observe.next(this.compt);
          this.compt++;
        }, 1000);
      }
    );

    data$.subscribe({

      next: value => {
        this.second = value;

        if (this.second === 59) {
          this.minute += 1;
          // else { this.minute = 1; }
          this.compt = 0;

        }
        if (this.minute === 59) {
          this.heure += 1;
          this.compt = 0;
          this.minute = 0;
        }
        // console.log(this.compt);
      },
      error: err => console.log(err),
      complete: () => console.log('Done')
    });

  }

}
