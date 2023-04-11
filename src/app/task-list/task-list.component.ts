import { Component, OnDestroy, OnInit} from '@angular/core';
import { TaskModel } from '../model/to-do-list.model';
import { TaskListService } from 'services/task-list.service';
import { Observable, Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  myTask!: TaskModel[];
  myTask$!: Observable<TaskModel[]>;

  private destroy$!: Subject<boolean> 

  constructor (private _taskService: TaskListService){

  }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    //acces au donné du service task list par l'argument _taskService de type TaskListService
    //this.myTask = this._taskService.getAllTasks(); 
    this.myTask$ = this._taskService.getAllTasks()

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  }
  ngOnDestroy(){
  this.destroy$.next(true);
   
  }

}
