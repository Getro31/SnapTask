import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/model/to-do-list.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  myTasks: TaskModel[] = [
    {
      id: 1,
      title: 'My First Task',
      instruction: 'This is my first task',
      uploadAt: new Date(),
      open: 0
    },
    {
      id: 2,
      title: 'My Second Task',
      instruction: 'This is my second task',
      uploadAt: new Date(),  
      open: 0
    },
    {
      id: 3,
      title: 'My Third Task',
      instruction: 'This is my third task',
      uploadAt: new Date(),
      open: 0
    },
    {
      id: 4,
      title: 'My Fourth Task',
      instruction: 'This is my fourth task',
      uploadAt: new Date(),
      open: 0
    } 
  ];
  //methode
  getAllTasks(): TaskModel[]{
    return this.myTasks;
  }
  getTaskById(taskId: number): TaskModel {
      const task = this.getAllTasks().find(t => t.id === taskId);
      if(task){
        return task;
      }
      throw new Error('Task not found');  
  }
  liksByID(taskId: number, like: 1 | 0): void{
    const task = this.getTaskById(taskId);
    like === 0 ? task.open++ : task.open--;
  }
  addTaskById(formValue :{title :string, instruction: string, uploadAt: Date}): void{ 
    const task: TaskModel = {
      ...formValue,
      id: this.myTasks[this.myTasks.length - 1].id + 1,
      open: 0
    }
    this.myTasks.push(task);
  }
}
