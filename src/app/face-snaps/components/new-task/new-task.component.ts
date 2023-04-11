import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { TaskModel } from '../../../core/model/to-do-list.model';
import { TaskListService } from 'src/app/core/services/task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{

  taskForm!: FormGroup;
  taskPreview$!: Observable<TaskModel>
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, 
              private _taskService: TaskListService,
              private router: Router){

  }
  ngOnInit() {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.taskForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      instruction: [null, [Validators.required]],
      imageUrl: [null, [Validators.required ,Validators.pattern(this.urlRegex)]],
      location: [null],
    },
    {
      // l'Observable emet lorsque l'utilisateur passe sur un champ ou a finit de remplir le champ en cour
      updateOn : 'blur',
    }
    );
    // on va recuperer le task form avec un obseravable valueChanges  lire ds carnets 
    this.taskPreview$ = this.taskForm.valueChanges.pipe(
      map(value => ({
        ...value,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }
  onSubmit() {
    this._taskService.addSnapTask(this.taskForm.value).pipe(
      tap(() => this.router.navigateByUrl('/task'))
    ).subscribe();
  }

}
