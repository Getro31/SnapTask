import { Component, OnInit } from '@angular/core';
import { Observable, Subject, concatMap, delay, exhaustMap, filter, interval, map, mergeMap, of, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
 })
 export class AppComponent implements OnInit {
  
  //creation d'un observable
  // intarval$! : Observable<string>; 

  yellowTrainCall = 0;
  redTrainCall = 0;

  private destroy$!: Subject<boolean>;

  ngOnInit() {
    interval(500).pipe(
      take(10),
      map(value => value %2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      switchMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    )
    
    // this.intarval$ = interval(1000).pipe(
    //   filter(value => value %3 === 0),
    //   map(value => value %2===0 ? `je suis value ${value} et je suis pair` : 
    //   `je suis value ${value} et je suis impaire`),
    //   tap(value => this.logger(value))
      
    // )
  
  }
  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainCall++ : this.yellowTrainCall++;
    const trainIndex = isRedTrain ? this.redTrainCall : this.yellowTrainCall;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
  logger(text: string) {
    console.log(`log: ${text}`)
  }

 }