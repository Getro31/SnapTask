import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { TaskModel } from 'src/app/core/model/to-do-list.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private httpClient: HttpClient){

  }

  myTasks$!: Observable<TaskModel[]> ;
  //methode
  getAllTasks(): Observable<TaskModel[]>{
    return this.httpClient.get<TaskModel[]>('http://localhost:3000/facesnaps')
  }
  getTaskById(taskId: number): Observable<TaskModel> {
    return this.httpClient.get<TaskModel>(`http://localhost:3000/facesnaps/${taskId}`)
  }
  liksByID(taskId: number, like: 'snap' | 'unsnap'): Observable<TaskModel>{
    return this.getTaskById(taskId).pipe(
      map(task =>({
        ...task,
        snaps: task.snaps + (like === 'snap' ? 1 : -1)
      })),
      switchMap(updateSnapTask =>  this.httpClient.put<TaskModel>(`http://localhost:3000/facesnaps/${taskId}`,updateSnapTask))
  )}
  //method pour ajouter des snaps dans le serveur 
  addSnapTask(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<TaskModel>{
    return this.getAllTasks().pipe(
      map(task => [...task].sort((a: TaskModel, b: TaskModel) => a.id - b.id )),
      map(sortedTask => sortedTask[sortedTask.length - 1]),
      map(lastTask => ({
        ...formValue,
        snaps : 0,
        createdDate: new Date(),
        id: lastTask.id + 1
      })),
      switchMap(newSnapTask => this.httpClient.post<TaskModel>('http://localhost:3000/facesnaps',newSnapTask))
    );
  }
  
}
