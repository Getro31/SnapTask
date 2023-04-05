import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleTaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'fr-FR'} ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
