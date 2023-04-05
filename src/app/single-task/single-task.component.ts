import { Component } from '@angular/core';
import { TaskModel } from '../model/to-do-list.model';
import { TaskListService } from 'services/task-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  insert!: TaskModel;

  constructor(private _taskService: TaskListService, private route: ActivatedRoute){}
  
  view: boolean = false;

  ngOnInit(){
    //recuperation de l'id de chaque tache tache
    const taskId = +this.route.snapshot.params['id'];
    //affichage du tache correspondant a l'id 
    this.insert = this._taskService.getTaskById(taskId);
  }

  onOpen() {
    if(this.view === false){
       this._taskService.liksByID(this.insert.id, this.insert.open);
       this.view = true;
    }else{
      this._taskService.liksByID(this.insert.id, this.insert.open);
      this.view = false;
    }
  }
}