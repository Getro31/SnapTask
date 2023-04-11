import { Component } from '@angular/core';
import { TaskModel } from '../../../core/model/to-do-list.model';
import { TaskListService } from 'src/app/core/services/task-list.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  //insert!: TaskModel;
  insert$!: Observable<TaskModel>;
  private view!: boolean;
  

  constructor(private _taskService: TaskListService, private route: ActivatedRoute){}
  
  

  ngOnInit(){
    this.view = false;
    //recuperation de l'id de chaque tache tache
    const taskId = +this.route.snapshot.params['id'];
    //affichage du tache correspondant a l'id 
    this.insert$ = this._taskService.getTaskById(taskId);
  }

  onOpen(taskId: number) {
    if(this.view === false){
      this.insert$ = this._taskService.liksByID(taskId, 'snap').pipe(
        tap(() => this._taskService.getTaskById(taskId))
        );
        this.view = true;
    }else{
      this.insert$ = this._taskService.liksByID(taskId, 'unsnap').pipe(
        tap(() => this.insert$ = this._taskService.getTaskById(taskId))
      );
      this.view = false;
    }
  }
}
