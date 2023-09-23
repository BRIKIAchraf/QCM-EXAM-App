import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './components/exam/exam.component';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [

    CommonModule,
    MatRadioModule
  ]
})
export class StudentModule { }
