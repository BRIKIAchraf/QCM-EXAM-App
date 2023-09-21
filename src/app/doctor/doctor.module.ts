import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewExamComponent } from './components/new-exam/new-exam.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { MatStepperModule } from '@angular/material/stepper';
@NgModule({
  declarations: [
    SubjectsComponent,
    StudentsComponent,
    
  ],
  imports: [
   // SharedModule,
    CommonModule,
    MatStepperModule
  ]
})
export class DoctorModule { }
