import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToDoListComponent,
    TaskListComponent,
    SingleTaskComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ToDoListComponent,
    TaskListComponent,
    SingleTaskComponent,
    NewTaskComponent
  ]
})
export class FaceSnapModule { }
