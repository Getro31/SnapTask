import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/model/to-do-list.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private httpClient: HttpClient){

  }

  myTasks: TaskModel[] = [];
  //methode
  getAllTasks(): Observable<TaskModel[]>{
    return this.httpClient.get<TaskModel[]>('http://localhost:3000/facesnaps')
  }
  getTaskById(taskId: number): TaskModel {
      const task = this.myTasks.find(t => t.id === taskId);
      if(task){
        return task;
      }
      throw new Error('Task not found');  
  }
  liksByID(taskId: number, like: number): void{
    const task = this.getTaskById(taskId);
    like === 0 ? task.snaps++ : task.snaps--;
  }
  addTaskById(formValue :{title :string, description: string, uploadAt: Date, imageUrl:string }): void{ 
    const task: TaskModel = {
      ...formValue,
      id: this.myTasks[this.myTasks.length - 1].id + 1,
      snaps: 0,
      location: 'Paris'
    }
    this.myTasks.push(task);
  }
}
