import { Component, Input} from '@angular/core';
import { TaskModel } from '../model/to-do-list.model';
import { TaskListService } from 'services/task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent{

  @Input() insert!: TaskModel;

  constructor(private _taskService: TaskListService, private route: Router){}
  
  view: boolean = false;

  onOpen() {
    if(this.view === false){
       this._taskService.liksByID(this.insert.id, this.insert.open);
       this.view = true;
    }else{
      this._taskService.liksByID(this.insert.id, this.insert.open);
      this.view = false;
    }
  }
  onView(){
    this.route.navigateByUrl(`task/${this.insert.id}`)
  }
}
