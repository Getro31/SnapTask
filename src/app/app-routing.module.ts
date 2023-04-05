import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

//Initialization d'un tableau de type Routes contenant les chemins de nos components
const routes: Routes = [
  {
    path: 'task',
    title: 'Task List',
    component: TaskListComponent,
  },
  {
    path: '',
    title: 'Landing Page',
    component: LandingPageComponent,
  },
  {
    //route vers une tache specific
    path: 'task/:id',
    title: 'Single Task',
    component: SingleTaskComponent,
  },
  {
    path: 'create',
    title: 'Create New Task',
    component: NewTaskComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    //importation du RouterModule pour passé le tableau declarer au dessus a la racine de l'app d'ou le '.forRout'
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    //exports du router module configurer 
    RouterModule
  ]
})
export class AppRoutingModule { }
